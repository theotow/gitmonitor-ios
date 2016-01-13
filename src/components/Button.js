import React from "react-native";


let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  AlertIOS,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  img: {
    width: 108,
    height: 108,
  },
  imgWrap: {
    width: 108,
    height: 108,
    backgroundColor: 'transparent',
    bottom: 0,
    right: 0,
    position: 'absolute',
  }
});

// TODO: make image changable with prop, left / right , make click prop

export default class Button extends Component {

  _onPressButton(){
    alert('register: ');
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.imgWrap} onPress={this._onPressButton}>
        <Image source={require('image!Scanbutton')} style={styles.img} />
      </TouchableOpacity>
    );
  }
}
