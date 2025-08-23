import React from 'react';
import MyLoader from "../UI/loader/MyLoader";
import MyError from "../UI/error/MyError";
import WeatherItem from "../weather-item/WeatherItem";

const WeatherContent = ({
                            isLoading,
                            error,
                            weatherData
                        }) => {
    if (isLoading) {
        return (
            <div className="loader">
                <MyLoader />
            </div>
        );
    }

    if (error || !weatherData.city) {
        return <MyError message={error?.message} />;
    }

    return <WeatherItem {...weatherData} />;
};

export default WeatherContent;