import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function App() {

  const [renderData,setRenderData] = useState([])
  const inputVal = useRef()

  try {
    useEffect(()=>{
      axios('http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=pakistan&aqi=no')
      .then((res)=>{
        console.log(res.data);    
        setRenderData(res.data); 
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])
  } catch (error) {
    console.log(error);
    
  }

  function searchWeather(){
    const city = inputVal.current.value;
    axios('http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${city}&aqi=no')
    console.log(city);
    
    
  }
  return (
    <>
      <h1>Hello Weather</h1>
      <input ref={inputVal} type="text" placeholder="Enter city name" />
      <button onClick={searchWeather}>Search</button>
    </>
  )
}

export default App
