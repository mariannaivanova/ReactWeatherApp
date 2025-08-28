import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import Button from "../button/Button";
import classes from "./Navbar.module.css";
import {publicRoutes, privateRoutes} from "../../../router/routes";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const routes =
        isAuth
            ? privateRoutes
            : publicRoutes;

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    }


    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                { isAuth && <Button children="logout" onClick={logout}/>}
                { routes.map(item => {
                return (
                    <Link to={item.path} key={item.name}> {item.name} </Link>
                )
            })}
                </div>
            </div>
    );
};

export default Navbar;