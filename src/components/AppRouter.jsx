import React, {useContext} from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/AuthContext";
import MyLoader from "./UI/loader/MyLoader";


const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <MyLoader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to="/main" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>


    );}

export default AppRouter;