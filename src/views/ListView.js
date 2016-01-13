import React from 'react-native';

import Header from '../components/Header';
import Button from '../components/Button';
import Camera from '../components/Camera';
import ItemList from '../components/ItemList';


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

export default class ListView extends Component {

  render() {

    return (
      <View style={styles.container}>
        <ItemList />
        <Header />
        <Button />
      </View>
    );
  }
}
