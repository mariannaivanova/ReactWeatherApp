import {useContext} from "react";
import {useState} from "react";
import {FavoritesContext} from "../context/FavoritesContext";

export const useFavorites = () => {
    return useContext(FavoritesContext);
}

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (cityData) => {
        setFavorites(prev => {
            if (!prev.some(city => city.city === cityData.city)) {
                return [...prev, cityData];
            }
            return prev;
        });
    };

    const removeFavorite = (cityData) => {
        setFavorites(prev =>
            prev.filter(city => city.city !== cityData.city)
        )
    }

    const isFavorite = (cityName) => {
        return favorites.some(city => city.city === cityName);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}