export const parseWeatherData = (weatherResponse) => {
    const city = weatherResponse.data.name;
    const weather = weatherResponse.data.weather[0].main;
    const iconCode = weatherResponse.data.weather[0].icon;
    const temperature = Math.round(weatherResponse.data.main.temp - 273);
    const wind = weatherResponse.data.wind.speed;
    const humidity = weatherResponse.data.main.humidity;

    return {
        city,
        weather,
        iconCode,
        temperature,
        wind,
        humidity,
    };
};

export const resetWeatherData = setters => {
    setters.setCity("");
    setters.setWeather("");
    setters.setIconCode("");
    setters.setTemperature("");
    setters.setWind("");
    setters.setHumidity("");
};

export const setWeatherData = (
    setters,
    data
) => {
    setters.setCity(data.city);
    setters.setWeather(data.weather);
    setters.setIconCode(data.iconCode);
    setters.setTemperature(data.temperature);
    setters.setWind(data.wind);
    setters.setHumidity(data.humidity);
};