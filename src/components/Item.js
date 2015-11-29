import React from "react-native";


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
  itemWrap: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    flex: 1,
  },
  item: {
    backgroundColor: '#FFF147',
    height: 40,
    flex: 1,
  },
});

// TODO: make image changable with prop, left / right , make click prop

export default class ItemList extends Component {

  _onPressButton(){
    alert('register: ');
  }

  render() {
    return (
      <View style={styles.itemWrap}>
        <View style={styles.item}>
          <Text>dfddfd</Text>
        </View>
     </View>
    );
  }
}
