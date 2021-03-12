import React, {useState} from 'react';
import {homeWorkReducer, sortedAge, sortedList} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {UserType} from './bll/tests/homeWorkReducer.test';

export const initialPeople: UserType[] = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState(initialPeople);

  const finalPeople = people.map(p => (
      <div key={p._id}>
        <span>Name:{p.name}</span>
        <span>Age:{p.age}</span>
      </div>
  ))

  const sortUp = () => setPeople(() => homeWorkReducer(initialPeople, sortedList('up')))
  const sortDown = () => setPeople(() => homeWorkReducer(initialPeople, sortedList('down')))
  const checkAge = () => setPeople(() => homeWorkReducer(initialPeople, sortedAge(18)))

  return (
      <div>
        <hr/>
        homeworks 8
        {/*should work (должно работать)*/}
        {finalPeople}
        <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
        <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
        <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>

        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
        <hr/>
      </div>
  );
}

export default HW8;
