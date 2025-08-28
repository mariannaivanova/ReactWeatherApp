import {weatherApi} from '../api/weatherApi';

export class WeatherService {
    static async getCityCoordinates(city) {
        const response = await weatherApi.getObjectData(city);
        const posString = response?.data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos;

        if (!posString) {
            throw new Error(`Город "${city}" не найден`);
        }

        const [lon, lat] = posString.split(" ");
        return { lat, lon };
    }

    static async getWeatherByCoords(lat, lon) {
        const response = await weatherApi.getWeatherData(lat, lon);
        return response.data;
    }

    static async getWeatherByCity(city) {
        const { lat, lon } = await this.getCityCoordinates(city);
        return await this.getWeatherByCoords(lat, lon);
    }
}