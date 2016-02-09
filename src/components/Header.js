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
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 15,
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
    paddingLeft: 20,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: -15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
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
    opacity: 0
  },
  txt: {
    fontFamily: 'Lato',
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontSize: 22,
  }
});

// TODO: make click prop, make name prop

export default class Header extends Component {

  _onPressButton(){
    //TODO: settings
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <View style={styles.left}>
            <Text style={styles.txt}>GITMONITOR</Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={styles.imgWrap} onPress={this._onPressButton}>
              <Image source={require('image!Group')} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
