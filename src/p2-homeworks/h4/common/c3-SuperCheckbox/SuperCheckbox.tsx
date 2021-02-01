import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void
  spanClassName?: string
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
      type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
      onChange, onChangeChecked,
      className, spanClassName,
      children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

      ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    if (onChangeChecked) {
      onChangeChecked(e.currentTarget.checked)
    }
    // сделайте так чтоб работал onChange и onChangeChecked
  }
  const finalInputClassName = `${s.checkbox} ${className ? className : ''}`;

  return (
      <div className={s.squaredFour}>
        <input
            type={'checkbox'}
            onChange={onChangeCallback}
            className={finalInputClassName}
            id={'squaredFour'}
            {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
        />
        <label htmlFor='squaredFour'>
          {children && <span className={s.spanClassName}>{children}</span>}
        </label>
      </div>// благодаря label нажатие на спан передастся в инпут
  );
}

export default SuperCheckbox;
