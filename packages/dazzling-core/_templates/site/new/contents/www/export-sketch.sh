#!/bin/sh


/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export slices assets/bamboo.sketch
mv logo.svg src/assets/
mv logo-* static/
cp static/logo-192.png src/assets/favicon.ico