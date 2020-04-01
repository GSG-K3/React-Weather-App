import React, { Component } from "react";
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_Key = "54174eaed51de06381656df27dd2776a";

class App extends Component {
  state = {
   city: '',
 Temprature: '',
  Weather: '',
  WindSpeed: '',
   humidity :'',
  error :'',
   }
  getWeather = async (e) => {
    e.preventDefault()
  //console.log("Weather")
    const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    //console.log(city)
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4')
    const data = await api.json();  
    console.log(data)
    this.setState({
      city: data.name,
      Temprature: data.main.temp,
      Weather: data.weather[0].description,
      WindSpeed: data.wind.speed,
      humidity: data.main.humidity,
      error: ''
})
    
}
  render() {
    return (
      <div className="App">
        <p>WHAT'S THE WEATHER?</p>
        <Form getWeather={this.getWeather} />
        <Weather
          Temprature={this.state.Temprature}
        Weather={this.state.Weather}
        WindSpeed={this.state.WindSpeed}
        Humidity={this.state.Humidity}
        />

      </div>
    );
  }
}

export default App;
