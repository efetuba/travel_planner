async function updateUI(){
    const req= await fetch('http://localhost:3031/all');
    try{
        const finalData= await req.json();
        console.log(finalData);
        document.getElementById('dest').innerHTML= "Your destination is " + finalData.place;
        document.getElementById('time').innerHTML= finalData.daysLeft + " days left for your travel" ;
        document.getElementById('temp').innerHTML= "The temperature will be approximately " + finalData.highTemp + " &deg;C" + " at high" + " and " + finalData.lowTemp + " &deg;C" + " at low." ;
        document.getElementById('weat').innerHTML= "The weather will be " +  finalData.weather;
    }catch(error){
        console.log("error", error);
    }
}

export { updateUI }