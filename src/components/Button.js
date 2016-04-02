import React from "react-native";
import { STYLE } from '../constants'

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
    width: STYLE.BTN_W,
    height: STYLE.BTN_H,
  },
  imgWrapLeft: {
    width: STYLE.BTN_W,
    height: STYLE.BTN_H,
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  imgWrapRight: {
    width: STYLE.BTN_W,
    height: STYLE.BTN_H,
    backgroundColor: 'transparent',
    bottom: 0,
    right: 0,
    position: 'absolute',
  }
});

export default class Button extends Component {

  _getStyle(left, right){
    return (left) ? styles.imgWrapLeft : styles.imgWrapRight;
  }

  render() {

    const {
      image,
      onClick,
      left
    } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.9} style={this._getStyle(left)} onPress={onClick}>
        <Image source={image} style={styles.img} />
      </TouchableOpacity>
    );
  }
}
