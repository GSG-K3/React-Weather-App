import React, { Component } from "react";
import "./Weather.css";

import WeatherCondition from "./WeatherCondition";

let url = "";
class Weather extends Component {
  state = {
    isLoading: false,
    error: null,
    lat: null,
    log: null,
    gif: "",
    gif1: "",
    gif2: "",
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
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lat}139&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`;
        this.handleFetch(url);
      });

    }
  }

  handleSubmit = (e) => {
    if (!this.state.text.length) {
      return;
    }
    this.setState({ error: null });
    url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`;

    e.preventDefault();
    this.handleFetch(url);
  };

  getGify = (city) => {
    if (!city  || city ==='Fāraskūr') {
      return;
    }

    let Gif_API = `http://api.giphy.com/v1/gifs/search?q=${city}&limit=3&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX`;

    this.setState({ isLoading: true });

    fetch(Gif_API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong 2 ...");
        }
      })
      .then((result) => {
        this.setState({
          isLoading: false,
          gif: result.data[0].images.fixed_height.url,
          gif1: result.data[1].images.fixed_height.url,
          gif2: result.data[2].images.fixed_height.url
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
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
        this.setState({ isLoading: false, data: data, cityy: data.name });
        this.getGify(data.name);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  //...
  render() {
    return (
      <div className="InputDiv">
        <form>
          <label>
            <input
            className="InputField"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            placeholder=" Enter City / Country:"/>
          </label>
          <input className="Add" type="submit" onClick={this.handleSubmit} value="Submit"  />
        </form>
        <WeatherCondition items={this.state.data} fetch={this.state} />
        <div></div>
      </div>
    );
  }
}

export default Weather;
