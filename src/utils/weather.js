export const parseWeatherData = (weatherResponse) => {
    const data = weatherResponse.data || weatherResponse;

    const city = data.name;
    const weather = data.weather[0].main;
    const iconCode = data.weather[0].icon;
    const temperature = Math.round(data.main.temp - 273);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    return [city, weather, iconCode, temperature, wind, humidity];
};

export const resetWeatherData = setters => {
    Object.values(setters).forEach(setter => {
        setter("");
    });
};

export const setWeatherData = (setters, data) => {
    Object.values(setters).forEach((setter, index) => {
        setter(data[index]);
    });
};