import React from 'react';
import WeatherList from "../../components/WeatherList/WeatherList";
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