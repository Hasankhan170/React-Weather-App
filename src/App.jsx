import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function App() {

  const [weatherData,setweatherData] = useState([])
  const inputVal = useRef()

  try {
    useEffect(()=>{
      axios('http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=pakistan&aqi=no')
      .then((res)=>{
        console.log(res.data);    
        setweatherData(res.data); 
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
    .then((res)=>{
      console.log(res.data);
      weatherData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log(city);
    
    inputVal.current.value = ''
  }
  return (
    <>
      <h1>Hello Weather</h1>
      <input ref={inputVal} type="text" placeholder="Enter city name" />
      <button onClick={searchWeather}>Search</button>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </>
  )
}

export default App
