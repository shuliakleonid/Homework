import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options: Array<string>
  onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
      type, name,
      options, value,
      onChange, onChangeOption,
      ...restProps
    }
) => {
  const onChangeCallback = (valueButton: string) => {
    onChangeOption(valueButton)
    // onChange, onChangeOption
  }
  console.log(value)
  const mappedOptions = options ? options.map((o, i) => ( // map options with key
      <label key={name + '-' + i}>
        <input
            type={name}
            onChange={() => onChangeCallback(o)}
            checked={o === value}
            value={value}
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
