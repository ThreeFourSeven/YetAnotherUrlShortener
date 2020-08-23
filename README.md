# YetAnotherURLShortener

## Requirements
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) Atlas database

## Build Instructions
- add folder ./server/configs/
- add json file ./server/configs/configs.json
- in .../configs.json add
- "atlasKey": "<your mongoDB Atlas key>"
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
