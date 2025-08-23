import axios from "axios";

export default class WeatherService {
    static async getObjectData(city) {
        return await axios.get(`https://geocode-maps.yandex.ru/v1/?apikey=5ad134e9-5d75-47c8-836b-84fd42ad2f4f&geocode=${city}&format=json`)
    }

    static async getWeatherData(lat, lon) {
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1f5b12e88da1a6d0b9e0a26652cca4f`)
    }

}


