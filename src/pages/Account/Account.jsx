import React from 'react';
import WeatherList from "../../components/weather-list/WeatherList";
import {useFavorites} from "../../hooks/useFavorites";

const Account = () => {

    const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

    return (
        <div>
            <WeatherList cities={favorites} />
        </div>
    );
};

export default Account;