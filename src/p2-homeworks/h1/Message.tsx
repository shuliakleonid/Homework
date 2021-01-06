import React from 'react';
import classes from './Message.module.css';

type TypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: TypeProps) {
    return (
        <div className={classes.post}>
            <img className={classes.img} src={props.avatar} alt="devil"/>
            <div className={classes.info}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.message}>{props.message}</p>
                <p className={classes.time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message;
