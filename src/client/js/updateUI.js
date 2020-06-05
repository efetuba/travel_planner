async function updateUI(){
    const req= await fetch('http://localhost:3031/all');
    try{
        const data= await req.json();
        console.log(data);
    }catch(error){
        console.log("error", error);
    }
}

export { updateUI }