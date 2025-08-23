import React, {useContext} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import {AuthContext} from "../../context/AuthContext";
import classes from "./Login.module.css";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("isAuth", isAuth);

    }

    return (
        <div className={classes.login}>
            <h1> login page </h1>
            <form className={classes.form}>
                <MyInput type="text" placeholder="enter login" />
                <MyInput type="password" placeholder="enter password" />
                <MyButton onClick={login} type="submit">Login</MyButton>
            </form>
        </div>
    );
};

export default Login;