import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <div {...props} className={classes.myButton}>
            {children}
        </div>
    );
};

export default MyButton;