#!/bin/bash

./node_modules/.bin/tslint --fix -c tslint.json "src/**/*.ts*"

./node_modules/.bin/stylelint --fix --config stylelint.json "src/**/*.scss"