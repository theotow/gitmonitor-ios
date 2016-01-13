import React from 'react-native';
import Router from '../components/Router';
import QrView from '../views/QrView';



let {
  View,
  Text,
  Image,
  Navigator,
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
    return (
      <Navigator
          initialRoute={{name: 'QrView'}}
          renderScene={Router}
          configureScene={Router.configureScene}
      />
    );
  }
}
