import React from "react";
import {useFetching} from "./useFetching";
import { WeatherService } from "../services/weatherService";
import {parseWeatherData, resetWeatherData, setWeatherData} from "../utils/weather";

export const useWeatherData = (initialCity = "moscow") => {
    const [city, setCity] = React.useState(initialCity);
    const [weather, setWeather] = React.useState("");
    const [temperature, setTemperature] = React.useState("");
    const [iconCode, setIconCode] = React.useState("");
    const [wind, setWind] = React.useState("");
    const [humidity, setHumidity] = React.useState("");
    const [weatherError, setWeatherError] = React.useState("");
    const [isWeatherLoading, setIsWeatherLoading] = React.useState(false);

    const setters = {
        setCity,
        setWeather,
        setIconCode,
        setTemperature,
        setWind,
        setHumidity
    };

    const [fetchWeather, isLoading, error] = useFetching(async (cityName) => {
        const weatherResponse = await WeatherService.getWeatherByCity(cityName);
        const weatherData = parseWeatherData({ data: weatherResponse });
        setWeatherData(setters, weatherData);
    });

    const loadWeather = async (cityName) => {
        setIsWeatherLoading(true);
        resetWeatherData(setters);
        try {
            await fetchWeather(cityName);
        } catch (e) {
            resetWeatherData(setters);
            setWeatherError(e.message);
        }
        finally {
            setIsWeatherLoading(false);
        }
    };

    return {
        weatherData: { city, weather, temperature, iconCode, wind, humidity },
        isLoading: isLoading || isWeatherLoading,
        error: error || weatherError,
        loadWeather,
        setCity
    };
};