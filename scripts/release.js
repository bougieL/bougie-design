const fs = require('fs-extra')
const { exec, Log, replaceFileContent } = require('../config/_utils')
const paths = require('../config/_paths')
const { join } = require('path')
const sass = require('node-sass')
const postcss = require('postcss')

main()

async function main() {
  Log.info('release started.')
  clean()
  copy()
  compileTS()
  await compileScss()
  removeUnused()
  fixCssPath()
  Log.success('release finished.')
}

function clean() {
  fs.removeSync(paths.appLib)
  Log.success('clean cache success.')
}

function copy() {
  fs.copySync(paths.appSrc, paths.appLib)
  Log.success('copy src success.')
}

function compileTS() {
  exec(`${paths.binTSC} -p tsconfig.prod.json`)
  Log.success('compile ts success.')
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
  Log.success('compile scss success.')
}

function fixCssPath() {
  const includes = [/^[A-Z]/]
  for (const p of fs.readdirSync(paths.resolveLibComponents())) {
    if (includes.some(reg => reg.test(p))) {
      const compPath = paths.resolveLibComponents(p)
      for (const f of fs.readdirSync(compPath)) {
        const file = paths.resolveLibComponents(p, f)
        if (fs.statSync(file).isFile()) {
          replaceFileContent(file, './style', './style/index.css')
          Log.success(`fix ${file} css path success.`)
        }
      }
    }
  }
  Log.success('fix css path finished.')
}

function removeUnused() {
  const excludeDirs = [/components/]
  for (const p of fs.readdirSync(paths.resolveLib())) {
    if (!excludeDirs.some(reg => reg.test(p))) {
      fs.removeSync(paths.resolveLib(p))
    }
  }
  const includeFiles = [/\.tsx/, /^\w+.ts/, /\.scss/]
  ;(function removeFiles(path) {
    for (const p of fs.readdirSync(path)) {
      const child = join(path, p)
      if (fs.statSync(child).isDirectory()) {
        removeFiles(child)
      } else if (includeFiles.some(reg => reg.test(p))) {
        fs.removeSync(child)
        Log.success(`remove ${child} success.`)
      }
    }
  })(paths.resolveLibComponents())
  Log.success('remove unused success.')
}
