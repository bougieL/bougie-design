#!/bin/bash

for item in `find ./lib/components/ -name index.scss`
do
  echo $item
done