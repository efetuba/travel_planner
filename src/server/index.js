// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express=require("express");
// Start up an instance of app
const app= express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
app.listen(3031, function () {
    console.log('Example app listening on port!')
})
//
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
//GET route
app.get('/all', sendData);
 function sendData (req, res){
  res.send(projectData)
};
// POST route
app.post('/add',callBack);
function callBack(req, res){
    res.send('POST received');
}
//POST content info(weather+date+userResponse)
app.post('/addInfo', function(req, res){
    projectData.place=req.body.place;
    projectData.latitude= req.body.latitude;
    projectData.date=req.body.date;
    projectData.longitude=req.body.longitude;
    projectData.temperature= req.body.temperature;
    console.log(newInfo);
    res.send(JSON.stringify(projectData));
})