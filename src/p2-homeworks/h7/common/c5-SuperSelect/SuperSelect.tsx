import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import {changeThemeC} from '../../../h12/bll/themeReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
  const theme = useSelector<AppStoreType,string>(state => state.theme)
  const dispatch =useDispatch()
    const mappedOptions = options && options.map((option,index)=> <option key={index} value={option} selected={option === theme}>{option}</option>)
  // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(changeThemeC(e.currentTarget.value))
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
