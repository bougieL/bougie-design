#!/bin/bash

./node_modules/.bin/tslint -c tslint.json "src/**/*.ts*"

./node_modules/.bin/stylelint --config stylelint.json "src/**/*.scss"
