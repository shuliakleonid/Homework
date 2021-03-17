import React, {useEffect, useState} from 'react';

function AlternativeClock() {

    const [date, setDate] = useState(new Date());

    //Replaces componentDidMount and componentWillUnmount
    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );

      return function cleanup() {
        clearInterval(timerID);
      };
    });

    function tick() {
      setDate(new Date());
    }

    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default AlternativeClock;
