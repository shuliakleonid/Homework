import React from 'react';
import classes from './AlternativeAffair.module.css'

type AffairPropsType = {
  _id: number
  affair: string
  onChange: boolean
  deleteAffairCallback: (id: number) => void
  toggleCheckBox: (id: number) => void
}
const AffairAlternative = (props: AffairPropsType) => {

  const deleteAffair = () => {
    props.deleteAffairCallback(props._id)
  }

  return (
      <div className={classes.card}>
        <input
            onClick={() => {
              props.toggleCheckBox(props._id)
            }}
            checked={props.onChange}
            className={classes.checkbox}
            type="checkbox"/>
        {props.onChange // это правильное решение как добавить класс на лету???
            ? <span className={`${classes.name} ${classes.done}`}>{props.affair}</span>
            : <span className={classes.name}>{props.affair}</span>
        }
        <div>
          <button className={classes.button} onClick={deleteAffair}>X</button>
        </div>
      </div>
  )
}

export default AffairAlternative
