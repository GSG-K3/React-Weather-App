import React from 'react';


const Form  =(props) => {
    
        return (
            <form onSubmit={props.getWeather}>
                <input type="text" placeholder="Enter your city to Find out" />
                <button> Get Weather</button>
          </form>
        );
    
}


export default Form;
