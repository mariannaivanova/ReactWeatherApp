import React from 'react';
import WeatherItem from "../weather-item/WeatherItem";

const WeatherList = ({cities}) => {
    return (
        <div>
            {cities.map ((cityInfo, index) => {
                    return (
                    <WeatherItem
                        key={index}
                        {...cityInfo}
                    />)
                }
            )}
        </div>
    );
};

export default WeatherList;