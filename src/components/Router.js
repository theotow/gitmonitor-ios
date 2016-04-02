import React, { Navigator } from 'react-native';
import ListView from '../views/ListView';
import QrView from '../views/QrView';
import SettingsView from '../views/SettingsView';
import { ROUTER } from '../constants'

export default function(route, navigator){
  switch(route.name){
    case ROUTER.LIST:
      return (
        <ListView navigator={navigator} />
      )
    break;
    case ROUTER.QR:
      return (
        <QrView navigator={navigator} />
      )
    break;
    case ROUTER.SETTINGS:
      return (
        <SettingsView navigator={navigator} />
      )
    break;
  }
}

export function configureScene(route){
  return Navigator.SceneConfigs.FadeIn;
}
