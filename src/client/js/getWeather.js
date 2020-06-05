async function getWeather(url){
    const res=await fetch(url);
    try{
        const weatherData= await res.json();
        console.log(weatherData);
        return weatherData;
    }
    catch(error){
        console.log("error", error);
    }
} 

export { getWeather }