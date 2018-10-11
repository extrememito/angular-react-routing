export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface State {
  appState: AppState
}

export interface AppState {
  language: string
}

const initState: AppState = {
  language: 'en_US',
}

export function appReducer(state = initState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export const reducers = {
  appState: appReducer
}
