import React, {useContext} from 'react';
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import {AuthContext} from "../../context/AuthContext";
import classes from "./Login.module.css";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }

    return (
        <div className={classes.login}>
            <h1> login page </h1>
            <form className={classes.form}>
                <Input type="text" placeholder="enter login" />
                <Input type="password" placeholder="enter password" />
                <Button onClick={login} type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;