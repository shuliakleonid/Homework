import React, {ChangeEvent, useState} from 'react';
import './SuperDoubleRange.css'


type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number, val: number) => void
  changeVal1: (val: number) => void
  changeVal2: (val: number) => void
  value1: number
  value2: number
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
      value1, value2, onChangeRange, changeVal1, changeVal2
      // onChangeRange, value,
      // min, max, step, disable, ...
    }
) => {
  // сделать самому, можно подключать библиотеки
  const [hoverLeft, setHoverLeft] = useState('')
  const [activeLeft, setActiveLeft] = useState('')
  const [hoverRight, setHoverRight] = useState('')
  const [activeRight, setActiveRight] = useState('')
  const setLeftValue = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target
    const min = parseInt(input.min)
    const max = parseInt(input.max)

    input.value = String(Math.min(parseInt(input.value), parseInt(String(value2)) - 1))
    let percent = ((parseInt(input.value) - min) / (max - min)) * 100;
    changeVal1(percent)
  }
  const setRightValue = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target
    const min: number = parseInt(input.min)
    const max: number = parseInt(input.max)

    input.value = String(Math.max(parseInt(input.value), parseInt(String(value1)) + 1))

    let percent: number = ((parseInt(input.value) - min) / (max - min)) * 100;
    changeVal2(percent)
  }
  return (
      <div className='wrapper'>
        <div className="middle">
          <div className="multi-range-slider">
            <input type="range"
                   className={`input inputLeft `}
                   value={value1}
                   min="0"
                   max="100"
                   onChange={setLeftValue}
                   onMouseOver={() => setHoverLeft('hover')}
                   onMouseDown={() => setActiveLeft('active')}
                   onMouseOut={() => setHoverLeft('')}
                   onMouseUp={() => setActiveLeft('')}
            />
            <input type="range"
                   className="input inputRight"
                   value={value2}
                   min="0"
                   max="100"
                   onChange={setRightValue}
                   onMouseOver={() => setHoverRight('hover')}
                   onMouseDown={() => setActiveRight('active')}
                   onMouseOut={() => setHoverRight('')}
                   onMouseUp={() => setActiveRight('')}
            />
            <div className="slider">
              <div className="track"/>
              <div className="range"
                   style={{left: `${value1}%`, right: `${100 - value2}%`}}/>
              <div className={`thumb left ${hoverLeft} ${activeLeft}`}
                   style={{left: `${value1}%`}}/>
              <div className={`thumb right ${hoverRight} ${activeRight}`}
                   style={{right: `${100 - value2}%`}}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SuperDoubleRange;
