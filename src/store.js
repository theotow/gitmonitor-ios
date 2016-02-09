import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducer'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore)

export default function storeSetup(initState) {
    return createStoreWithMiddleware(rootReducer, initState)
}
