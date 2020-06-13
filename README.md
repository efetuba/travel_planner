# Project Instructions

In this project, a travel app which contains user's destination, destination date and weather data of destination is build by external APIs -Geonames, Weatherbit and Pixabay. The app gets weather data of planned date and the picture of destination.
Node and Express will be used in routing and Webpack will be used for building the tool. In Webpack, development and production environments will be set up for the app.  

## Run the project
### Run in production mode

` $ npm run build-prod`

### Run in development mode 
After running, it runs at at localhost:3030. 

` $ npm run build-dev `

### Start the app 
It runs at localhost:3031.

` $ npm run start`

## Configs
There are two webpack config files for development (webpack.dev.js) and production(webpack.prod.js).
Also, 'package.json' file is to manage dependencies.

## Get ans Set the API
The project uses firstly Geonames API by getting data from user's destination. By Geonames, latitude and longitude data of city are pulled, then those data is used by Weatherbit API for pulling 16-day weather data of city. By using destination date info, the weather of planned date can be displayed. Then, Pixabay API is used for getting image of the city. 

## Offline Functuality
The project have service workers set up in webpack to provide the offline functionality.

## Print and Delete modes
By adding print and delete buttons, user's can be print their travel plan or delete it for a new destination. 

## Testing with Jest
Testing is done with Jest. To run test, use the command 

` $ npm run test`