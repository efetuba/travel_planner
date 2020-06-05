/* Global Variables */
let geoNameApi="treeoflife";
let weatherKey= "8895c723c4434587acad65666701180a";
let pixabayApi= "16759907-f3b150f4cf015d7cbe6c3b8ed";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);
//
async function handleSubmit(event){
    let planData={};
    let cityData={};
    let weatherData={};
    let pixabayData={};
    let finalData={};
    let place=document.getElementById('place').value;
    let date=document.getElementById('date').value;
    //Get Geonames and Post
    const geoNameURL=`http://api.geonames.org/searchJSON?q=${place}&maxRows=10&style=LONG&lang=es&username=${geoNameApi}`
    cityData = await Client.getCityInfo(geoNameURL)
    let cityLat= cityData.geonames[0].lat;
    let cityLng= cityData.geonames[0].lng;
    console.log(cityData);
   
    //Get Weatherbit and Post
    const weatherURL=`https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?lat=${cityLat}&lon=${cityLng}&key=${weatherKey}`
    weatherData= await Client.getWeather(weatherURL)
    console.log(weatherData);
    planData.place=cityData.geonames[0].name;
    planData.latitude= cityData.geonames[0].lat;
    planData.longitude= cityData.geonames[0].lng;
    planData.temperature= weatherData.data[0].temp;
    planData.date=date;
    await Client.postData('/addInfo', planData);
    // Get pixabay
    const imageURL= `https://pixabay.com/api/?key=${pixabayApi}&q=${place}`;
    pixabayData= await Client.getImage(imageURL)
    console.log(pixabayData);
    document.body.style.backgroundImage = `url(${pixabayData})`;
    //update page
    finalData= await Client.updateUI()
    console.log(finalData);
    document.getElementById('dest').innerHTML=finalData.place;
    document.getElementById('time').innerHTML=finalData.date;
    document.getElementById('temp').innerHTML=finalData.temperature;
}


export { handleSubmit }





