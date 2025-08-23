import React, {useCallback} from "react";
import {useFetching} from "./useFetching";
import WeatherService from "../API/WeatherService";
import {parseWeatherData, resetWeatherData, setWeatherData} from "../utils/weather";

export const useWeatherData = (initialCity = "moscow") => {
    const [city, setCity] = React.useState(initialCity);
    const [weather, setWeather] = React.useState("");
    const [temperature, setTemperature] = React.useState("");
    const [iconCode, setIconCode] = React.useState("");
    const [wind, setWind] = React.useState("");
    const [humidity, setHumidity] = React.useState("");

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
        const [lon, lat] = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ")
        const weatherResponse = await WeatherService.getWeatherData(lat, lon)

        const weatherData = parseWeatherData(weatherResponse);
        setWeatherData(
            setters,
            weatherData
        );
    })

    const loadWeather = useCallback(async (cityName) => {
        try {
            await fetchCity(cityName);
        } catch (e) {
            resetWeatherData();
            throw e;
        }
    }, [fetchCity, resetWeatherData]);

    return {
        city,
        weather,
        temperature,
        iconCode,
        wind,
        humidity,
        weatherData: { city, weather, temperature, iconCode, wind, humidity },

        isCityLoading,
        cityError,

        loadWeather,
        setCity
    };


}