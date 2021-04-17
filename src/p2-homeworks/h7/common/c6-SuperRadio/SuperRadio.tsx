import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from '../../../h12/bll/themeReducer';
import {AppStoreType} from '../../../h10/bll/store';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
      type, name,
      options, value,
      onChange, onChangeOption,
      ...restProps
    }
) => {
  const theme = useSelector<AppStoreType, string>(state => state.theme)
  const dispatch = useDispatch()
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeThemeC(e.currentTarget.name))
    // onChange, onChangeOption
  }


  const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
      <label key={name + '-' + i}>
        <input
            type={'radio'}
            name={o}
            onChange={onChangeCallback}
            checked={o === theme}
            // name, checked, value, onChange
        />
        {o}
      </label>
  )) : [];

  return (
      <>
        {mappedOptions}
      </>
  );
}

export default SuperRadio;
