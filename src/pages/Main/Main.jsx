import React, {useEffect, useState} from 'react';
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import WeatherContent from "../../components/weather-content/WeatherContent";
import classes from "./Main.module.css";
import {useWeatherData} from "../../hooks/useWeatherData";

const Main = () => {

    const [input, setInput] = useState("");
    const [searchCity, setSearchCity] = React.useState("moscow");

    const {
        weatherData,
        isLoading,
        error,
        loadWeather,
        setCity
    } = useWeatherData("moscow");

    useEffect(() => {
        loadWeather("moscow");
    }, []);

    useEffect(() => {
        loadWeather(searchCity);
    }, [searchCity]);

    const handleSearch = () => {
        setSearchCity(input.trim());
        setInput("")
    };

    return (
        <div>
            <div className="searchLine">
                <Input
                    value={input}
                    type="text"
                    placeholder="location"
                    onChange={e=>setInput(e.target.value)}
                />
                <div className={classes.button}>
                    <Button onClick={handleSearch}>
                        Search
                    </Button></div>
                </div>

            <WeatherContent
                isLoading={isLoading}
                error={error}
                weatherData={weatherData}
            />

        </div>
    );
};

export default Main;
