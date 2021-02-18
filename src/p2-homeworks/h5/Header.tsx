import React from 'react';
import {PATH} from './Routes';
import {NavLink} from 'react-router-dom';
import style from './header.module.css'

function Header() {
  return (
      <div className={style.header}>
        <NavLink className={style.link} to={PATH.PRE_JUNIOR} activeClassName="selected">
          PreJunior
        </NavLink>
        <NavLink className={style.link} to={PATH.JUNIOR} activeClassName="selected">
          Junior
        </NavLink>
        <NavLink className={style.link} to={'/FOUND'}>
          Button
        </NavLink>
        <NavLink className={style.link} to={'/FOUND'}>
          Social Network
        </NavLink>

      </div>
  );
}

export default Header;
