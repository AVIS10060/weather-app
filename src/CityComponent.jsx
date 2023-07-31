import styled from "styled-components"
import Perfect from './perfect-day.svg'


const Citycom = styled.div`
display:flex;
justify-content: space-evenly;
width: 100%;


`

const City = styled.div`
height: 80px;
display: flex;
justify-content: center;
align-items: center;


`
const Weatherlogo = styled.div`
height: 140px;
width: 140px;
`
const CityLabel = styled.span`
color:black;
font-size:20px;
font-weight:bold;
margin:20px auto;
color: rgb(0, 153, 255);
 `

 const SearchForm = styled.form`
 display: flex;
 margin:30px auto;
 height: 25px;
 border: 1px solid black;
 font-size: 18px;
 font-weight: bold;
 
  && button{
    background-color: black;
    color: white;
  }
 `



const CityComponent = (props) =>{
const {updateCity,fetchWeather} = props
return (
    <>
    <Weatherlogo>
    <img src={Perfect} className="logo-image" alt="" />
    </Weatherlogo>
    <CityLabel>Find the Weather of your City</CityLabel>
    <SearchForm onSubmit={fetchWeather}>
        <input placeholder="City Name" style={{border : "1px solid black"}}
        onChange={(e)=> updateCity(e.target.value)} />
        <button type = "submit"> Search </button>
    </SearchForm>
   

    </>
)


}
export default CityComponent