import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import './Clock.css'
function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [time, setTime] = useState('Time')
  const stop = () => {
    window.clearInterval(timerId)
    // stop
  }
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    setTimerId(id);
  }
  // console.log(new Date().toDateString())
  // useEffect(() => {
  //   setTime (new Date().toLocaleTimeString())
  //     },[timerId]
  // )

  const onMouseEnter = () => {
    setShow(true)
    setDate(new Date().toDateString())
    // show
  };
  const onMouseLeave = () => {
    setShow(false)
    // close
  };

  // const stringTime = 'Time'; // fix with date
  // const stringDate = 'Date'; // fix with date

  return (
      <div>

        <div className='clock'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
          <h1>{time}</h1>
        </div>
        {show && (
            <div className='date'>
              {date}
            </div>
        )}
        <div className='button'>
          <SuperButton onClick={start}>start</SuperButton>
          <SuperButton onClick={stop}>stop</SuperButton>
        </div>

      </div>
  );
}

export default Clock;
