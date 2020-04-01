import React, { Component } from "react";



class WeatherCondition extends Component {

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

  export default WeatherCondition;
