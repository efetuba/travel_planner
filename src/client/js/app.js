/* Global Variables */
let geoNameApi="treeoflife";
let weatherKey= "8895c723c4434587acad65666701180a";
let pixabayApi= "16759907-f3b150f4cf015d7cbe6c3b8ed";
// Create a new date instance dynamically with JS
const timestampNow = (Date.now()) / 1000;
const plan= document.getElementById('plan');
const form = document.getElementById('form');
const printButton= document.getElementById('save');
const deleteButton = document.getElementById('delete');
const results= document.getElementById('results');
//
document.getElementById('add').addEventListener('click' , function(e){
    e.preventDefault();
    plan.scrollIntoView({behavior:'smooth'});
})
document.getElementById('submit').addEventListener('click', function(){
    plan.classList.add("invisible");
    results.classList.remove("invisible");
})
form.addEventListener('submit', handleSubmit);
// print button
printButton.addEventListener('click', function (e) {
  window.print();
  location.reload();
});
// delete button
deleteButton.addEventListener('click', function (e) {
  form.reset();
  results.classList.add("invisible");
  location.reload();
})
async function handleSubmit(event){
    event.preventDefault();
    let planData={};
    let cityData={};
    let weatherData={};
    let pixabayData={};
    let place=document.getElementById('place').value;
    let date=document.getElementById('date').value;
    const timestamp = (new Date(date).getTime()) / 1000;
    const daysLeft = Math.round((timestamp - timestampNow) / 86400);
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
    planData.place= cityData.geonames[0].name;
    planData.latitude= cityData.geonames[0].lat;
    planData.longitude= cityData.geonames[0].lng;
    if(daysLeft < 16){
        planData.highTemp= weatherData.data[daysLeft +1].high_temp;
        planData.lowTemp= weatherData.data[daysLeft +1].low_temp;
        planData.weather= weatherData.data[daysLeft +1].weather.description;
    }else{
        planData.highTemp= weatherData.data[15].high_temp;
        planData.lowTemp= weatherData.data[15].low_temp;
        planData.weather= weatherData.data[15].weather.description;
    };
    planData.daysLeft=daysLeft;
    await Client.postData('/addInfo', planData);
    // Get pixabay
    const imageURL= `https://pixabay.com/api/?key=${pixabayApi}&q=${place}`;
    pixabayData= await Client.getImage(imageURL)
    console.log(pixabayData);
    document.getElementById('pixpic').setAttribute('src', pixabayData );
    //update page
    await Client.updateUI()
}


export { handleSubmit }





