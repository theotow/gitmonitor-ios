import React, { Navigator } from 'react-native';
import ListView from '../views/ListView';
import QrView from '../views/QrView';
import SettingsView from '../views/SettingsView';

export default function(route, navigator){
  switch(route.name){
    case "ListView":
      return (
        <ListView navigator={navigator} />
      )
    break;
    case "QrView":
      return (
        <QrView navigator={navigator} />
      )
    break;
    case "SettingsView":
      return (
        <SettingsView navigator={navigator} />
      )
    break;
  }
}

export function configureScene(route){
  return Navigator.SceneConfigs.FadeIn;
}
