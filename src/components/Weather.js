import React, { Component } from "react";
import "./Weather.css";

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
        <List
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
class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // title: props.items.name,
  //     // description: props.items.weather[0].description
  //   };}
  //   renderTableData() {
  //     const { name , weather , wind , main , sys } = this.props.items;

  //       return (
  //           <tr key={name}>
  //              <td>{weather[0].description}</td>
  //              <td>{name}</td>
  //              <td>{wind.speed}</td>
  //              <td>{weather[0].main}</td>
  //              <td>{main.humidity}</td>
  //           </tr>
  //        )
  //  }

  render() {
    const { error, isLoading } = this.props.fetch;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      const { name, weather, wind, main, sys } = this.props.items;
      let flagLink = `https://www.countryflags.io/${sys.country}/shiny/64.png`;
      const img = <img src={flagLink} alt="news pic" />;

      return (
        console.log("props", this.props),
        (
          <div className="List">
            <div>
              <span className="city-name" id="cityName">
                {name}
              </span>
              <div> {sys.country ? img : null} </div>
            </div>
            <div>
              <h1> Temprature: {main.temp ? main.temp + " °C" : null} </h1>
              <h1> Weather: {weather[0].description} </h1>
              <h1> Wind Speed:{wind.speed ? wind.speed + " M/S" : null} </h1>
              <h1> Humidity: {main.humidity ? main.humidity + " %" : null} </h1>
              <h1> {weather[0].main} </h1>
            </div>
          </div>
        )
      );
    }
  }
}

export default Weather;
