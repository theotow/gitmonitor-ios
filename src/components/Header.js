import React, { PropTypes } from "react-native";
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

var styles = {
  header: {
    borderTopLeftRadius: STYLE.BORDER_RADIUS,
    borderTopRightRadius: STYLE.BORDER_RADIUS,
    borderTopWidth: STYLE.BORDER_RADIUS,
    borderColor: '#FFF147',
    height: 60,
    position: 'absolute',
    right: 0,
    top: 18,
    left: 0,
    flex: 1,
    backgroundColor: '#FFF147',
  },
  headerInner: {
    paddingLeft: STYLE.PADDING,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: -STYLE.BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: STYLE.PADDING,
  },
  img: {
    width: 22,
    height: 5,
  },
  imgWrap: {
    width: 22,
    height: 5,
    top: 6,
    right: 0,
    position: 'absolute',
  },
  left: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    width: 50,
    right: 0,
    padding: 8,
    opacity: 1
  },
  txt: {
    fontFamily: STYLE.FONT_LATO,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontSize: 22,
  }
};

class Header extends Component {

  hide(style, bool) {
    if(bool) return {
      ...style,
      opacity: 0
    }
    return style
  }

  render() {

    const {
      props: {
        hideSettings,
        goSettings
      },
      hide
    } = this

    return (
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <View style={styles.left}>
            <Text style={styles.txt}>GITMONITOR</Text>
          </View>
          <View style={hide(styles.right, hideSettings)}>
            <TouchableOpacity style={styles.imgWrap} onPress={goSettings}>
              <Image source={require('image!Group')} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  hideSettings: PropTypes.bool.isRequired,
  goSettings: PropTypes.func
}

export default Header
