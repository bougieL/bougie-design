const fs = require('fs-extra')
const { exec, Log, replaceFileContent } = require('../config/_utils')
const paths = require('../config/_paths')
const sass = require('node-sass')
const postcss = require('postcss')

main()

async function main() {
  clean()
  copy()
  compileTS()
  await compileScss()
  removeUnuse()
  fixCssPath()
  Log.success('release finished.')
}

function clean() {
  fs.removeSync(paths.appLib)
}

function copy() {
  fs.copySync(paths.appSrc, paths.appLib)
}

function compileTS() {
  exec(`${paths.binTSC} -p tsconfig.prod.json`)
}

async function compileScss() {
  const includes = [/^[A-Z]/]
  for (const p of fs.readdirSync(paths.resolveLibComponents())) {
    if (includes.some(reg => reg.test(p))) {
      const scssPath = paths.resolveLibComponents(p, 'style', 'index.scss')
      const cssPath = paths.resolveLibComponents(p, 'style', 'index.css')
      if (fs.existsSync(scssPath)) {
        const sassRes = sass.renderSync({
          file: scssPath
        })
        const postcssRes = await postcss([
          require('autoprefixer'),
          require('cssnano')
        ]).process(sassRes.css, {
          from: undefined,
          to: undefined
        })
        Log.success(`compile ${scssPath} success.`)
        fs.writeFileSync(cssPath, postcssRes.css)
      }
    }
  }
}

function fixCssPath() {
  Log.info('started fix css path.')
  const includes = [/^[A-Z]/]
  for (const p of fs.readdirSync(paths.resolveLibComponents())) {
    if (includes.some(reg => reg.test(p))) {
      const compPath = paths.resolveLibComponents(p)
      for (const f of fs.readdirSync(compPath)) {
        const file = paths.resolveLibComponents(p, f)
        if (fs.statSync(file).isFile()) {
          replaceFileContent(file, './style', './style/index.css')
        }
      }
    }
  }
  Log.success('fix css path finished.')
}

function removeUnuse() {
  const excludes = [/components/]
  for (const p of fs.readdirSync(paths.resolveLib())) {
    if (!excludes.some(reg => reg.test(p))) {
      fs.removeSync(paths.resolveLib(p))
    }
  }
}
