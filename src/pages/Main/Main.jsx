import React, {useEffect, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {useFetching} from "../hooks/useFetching";
import WeatherService from "../API/WeatherService";
import MyButton from "../components/UI/button/MyButton";
import {parseWeatherData, resetWeatherData, setWeatherData} from "../utils/weather";
import WeatherContent from "../components/weather-content/WeatherContent";

const Main = () => {

    const [input, setInput] = useState("");
    const [city, setCity] = React.useState("moscow");
    const [searchCity, setSearchCity] = React.useState("moscow");
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

    useEffect(() => {
        fetchCity("moscow");
    }, []);

    useEffect(() => {
        const loadWeatherData = async () => {
            try {
                await fetchCity(searchCity);
            } catch (e) {
                resetWeatherData(setters);
            }
        }
        loadWeatherData();
    }, [searchCity]);

    const handleSearch = () => {
        setSearchCity(input.trim());
        setInput("")
    };

    return (
        <div>
            <div className="searchLine">
                <MyInput
                    value={input}
                    type="text"
                    placeholder="location"
                    onChange={e=>setInput(e.target.value)}
                />
                <MyButton onClick={handleSearch}>
                    Search
                </MyButton>
            </div>

            <WeatherContent
                isLoading={isCityLoading}
                error={cityError}
                weatherData={{ city, weather, temperature, wind, humidity, iconCode }}
            />

        </div>
    );
};

export default Main;
