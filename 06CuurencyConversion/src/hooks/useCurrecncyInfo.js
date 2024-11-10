//custom Hook

import { useEffect,useState } from "react";

function useCurrency(currency){
    const[data,setData] = useState({})

    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then((res)=>{res.json()}) //ouput has been kept in a json file
        .then((res)=>setData(res[currency]))    //here im seperaiong the useaable part from the json
        console.log(data);
        
    },[currency])

    return data
}

export default useCurrency; //returning the entire func