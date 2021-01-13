import React from 'react';

type AffairPropsType = {
  _id: number// key не нужно типизировать
  affair: string // need to fix any
  deleteAffairCallback: (id: number) => void  // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props._id)
  };// need to fix

  return (
      <div>
        {props.affair}
        <button onClick={
          deleteCallback
        }>X
        </button>
      </div>
  );
}

export default Affair;
