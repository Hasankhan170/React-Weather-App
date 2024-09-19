import axios from "axios"
import { useEffect, useRef, useState } from "react"
import './index.css'


function App() {

  const [weather,setWeather] = useState([])
  const [city, setCity] = useState('')
  const [error,setError] = useState('')
  const inputVal = useRef()

  useEffect(()=>{
    const fetchData = async ()=>{
      if(city.trim()){
        try {
          const res = await axios(`https://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${city}&aqi=no`)

         if(res.data && res.data.location){
          console.log(res.data);

          if(!weather.some(item=> item.location.name === res.data.location.name)){

            setWeather(prevData =>[...prevData , res.data])
            
          }
          setError('')
         }else{
           setError('City not found')
         }
        } catch (error) {
          console.log(error);
          setError('city not found')
          alert('city not found')
        }
       }
    };
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
    <div className="container">
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '20px'
    }}>
    <h1 className="center">Weather app</h1>
    <img style={{
      width: '40px'
    }} src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt="" />
    </div>
    <div className="inp-btn">
    <input className="input" required type="text" placeholder="search here..." ref={inputVal} />
    <button className="btn" onClick={searchVal}>search</button>
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {
      weather.length > 0 && (
        <div className="maindiv">
{
            weather.map((items,index)=>{
  return <div key={index}>
                <img width="120px" src={items.current.condition.icon} alt='weatherImg' />
                <h2>{items.current.temp_c}°C <br /><span style={{
                  fontSize : '30px'
                }}>{items.location.name}</span></h2>
                  <div style={{
                    display: 'flex',
                    justifyContent:'space-between',
                    marginBottom: '10px',
                  }}>
<div style={{
                    display: 'flex',
                    alignItems:'center',
                    textAlign: 'start',}}>
  <img style={{
                    width : '40px'
      }} src="https://cdn-icons-png.flaticon.com/128/13945/13945026.png" alt="" />
    <p> {items.current.humidity}% <br /><span>Humidity: </span></p>
    </div>
    <div style={{
                    display: 'flex',
                    alignItems:'center',
                    textAlign: 'start',
    }}>
    <img style={{
                    width : '40px'
    }} src="https://cdn-icons-png.flaticon.com/128/11129/11129055.png" alt="" />
                    <p> {items.current.wind_kph} km/h <br /><span>Wind Speed: </span></p>
    </div>
                  </div>
                  <hr />
                </div> 
            })
}
        </div>
    )}
    </div>
    </>
  )
}

export default App



