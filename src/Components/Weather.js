import React from "react";

const Weather =  (props) => {

    return (
      <div>
       {/* Weather Component
          this component  is where the data will be displayed From API*/}
            <p>  Temprature :{props.Temprature}</p>
            <p>  Weather:{props.Weather} </p>
            <p>WindSpeed:{props.WindSpeed}</p>
            <p> Humidity:{props.Humidity}</p>
      </div>
    );
  
}

export default Weather;
