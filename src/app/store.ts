import { Action } from '@ngrx/store';

export interface AppState {
  language: string
}

const initialState: AppState = {
  language: 'en_US',
}

export const SET_LANG = 'SET_LANG'

export class SetLang implements Action {
  type = SET_LANG
  constructor(public payload: string) {}
}

const appReducer = (state = initialState, action: SetLang) => {
  switch(action.type) {
    case SET_LANG: {
      return {
        ...state,
        language: action.payload
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export const state = {
  app: appReducer
}