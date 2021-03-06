import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: Array<string>
  onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
      options,
      onChange, onChangeOption,
      ...restProps
    }
) => {
  const mappedOptions = options.map(o => <option>{o}</option>); // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.currentTarget.value)
    // onChange, onChangeOption
  }

  return (
      <select onChange={onChangeCallback} {...restProps}>
        {mappedOptions}
      </select>
  );
}

export default SuperSelect;
