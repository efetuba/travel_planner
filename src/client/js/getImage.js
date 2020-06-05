async function getImage(url){
    const response=await fetch( url );
    try{
        const image= await response.json();
        console.log(image);
        console.log(image.hits[0].webformatURL)
        return image.hits[0].webformatURL;
    }
    catch(error){
        console.log("error", error);
    }
} 

export { getImage }