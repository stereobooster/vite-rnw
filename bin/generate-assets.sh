#!/usr/bin/env bash

cd ./public/pwa || exit
npx pwa-asset-generator ../logo.svg --background "#000000" --manifest ../app.webmanifest --path "/pwa"