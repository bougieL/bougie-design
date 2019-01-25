#!/bin/bash

cp -r ./src ./lib

for item in `find ./lib/components -name index.scss`
do
  target=`echo $item | sed "s/scss/css/"`
  ./node_modules/.bin/node-sass $item > $target
done

./node_modules/.bin/tsc

for item in `find ./lib/components -name index.js`
do
  sed -i "s/\/style/\/style\/index\.css/g" $item
done