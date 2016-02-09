import { combineReducers, applyMiddleware, createStore } from 'redux'
import * as Repos from './reducer/Repos'
import * as Settings from './reducer/Settings'

export default combineReducers({
  repos: Repos.Reducer,
  settings: Settings.Reducer
})
