#!/bin/bash

# remove lib directory
rm -rf ./lib

# copy directory structure
find ./src -type d | sed "s/\/src\//\/lib\//" | xargs mkdir -p

# compile scss to css
for item in `find ./src/components -name index.scss`
do
  target=`echo $item | sed "s/\.scss/\.css/" | sed "s/src/lib/"`
  ./node_modules/.bin/node-sass $item > $target
done

# copy media files
for item in `find ./src/components -regex ".*\.\(eot\|svg\|ttf\|woff\|woff2\|jpg\|jpeg\|png\)$"`
do
  target=`echo $item | sed "s/\/src\//\/lib\//"`
  cp $item $target
done

# compile ts to js
./node_modules/.bin/tsc -p tsconfig.prod.json

# fix css path
for item in `find ./lib/components -regex ".*/index\.\(js\|d.ts\)"`
do
  sed -i "s/\/style/\/style\/index\.css/g" $item
done

find ./lib -maxdepth 1 -type f | xargs rm -rf

rm -rf ./lib/style

rm -rf ./lib/views
