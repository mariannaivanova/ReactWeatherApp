import React, {useCallback, useState} from "react";
import {useFetching} from "./useFetching";
import WeatherService from "../services/WeatherService";
import {parseWeatherData, resetWeatherData, setWeatherData} from "../utils/weather";

export const useWeatherData = (initialCity = "moscow") => {
    const [city, setCity] = React.useState(initialCity);
    const [weather, setWeather] = React.useState("");
    const [temperature, setTemperature] = React.useState("");
    const [iconCode, setIconCode] = React.useState("");
    const [wind, setWind] = React.useState("");
    const [humidity, setHumidity] = React.useState("");
    const [error, setError] = React.useState("");
    const [isLoading, setIsLoading] = useState(false);

    const setters = {
        setCity,
        setWeather,
        setIconCode,
        setTemperature,
        setWind,
        setHumidity
    }

    const [fetchCity, isCityLoading, cityError] = useFetching(async (cityName) => {
        const response = await WeatherService.getObjectData(cityName)
        const posString = response?.data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos;

        if (!posString) {
            throw new Error(`Город "${cityName}" не найден или координаты недоступны`);
        }

        const [lon, lat] = posString.split(" ");
        const weatherResponse = await WeatherService.getWeatherData(lat, lon)

        const weatherData = parseWeatherData(weatherResponse);
        setWeatherData(
            setters,
            weatherData
        );
    })

    const loadWeather = async (cityName) => {
        setIsLoading(true);
        resetWeatherData(setters);
        try {
            await fetchCity(cityName);
        } catch (e) {
            resetWeatherData(setters);
            setError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    };

    return {
        weatherData: { city, weather, temperature, iconCode, wind, humidity },

        isLoading: isLoading || isCityLoading,
        cityError: cityError || error,

        loadWeather,
        setCity
    };


}