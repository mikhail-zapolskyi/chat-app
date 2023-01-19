#! /bin/bash

git add .

echo "Please describe changes"
read DESCRIPTION

echo $DESCRIPTION
git commit -m  "$DESCRIPTION"

git push