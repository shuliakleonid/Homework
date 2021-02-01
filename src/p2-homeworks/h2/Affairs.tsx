import React from 'react';
import Affair from './Affair';
import {AffairPriorityType, AffairType, FilterType} from './HW2';

type AffairsPropsType = { // need to fix any
  data: AffairPriorityType
  setFilter: (id:FilterType) => void
  deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair // should work
          key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
          affair={a.name}
          deleteAffairCallback={props.deleteAffairCallback}
          _id={a._id}
      />
  ))

  const buttonValue = (event:any) => {
    props.setFilter(event.currentTarget.textContent.toLowerCase())
  }
  // const setAll = () => {}; // need to fix
  // const setHigh = () => {};
  // const setMiddle = () => {};
  // const setLow = () => {};

  return (
      <div>
        {mappedAffairs}
        <button onClick={buttonValue}>All</button>
        <button onClick={buttonValue}>High</button>
        <button onClick={buttonValue}>Middle</button>
        <button onClick={buttonValue}>Low</button>
      </div>
  );
}

export default Affairs;
