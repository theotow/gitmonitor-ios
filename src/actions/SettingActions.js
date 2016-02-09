import { AsyncStorage } from 'react-native'

import { SettingsConst } from '../reducer/Settings'
import * as utils from '../utils/api'

export function setToken(token) {
  return {
    type: SettingsConst.SET_TOKEN,
    payload: token
  }
}

export function signup(){
  return (dispatch, getState) => {
    return utils.install(getState().settings.endpoint, {
      "deviceToken": getState().settings.token,
      "deviceType": "ios"
    }).then(response => response.json()).then(function(data){
      return dispatch({
        type: SettingsConst.SET_USERID,
        payload: data.id
      })
    })
  }
}

export function readStore(){
  return (dispatch, getState) => {
    return AsyncStorage.getItem(SettingsConst.SETTINGS).then(function(value){
      if (value !== null){
        return dispatch({
          type: SettingsConst.SET_DATA,
          payload: JSON.parse(value)
        })
      }
    })
  }
}
