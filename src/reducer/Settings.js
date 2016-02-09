import mirror from '../utils/mirror'

const initialState = {
  endpoint: 'http://dockerhost.dev:3000',
  token: null,
  userId: null
}

export const SettingsConst = mirror([
  'SET_TOKEN',
  'SET_DATA',
  'SET_USERID',
  'SETTINGS'
])

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case SettingsConst.SET_USERID:
      return {
        ...state,
        userId: action.payload
      }
    case SettingsConst.SET_DATA:
      return action.payload
    case SettingsConst.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
