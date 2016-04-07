import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducer'
import * as SettingActions from './actions/SettingActions'


const logger = createLogger();

const presist = store => next => action => {
  if(action.presist){
		next(action)
		return store.dispatch(SettingActions.writeStore())
	}
  return next(action)
}


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, presist)(createStore)

export default function storeSetup(initState) {
    return createStoreWithMiddleware(rootReducer, initState)
}
