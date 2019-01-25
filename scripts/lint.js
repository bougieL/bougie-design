const {exec} = require('../config/_utils')

exec('./node_modules/.bin/tslint -c tslint.json "src/**/*.ts*"')

exec('./node_modules/.bin/stylelint --config stylelint.json "src/**/*.scss"')