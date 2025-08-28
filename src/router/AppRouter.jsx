import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>;
    }

    const routes = isAuth ? privateRoutes : publicRoutes;
    const redirectPath = isAuth ? "/main" : "/login";

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route path="*" element={<Navigate to={redirectPath} replace />} />
        </Routes>
    );
};

export default AppRouter;