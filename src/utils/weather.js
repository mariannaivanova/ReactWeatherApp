export const parseWeatherData = (weatherResponse) => {
    weatherResponse = weatherResponse.data;
    const city = weatherResponse.name;
    const weather = weatherResponse.weather[0].main;
    const iconCode = weatherResponse.weather[0].icon;
    const temperature = Math.round(weatherResponse.main.temp - 273);
    const wind = weatherResponse.wind.speed;
    const humidity = weatherResponse.main.humidity;

    return [
        city,
        weather,
        iconCode,
        temperature,
        wind,
        humidity,
    ];
};

export const resetWeatherData = setters => {
    Object.values(setters).forEach(setter => {
        setter("");
    });
};

export const setWeatherData = (setters, data) => {
    Object.values(setters).forEach((setter, index) => {
        setter(data[index]);
    })
};