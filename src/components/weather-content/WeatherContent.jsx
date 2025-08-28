import React from 'react';
import Loader from "../UI/loader/Loader";
import Error from "../UI/error/Error";
import WeatherItem from "../weather-item/WeatherItem";

const WeatherContent = ({
                            isLoading,
                            error,
                            weatherData
                        }) => {
    if (isLoading) {
        return (
            <div className="loader">
                <Loader />
            </div>
        );
    }

    if (error || !weatherData.city) {
        return <Error message={error?.message} />;
    }

    return <WeatherItem {...weatherData} />;
};

export default WeatherContent;