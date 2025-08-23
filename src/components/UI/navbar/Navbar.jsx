import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <MyButton children="logout" onClick={() => setIsAuth(false)}/>
                <div >
                    <Link to="/main"> main </Link>
                    <Link to="/account"> account </Link>
                </div>

            </div>
        </div>
                :
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/main"> main </Link>
                    <Link to="/login"> login </Link>
                </div>
            </div>
    );
};

export default Navbar;