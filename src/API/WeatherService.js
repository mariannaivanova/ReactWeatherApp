import axios from "axios";

export default class WeatherService {
    static async getObjectData(city) {
        const geocodeUrl = process.env.REACT_APP_GEOCODE_URL;
        const appApiKey = process.env.REACT_APP_API_KEY;

        const url = `${geocodeUrl}${appApiKey}&geocode=${city}&format=json`;

        return await axios.get(url)
    }

    static async getWeatherData(lat, lon) {
        const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherUrl = process.env.REACT_APP_WEATHER_URL;

        const url = `${weatherUrl}lat=${lat}&lon=${lon}&${weatherApiKey}`;

        return await axios.get(url)
    }
}


