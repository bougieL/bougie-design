const fs = require('fs')
const execSync = require('child_process').execSync

function replaceFileContent(path, searchValue, replaceValue) {
  let fileContent = fs.readFileSync(path, 'utf8')
  fs.writeFileSync(path, fileContent.replace(searchValue, replaceValue))
}

function exec(cmd) {
  execSync(cmd, {
    stdio: 'inherit'
  })
}

module.exports = {
  exec,
  replaceFileContent
}