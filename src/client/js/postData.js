async function postData(url='http://localhost:3031/addInfo', data={}){
    console.log(data);
    const res= await fetch(url ,{
        method: 'POST',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
        },
        body: JSON.stringify(data)
    });
    try{
        let newData= await res.json();
        return newData
    }
    catch(error){
        console.log("error", error);
    }
}

export { postData}