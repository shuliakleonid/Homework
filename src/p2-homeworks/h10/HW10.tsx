import React from 'react';
import {Dispatch} from 'redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {ActionType, loadingAC} from './bll/loadingReducer';
import s from './HW10.module.css'

function HW10() {
  // useSelector, useDispatch
  const dispatch = useDispatch<Dispatch<ActionType>>()
  const loading = useSelector<AppStoreType,boolean>(state => state.loading.loading)
  // const loading = false;
  console.log(loading)
  const setLoading = () => {
    // dispatch
    // setTimeout
    setTimeout(() => {
      dispatch(loadingAC(true))
    }, 2000)
    console.log('loading...');
  };

  return (
      <div className={s.wrapper}>
        <hr/>
        {/*homeworks 10*/}

        {/*should work (должно работать)*/}
        {loading
            ? (
                <div className={s.loader}><h2>Loading...</h2></div>
            ) : (
                <div>
                  <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
            )
        }

        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<Alternative/>*/}
        <hr/>
      </div>
  );
}


export default HW10;
