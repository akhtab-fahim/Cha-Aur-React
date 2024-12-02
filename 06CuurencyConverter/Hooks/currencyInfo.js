import React, { useEffect, useState } from 'react'

function useCurrencyInfo(curreny) {
    const date = new Date(); 
    const [data,setData] = useState({})
  useEffect(()=>{
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/{apiVersion}/${currency}.json")
    .then((res)=>{res.json})    //data into json 
    .then((res)=>{setData(res[curreny])})
  },[curreny])
  return data;
}


export default useCurrencyInfo;