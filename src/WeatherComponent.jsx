import styled from "styled-components"
import logo from "./perfect-day.svg"
import './index.css'
import Sun from "./temp.svg"
import Cloudynight from './cloudy-night.svg'
import Cloudy from './cloudy.svg'
import humidity from './humidity.svg'
import pressure from './pressure.svg'
import rain from './rain.svg'
import wind from './wind.svg'
export const WeatherInfoIcons = {
    sunset : Sun,
    sunrise : Sun,
    humidity : humidity ,
    wind: wind ,
    pressure: pressure,
}

const WeatherCond = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;
` 
const Condition = styled.span`
flex-direction: row;
font-size:12px;
& span {
    font-size: 28px;
    

}
`
const Weatherlogo = styled.div`
display:flex;
flex-direction: row;
height: 100px;
width: 100px;
`
const Location = styled.span`
font-size:30px ;
font-weight:bold;
margin : 18px auto;
`
const WeatherInfoTag = styled.span`
font-size:15px;
margin-bottom: 10px;
`
const WeatherInfo = styled.div`
display:flex; 
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
width: 90%;
`
const InfoContainer = styled.div`
display: flex;
flex-direction: row;
padding-right:30px;
width:25%;
height:50px;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
margin-bottom: 10px;
`
const InfoIcon = styled.span`
height:30px;
width:30px;
margin-right: 10px;
`
const InfoLabel=  styled.span`
display: flex;
flex-direction: column;
height:10px;
width:10px;
margin-left:10px;
font-size: 15px;
align-items: center;
justify-content: center;
`

const WeatherInfoComponent = (props) =>{
    const {name,value} = props;
    return (
        <>
            <InfoContainer>
                <InfoIcon > <img  className = " sunny "  src={WeatherInfoIcons[name]} alt="" /></InfoIcon>
                <InfoLabel> 
                {value}
                <span>{name}</span> </InfoLabel>
            </InfoContainer>
        </>
    )
 }

 const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
    <>
        <WeatherCond>
            <Condition><span> {`${Math.floor(weather?.main?.temp - 273)}°C`}</span> 
            {`  |  ${weather?.weather[0].description}`}
                </Condition>
            <Weatherlogo><img  className = "logo-image1" src={logo} alt="" /></Weatherlogo>
        </WeatherCond>
        <Location> { ` ${weather.name},${weather.sys.country}`}   </Location>
        <WeatherInfoTag> Weather Info </WeatherInfoTag>
        <WeatherInfo>
        <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather.sys[isDay ? "sunset" : "sunrise"])}`}/>
        <WeatherInfoComponent  name =  "humidity"  value = {weather.main.humidity}  />
        <WeatherInfoComponent  name =  "wind"  value = {weather.wind.speed}  />
        <WeatherInfoComponent  name = "pressure"  value = {weather.main.pressure}  />
        </WeatherInfo>
     
    </>
)

}

export default WeatherComponent