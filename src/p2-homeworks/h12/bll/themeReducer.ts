const initState:string = 'dark';

export const themeReducer = (state = initState, action: ActionType): string => { // fix any
  switch (action.type) {
    case 'CHANGE_THEME': {
      return action.theme;
    }
    default:
      return state;
  }
};

type ActionType = ReturnType<typeof changeThemeC>


export const changeThemeC = (theme: string) => ({type: 'CHANGE_THEME', theme}) as const  // fix any
