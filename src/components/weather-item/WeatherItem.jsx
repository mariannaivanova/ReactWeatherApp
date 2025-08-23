import React, {useContext, useEffect, useState} from 'react';
import "./WeatherItem.css"
import Heart from "../UI/heart/Heart.jsx";
import {AuthContext} from "../../context/AuthContext";
import {useFavorites} from "../../hooks/useFavorites";

const WeatherItem = (props) => {

    const { isAuth } = useContext(AuthContext);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const [active, setActive] = useState(isFavorite(props.city));

    useEffect(() => {
        setActive(isFavorite(props.city));
    }, [props.city, isFavorite]);

    const handleHeartClick = () => {
        if (active) {
            removeFavorite(props.city);
        } else {
            addFavorite({
                city: props.city,
                weather: props.weather,
                temperature: props.temperature,
                humidity: props.humidity,
                wind: props.wind,
                iconCode: props.iconCode
            });
        }
        setActive(!active);
    };

    return (
        <div className="weather-item">
            <div className="first-row">
                <h1 className="city-name"> {props.city} </h1>
                <div className="temperature-info">
                    <h1 className="temperature"> {props.temperature}°C</h1>
                    <div className="weather"> {props.weather} </div>
                </div>
            </div>

            <div className="weather-info">
                <div className="weather-info-add">
                    <div className="humidity"> Humidity {props.humidity}%</div>
                    <div className="wind"> Wind {props.wind} m/s</div>
                </div>
                <img className="weather-image" src={"https://openweathermap.org/img/wn/"+props.iconCode+"@2x.png"} alt="Weather icon"/>
            </div>
            {isAuth &&
                <div className="heart-container">
                    <Heart isActive={active} onClick={handleHeartClick} />
                </div>
            }
            </div>
    );
};

export default WeatherItem;