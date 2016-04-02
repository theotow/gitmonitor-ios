import { AsyncStorage } from 'react-native'

import { SettingsConst } from '../reducer/Settings'
import * as utils from '../utils/api'

export function setToken(token) {
  return {
    type: SettingsConst.SET_TOKEN,
    payload: token,
		presist: true
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
        payload: data.id,
				presist: true
      })
    })
  }
}

export function changeEndpoint(url){
  return (dispatch, getState) => {
    return dispatch({
      type: SettingsConst.SET_ENDPOINT,
      payload: {
        endpoint: url
      },
      presist: true
    })
  }
}

export function writeStore(){
  return (dispatch, getState) => {
    return AsyncStorage.setItem(SettingsConst.SETTINGS, JSON.stringify(getState().settings))
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
