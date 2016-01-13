import React, { Navigator } from 'react-native';
import ListView from '../views/ListView';
import QrView from '../views/QrView';

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
  }
}

export function configureScene(route){
  return Navigator.SceneConfigs.FadeIn;
}
