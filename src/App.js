import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import "./styles/app.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {AuthContext} from "./context/AuthContext";
import {FavoritesProvider} from "./hooks/useFavorites";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <FavoritesProvider>
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </FavoritesProvider>
      </AuthContext.Provider>
  );
}

export default App;
