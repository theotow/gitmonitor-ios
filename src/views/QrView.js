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
    // Render the top-level element that will contain the complete UI
    // of your application. You may also choose to use this element
    // as the single source of data, that is then passed down to
    // child components.

    return (
      <View style={styles.container}>
        <Camera />
        <Header />
        <Button />
      </View>
    );
  }
}
