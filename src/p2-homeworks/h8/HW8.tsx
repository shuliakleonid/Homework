import React, {useState} from 'react';
import {homeWorkReducer, sortedAge, sortedList} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {UserType} from './bll/tests/homeWorkReducer.test';
import s from './HW8.module.css'


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
      <tr key={p._id}>
        <td>{p.name}</td>
        <td>{p.age}</td>
      </tr>
  ))

  const sortUp = () => setPeople(() => homeWorkReducer(initialPeople, sortedList('up')))
  const sortDown = () => setPeople(() => homeWorkReducer(initialPeople, sortedList('down')))
  const checkAge = () => setPeople(() => homeWorkReducer(initialPeople, sortedAge(18)))

  return (
      <div className={s.wrapper}>
        <hr/>
        homeworks 8
        {/*should work (должно работать)*/}
        <table className={s.table}>
          <caption>Sort List</caption>
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
          {finalPeople}
          </tbody>

        </table>
        <div className={s.buttonWrapper}>
          <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
          <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
          <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
        </div>
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
        <hr/>
      </div>
  );
}

export default HW8;
