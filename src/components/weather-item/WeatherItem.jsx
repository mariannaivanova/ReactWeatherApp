import React from 'react';

const WeatherItem = (props) => {
    return (
        <div className="weather-item">
            <h3> {props.city} </h3>
            <div> Weather {props.weather}</div>
            <div> Temperature {props.temperature}</div>
            <div> Humidity {props.humidity}</div>
            <div> Wind {props.wind}</div>
            <img src={"https://openweathermap.org/img/wn/"+props.iconCode+"@2x.png"} alt="Weather icon"/>
        </div>
    );
};

export default WeatherItem;