import React from 'react';
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
};

let showData: string = new Date().toLocaleString();

const alternativeMessageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOD-VnlSroIYWcC3A6RD4GuwIS7z9hCUJaQ&usqp=CAU',
    name: 'Smile',
    message: 'All be fine!!!',
    time: showData
}

function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>

            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
