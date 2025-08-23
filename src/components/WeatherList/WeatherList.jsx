import React from 'react';
import WeatherItem from "./weather-item/WeatherItem";

const WeatherList = (city) => {

    if (!city.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                City haven't been found
            </h1>
        )
    }

    return (
        <div>
            <WeatherItem  />
        </div>
    );
};

export default WeatherList;