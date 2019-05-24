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

module.exports = {
  exec,
  replaceFileContent
}
