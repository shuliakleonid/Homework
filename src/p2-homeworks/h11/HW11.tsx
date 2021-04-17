import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  const changeVal1 = (val: number) => {
    setValue1(val)
  }
  const changeVal2 = (val: number) => {
    setValue2(val)
  }

  return (
      <div>
        <hr/>
        homeworks 11
        {/*should work (должно работать)*/}
        <div>
          <span>{Math.floor(value1)}</span>
          <SuperRange
              onChangeRange={changeVal1}
              value={value1}
              // сделать так чтоб value1 изменялось
          />
        </div>
        <div>
          <span>{Math.floor(value1)}</span>
          <SuperDoubleRange
              // onChangeRange={changeRangeVal2}
              value1={value1}
              value2={value2}
              changeVal1={changeVal1}
              changeVal2={changeVal2}
              // сделать так чтоб value1 и value2 изменялось
          />
          <span>{Math.floor(value2)}</span>
        </div>
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeSuperRange/>*/}
        {/*<AlternativeSuperDoubleRange/>*/}
        <hr/>
      </div>
  );
}

export default HW11;
