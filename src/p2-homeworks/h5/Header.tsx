import React from "react";
import {PATH} from './Routes';
import {NavLink} from 'react-router-dom';
import style from './header.module.css'

function Header() {
    return (
        <div className={style.header}>
          <NavLink   className={style.link} to={PATH.PRE_JUNIOR} activeClassName={style.linkSelected}>
            PreJunior
          </NavLink>
          <NavLink className={style.link} to={PATH.JUNIOR} activeClassName={style.linkSelected}>
            Junior
          </NavLink>
          <NavLink className={style.link} to={'/FOUND'} activeClassName={style.linkSelected}>
           Button
          </NavLink>
          <NavLink className={style.link} to={'/FOUN'} activeClassName={style.linkSelected} >
          Social Network
          </NavLink>

        </div>
    );
}

export default Header;
