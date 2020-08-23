# YetAnotherURLShortener
The purpose of a [URL shortener](https://en.wikipedia.org/wiki/URL_shortening) is to convert a long unreadable URL into a short URL that routes the user to the original URL. 

For example the shortener can convert this URL: 
- https://www.amazon.in/Apple-iPhone-X-Silver-256GB/dp/B071P37652/ref=sr_1_1?s=electronics&ie=UTF8&qid=1522661136sr=1-1&keywords=iphon

Into a short URL:
- http://localhost:3000/lISLV8xe

## Screenshots
- located in ./screenshots

## Requirements
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) Atlas database

## Build Instructions
- add folder ./server/configs/
- add json file ./server/configs/configs.json
- in ./server/configs/configs.json add
  - "atlasKey": "YOUR_MONGODB_ATLAS_KEY"
  - "dburistart": "mongodb+srv://<YOUR_MONGODB_ATLAS_USERNAME>:"
  - "dburiend": "@<YOUR_MONGODB_CLUSTER_NAME>.tkojb.azure.mongodb.net/main?retryWrites=true&w=majority"
- if windows run setup.bat
- if unix based run setup.sh

## Run Instructions
- npm start

## Use Instructions
- Input a long url into the specified input
- Click the Generate button
- The shortened URL will be displayed below
- To use your shortened URL just copy it and use it 
