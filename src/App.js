import React, { Component } from "react";
import Form from './Components/Form';
import Weather from './Components/Weather';

//const API_KEY =
class App extends Component {
  
  getWeather = async (e) => {
    e.preventDefault()
  //console.log("Weather")
    const city = e.target.elements.city.value;
    //console.log(city)
    const api = await fetch(URL)
    const data = await api.json();   
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
