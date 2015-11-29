import React from "react-native";

import Item from './Item';

let {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Component,
  AlertIOS,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  scrollView: {
    height: 300,
  },
});

// TODO: https://github.com/jsdf/react-native-refreshable-listview

export default class ItemList extends Component {

  _onPressButton(){
    alert('register: ');
  }

  render() {
    return (
      <ScrollView
       automaticallyAdjustContentInsets={false}
       onScroll={() => { console.log('onScroll!'); }}
       scrollEventThrottle={200}
       style={styles.scrollView}>
       <Item />
       <Item />
     </ScrollView>
    );
  }
}
