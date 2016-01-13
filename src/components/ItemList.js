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
    top: 78,
    bottom: 70,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  unpushed: {
    backgroundColor: 'black',
    paddingBottom: 20
  }
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
       <View style={styles.unpushed}>
       <Item />
       <Item />
       </View>
       <Item />
         <Item />
           <Item />
             <Item />

     </ScrollView>
    );
  }
}
