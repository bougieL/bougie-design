const fs = require('fs')
const chalk = require('chalk')
const execSync = require('child_process').execSync

function replaceFileContent(path, searchValue, replaceValue) {
  let fileContent = fs.readFileSync(path, 'utf8')
  fs.writeFileSync(path, fileContent.replace(searchValue, replaceValue))
}

function exec(cmd) {
  console.log(chalk.blue.bold(cmd))
  const stdout = execSync(cmd, {
    stdio: 'inherit'
  })
  if (stdout) {
    console.log(chalk.green.bold(stdout))
  }
}

function webpackMerge(base, ...cs) {
  let config = Object.assign({}, base)
  cs.forEach(ci => {
    config = mergeItem(config, ci)
  })
  return config
  function mergeItem(bc, ci) {
    const config = Object.assign({}, bc)
    Object.keys(ci).forEach(i => {
      if (hasOwnProperty(config, i) && !isString(config[i])) {
        if (isArray(config[i])) {
          config[i] = [].concat(config[i]).concat(ci[i])
        } else {
          config[i] = Object.assign({}, config[i], ci[i])
        }
      } else {
        config[i] = ci[i]
      }
    })
    return config
  }
}

module.exports = {
  exec,
  webpackMerge,
  replaceFileContent
}

// ------------

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function isString(v) {
  return Object.prototype.toString.call(v) === '[object String]'
}

function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]'
}

function isObject(v) {
  return Object.prototype.toString.call(v) === '[object Object]'
}
