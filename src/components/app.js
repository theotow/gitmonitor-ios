import React from 'react-native';
// import {Route, Router} from 'react-router';

// import Header from './Header';
// import Button from './Button';
// import Camera from './Camera';
// import ItemList from './ItemList';
import ListView from '../views/ListView';
import QrView from '../views/QrView';


let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default class App extends Component {

  render() {
    // Render the top-level element that will contain the complete UI
    // of your application. You may also choose to use this element
    // as the single source of data, that is then passed down to
    // child components.

    return (
      <QrView />
    );
  }
}
