import React from 'react';
import classes from './Alternative.module.css'

type TypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: TypeProps) {
    return (
        <div className={classes.wrapper}>
            <img className={classes.img} src={props.avatar} alt="avatar"/>
            <div className={classes.bubble}>
                <div className={classes.txt}>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.message}>{props.message}</p>
                    <span className={classes.time}>{props.time}</span>
                </div>
                <div className={classes.arrow}></div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
