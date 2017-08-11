#/bin/sh

ng build --dev

if [ -d '../dataportal-website' ]; then
    rm -rf ../dataportal-website/*
fi

if [ -d 'dist' ]; then
    mv dist/* ../dataportal-website/.
fi
