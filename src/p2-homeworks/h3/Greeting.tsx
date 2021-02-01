import React from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = name.trim() ? s.normal : s.error; // need to fix with (?:)
  return (
      <div className={s.wrapper}>
        <div className={s.input}>
          <input
              id='nameInput'
              value={name}
              onChange={setNameCallback}
              className={inputClass}
              type='text'
              // placeholder='Enter your name'
          />
          <label htmlFor="nameInput" className={s.label}>User name</label>
        </div>
        <span className={s.mistake} >{error}</span>
        <button className={s.button} onClick={addUser}>Add User</button>
        <span className={s.counter}>How much user is registry: {totalUsers}</span>
      </div>
  );
}

export default Greeting;
