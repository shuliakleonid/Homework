import React, {useState} from 'react';
import AffairAlternative from './AlternativeAffair';
import classes from './AlternativeAffairs.module.css'
import {AffairPriorityType, FilterType} from './HW2';

type AffairsPropsType = {
  data: AffairPriorityType
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (id: number) => void
  toggleCheckBox: (id: number) => void
  onCreate: (value: string) => void
}

function AlternativeAffairs(props: AffairsPropsType) {
  const mappedAlternativeAffairs =
      props.data.map((item) => (
          <AffairAlternative
              key={item._id}
              _id={item._id}
              affair={item.name}
              onChange={item.onChange}
              deleteAffairCallback={props.deleteAffairCallback}
              toggleCheckBox={props.toggleCheckBox}
          />
      ))

  const [value, setInputValue] = useState('');
  const submitHandler = (event: any) => {// не понятно какой тип у event!!!?
    event.preventDefault() //  избавляемся от перерисовки
    if (value.trim()) {
      props.onCreate(value)
      setInputValue('')
    }
  }

  return (
      <div className={classes.wrapper}>
        <section className={classes.section}>
          <div className={classes.title}>List Title</div>
          <div className={classes.cards}>
            {mappedAlternativeAffairs.length
                ? mappedAlternativeAffairs
                : <p>Write some Todo!</p>
            }
          </div>
          <form onSubmit={submitHandler} className={classes.input}>
            <input
                onChange={event => setInputValue(event.target.value)}
                value={value}
                className={classes.addForm}
            />
            <button className={classes.button} type='submit'>Add</button>
          </form>
        </section>
      </div>
  );
}

export default AlternativeAffairs;
