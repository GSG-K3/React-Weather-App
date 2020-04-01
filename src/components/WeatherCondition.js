import React, { Component } from "react";
import "./Weather.css";



class WeatherCondition extends Component {


    weatherImg = () =>  {
        let weather = this.props.items.weather[0].main
       console.log('waaaaaa',weather);
       
           if(weather === "Clouds"){
               return require("./animated/cloudy.svg")	
           }
           else if(weather === "Rain"){
               return require("./animated/rainy-6.svg"	)
           }
           else if(weather === "Mist"){
               return require("./animated/snowy-4.svg")	
           }
           else if(weather === "Clear"){
                   return require("./animated/day.svg")
           }
           else if(weather === "Smoke"){
               return require("./animated/snowy-6.svg")	
           }
           else if(weather === "Drizzle"){
            return require("./animated/rainy-7.svg")	
        }
           else if(weather === "Thunderstorm"){
               return require("./animated/thunder.svg"	)	
           }
           else if(weather === "Fog"){
               return require("./animated/fog.svg"	)	
           }
       
           return;
       
       }
   
   
    render() {
      const { error, isLoading , gif , gif1 , gif2} = this.props.fetch;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (isLoading) {
        return <div>Loading...</div>;
      } else {
        const { name, weather, wind, main, sys } = this.props.items;
        let flagLink = `https://www.countryflags.io/${sys.country}/shiny/64.png`;
        const img = <img src={flagLink} alt="news pic" />;
        const animated = <img id="image" src={this.weatherImg()} alt="news piic" />;
        const gify = <img id="image" src={gif} alt="news piic" />;
        const gify1 = <img id="image" src={gif1} alt="news piic" />;
        const gify2 = <img id="image" src={gif2} alt="news piic" />;



        return (
          console.log("props111111111", this.props),
          console.log("props22222222222", animated),
          (
            <div className="List">
              <div className="country">
                <span className="city-name" id="cityName">
                  {name}
                </span>
                <div> {sys.country ? img : null} </div>
                <div className="weather"> 
                <div> {weather[0].main ? animated : null} </div>
              </div>
              <div>
                <p> Temprature: {main.temp ? main.temp + " °C" : null} </p>
                <p> Weather: {weather[0].description} </p>
                <p> Wind Speed:{wind.speed ? wind.speed + " M/S" : null} </p>
                <p> Humidity: {main.humidity ? main.humidity + " %" : null} </p>
                <p> {weather[0].main} </p>
              </div>
              </div>
              <div className="gif">
              <div> {gif ? <h2> Some photo Related to {name} </h2>  : null} </div>
              <div> {gif ? gify  : null} </div>
                <div> {gif1 ? gify1 : null} </div>
                <div> {gif2 ? gify2 : null} </div>

              </div>
            </div>
          )
        );
      }
    }
  }

  export default WeatherCondition;
