export type initStateProps = {
  loading: boolean
}

const initState = {
  loading: false
};

export const loadingReducer = (state: initStateProps = initState, action: ActionType): initStateProps => { // fix any
  switch (action.type) {
    case 'SET_LOADING': {
      debugger
      console.log({...state, ...action.payload})
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export type ActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({type: 'SET_LOADING', payload: {loading}}) as const
