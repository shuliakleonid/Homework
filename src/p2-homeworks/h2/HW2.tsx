import React, {useState} from 'react';
import Affairs from './Affairs';
import AlternativeAffairs from './AlternativeAffairs';

// types
export type AffairPriorityType = Array<AffairType>;// need to fix any
export type AffairType = {
  _id: number
  name: string
  priority: string
  onChange: boolean
}; // need to fix any

export type FilterType = 'all' | 'high' | 'middle' | 'low';

// constants
const defaultAffairs: AffairPriorityType = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high', onChange: true},
  {_id: 2, name: 'anime', priority: 'low', onChange: true},
  {_id: 3, name: 'games', priority: 'low', onChange: false},
  {_id: 4, name: 'work', priority: 'high', onChange: false},
  {_id: 5, name: 'html & css', priority: 'middle', onChange: true},
];

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => {
  // need to fix any
  if (filter === 'high') {
    affairs = affairs.filter(i => i.priority === 'high')
  }
  if (filter === 'middle') {
    affairs = affairs.filter(i => i.priority === 'middle')
  }
  if (filter === 'low') {
    affairs = affairs.filter(i => i.priority === 'low')
  }
  return affairs;
  // need to fix
}
export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => { // need to fix any
  return affairs = affairs.filter(i => i._id !== _id)// need to fix
}

// мапим массив для добавления изменения чекбокса
const toggleAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => {
  affairs = affairs.map((i) => {
    if (i._id === _id) {
      return {...i, onChange: !i.onChange}
    }
    return i;
  })
  return affairs
}

// добавляем новое дело
const addAffairs = (affairs: AffairPriorityType, value: string) => {
  return affairs = affairs.concat([{
    _id: Date.now(),
    name: value,
    priority: 'high',
    onChange: false,
  }])
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));
// переключатель чекбокса
  const toggleAffairCallback = (_id: number) => setAffairs(toggleAffair(affairs, _id))
  // новое дело
  const addTodoCallback = (value: string) => setAffairs(addAffairs(affairs, value))


  return (
      <div>
        <hr/>
        homeworks 2
        {/*should work (должно работать)*/}
        <Affairs
            data={filteredAffairs}
            setFilter={setFilter}
            deleteAffairCallback={deleteAffairCallback}
        />

        <hr/>
        {/*для личного творчества, могу проверить*/}
        <AlternativeAffairs
            data={filteredAffairs}
            setFilter={setFilter}
            deleteAffairCallback={deleteAffairCallback}
            toggleCheckBox={toggleAffairCallback}
            onCreate={addTodoCallback}
        />
        <hr/>
      </div>
  );
}

export default HW2;
