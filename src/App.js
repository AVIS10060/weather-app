import styled from "styled-components"
import './App.css';
import './index.css'
import CityComponent from "./CityComponent"
import WeatherComponent from "./WeatherComponent";
import { useState } from "react";
import axios from 'axios';

 
const API_KEY = "470bd292eff8b0ce922da67d785174ab"
const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width: 350px;
margin: auto;
background-color: white ;
border-radius: 4px;
/* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 28px 0 rgba(0, 0, 0, 0.17); */
box-shadow: 0px 3px 6px 0 #555;
`

const Title = styled.div`
height: 100px ;
width: 100%;
color: rgb(0, 153, 255);
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 25px;
`
function App() {
  const [city,updateCity] = useState();
  const [weather,updateWeather] =useState()

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data)
  }





  return (

    <>
    <Container>
  
    <Title>    React Weather App</Title>
   { 
    weather ?(
    <WeatherComponent weather = {weather} city = {city} ></WeatherComponent>
   )
   :
   (<CityComponent updateCity = {updateCity} fetchWeather = {fetchWeather}></CityComponent>)}
   
    </Container>

    </>
  
    )
}

export default App;
