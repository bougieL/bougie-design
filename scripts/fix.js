const {exec} = require('../config/_utils')

exec('./node_modules/.bin/tslint --fix -c tslint.json "src/**/*.ts*"')

exec('./node_modules/.bin/stylelint --fix --config stylelint.json "src/**/*.scss"')