// import axios from 'axios';
// import { useEffect, useRef, useState } from 'react'



// function App() {

//   const [weatherData,setweatherData] = useState(null)
//   const [city, setCity] = useState('')
//   const inputVal = useRef()


//     useEffect(()=>{
//      if(city){
//       axios(`http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${city}&aqi=no`)
//       .then((res)=>{
//         console.log(res.data);    
//         setweatherData(res.data); 
//       })
//       .catch((err)=>{
//         console.log(err);
//       })
//      }
//     },[city])


//   function searchVal(){
//    setCity(inputVal.current.value)

//    inputVal.current.value = ""
//   }
    
    
//   return (
//     <>
//       <h1>Hello Weather</h1>
//       <input ref={inputVal} type="text" placeholder="Enter city name" />
//       <button onClick={searchVal}>Search</button>
//       {weatherData &&(
//         <div>
//           <h2>Weather in {weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current.temp_c}°C</p>
//           <p>Humidity: {weatherData.current.humidity}%</p>

//         </div>
//       )}
//     </>
//   )
// }

// export default App


import axios from "axios"
import { useEffect, useRef, useState } from "react"

function App() {

  const [weather,setweather] = useState(null)
  const [city, setCity] = useState('')
  const inputVal = useRef()

  useEffect(()=>{
    if(city){
      axios(`http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${city}&aqi=no`)
    .then((res)=>{
      console.log(res.data);
      setweather(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    }
  },[city])

  function searchVal(){
    setCity(inputVal.current.value )
    inputVal.current.value = ""
  }
  return (
    <>
    <h1>quiz app</h1>
    <input required type="text" placeholder="search here..." ref={inputVal} />
    <button onClick={searchVal}>search</button>
    {
      weather && (
        <div>
           <h2>{weather.location.name}</h2>
           <p>temperature: {weather.current.temp_c}°C</p>
        </div>
      )
       
    }
    </>
  )
}

export default App



