#!/bin/bash
# Build and copy to the Cordorva www folder
pnpm build
cp -R build/* cordova/www

cd build
python3 -m http.server
