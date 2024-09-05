import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function App() {

  // const [renderData,setRenderData] = useState([])
  const inputVal = useRef()

  try {
    useEffect(()=>{
      axios('http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=&aqi=no')
      .then((res)=>{
        console.log(res.data);     
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])
  } catch (error) {
    console.log(error);
    
  }
  function searchWeather(){
    console.log(inputVal.current.value);
    
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
