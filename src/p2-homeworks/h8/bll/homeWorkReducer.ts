import {UserType} from './tests/homeWorkReducer.test';
import {initialPeople} from '../HW8'


export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const copyState: UserType[] = state.map(obj => ({...obj}))
      return copyState.sort(function (a, b) {
        if (action.payload === 'up') {
          return a.name > b.name ? 1 : -1
        } else {
          return a.name > b.name ? -1 : 1
        }
      })
    }
    case 'check': {
      return state.filter(obj => obj.age >= action.payload)
    }
    default:
      return state
  }
};
type SortedListType = {
  type: 'sort'
  payload: string
}
type SortedAgeType = {
  type: 'check'
  payload: number
}
type ActionType = SortedAgeType | SortedListType

export const sortedList = (sortId: string): ActionType => ({type: 'sort', payload: sortId})
export const sortedAge = (age: number): ActionType => ({type: 'check', payload: age})
