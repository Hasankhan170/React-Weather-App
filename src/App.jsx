import axios from "axios"
import { useEffect, useRef, useState } from "react"

function App() {

  const [weather,setweather] = useState([])
  const [city, setCity] = useState('')
  const [error,setError] = useState('')
  const inputVal = useRef()

  useEffect(()=>{
    const fetchData = async ()=>{
      if(city){
        const res = await axios(`http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${city}&aqi=no`)
         if(res.data && res.data.location){
          console.log(res.data);
          if(!weather.some(item=> item.location.name == res.data.location.name)){
            setweather(prevData =>[...prevData , res.data])
          }
           setError('')
         }else{
           setError('City not found')
         }
       }
    }
    fetchData()
  },[city,weather])

  function searchVal(){
    const cityName = inputVal.current.value.trim();
    if(!cityName){
      setError('Please enter city name')
      return;
    }
    setCity(cityName)
    inputVal.current.value = ""
  }
  return (
    <>
    <h1>Weather app</h1>
    <input required type="text" placeholder="search here..." ref={inputVal} />
    <button onClick={searchVal}>search</button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {
      weather.length > 0 && (
        <div>
           {
            weather.map((items,index)=>{
               return <div key={index}>
                  <h2>{items.location.name}</h2>
                  <p>Temperature: {items.current.temp_c}°C</p>
                  <p>Humidity: {items.current.humidity}%</p>
                </div> 
            })
           }
        </div>
      )
       
    }
    </>
  )
}

export default App



