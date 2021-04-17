import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes:string[] = ['dark', 'red', 'some'];

function HW12() {
const theme = useSelector<AppStoreType,string>(state => state.theme)
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
          <SuperSelect options={themes}/>
          <SuperRadio options={themes} />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
