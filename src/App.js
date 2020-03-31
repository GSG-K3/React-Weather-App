import React, { Component } from "react";
import Form from './Components/Form';
import Weather from './Components/Weather';


class App extends Component {
  getWeather = (e) => {
    e.preventDefault()
  console.log("Weather")
}
  render() {
    return (
      <div className="App">
        <p>WHAT'S THE WEATHER?</p>
        <Form getWeather={this.getWeather} />
        <Weather />

      </div>
    );
  }
}

export default App;
