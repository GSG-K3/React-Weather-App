import React, { Component } from "react";
import "./Weather.css";
import WeatherCondition from './WeatherCondition';

let url = "";
class Weather extends Component {
  state = {
    isLoading: false,
    error: null,
    lat: null,
    log: null,

    text: "",
    data: {
      wind: "",
      weather: [""],
      main: "",
      sys: ""
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  componentDidMount(e) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState({ lat: latitude, log: longitude });
        console.log(this.state.lat, "position");
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lat}139&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`;
        this.handleFetch(url);
        console.log(url, "position");
      });

      // this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
  
       url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`;

    e.preventDefault();
    this.handleFetch(url);

  };

  handleFetch = (api1) => {
    this.setState({ isLoading: true });

    fetch(api1)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({ isLoading: false, data: data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  //...
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <WeatherCondition
          items={this.state.data}
          fetch={this.state}
          // wind={this.state.wind}

          // removeItem={this.removeItem}
          // handleChange={this.handleChange}
        />
      </div>
    );
  }
}


export default Weather;
