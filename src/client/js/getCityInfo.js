async function getCityInfo(url) {
    const res=await fetch(url);
    try{
        const cityData= await res.json();
        console.log(cityData);
        return cityData;
    }catch(error){
        console.log("error", error);
    }
}   

export { getCityInfo }