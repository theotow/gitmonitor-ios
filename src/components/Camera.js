import React from "react-native"
import CameraModule from 'react-native-camera'


let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  AlertIOS,
  StyleSheet
} = React

var styles = StyleSheet.create({
  cameraInner: {
    position: 'absolute',
    top: 30,
    bottom: 0,
    left: 0,
    right: 0,
  },
  img: {
    height: 196,
    width: 196,
    backgroundColor: 'transparent',
  },
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  camera: {
    flex: 1,
  }
})

export default class Camera extends Component {
  constructor() {
    super()
    this.state = {cameraType: CameraModule.constants.Type.back}
  }

  render() {
    return (
      <View style={styles.camera}>
        <CameraModule
          ref="cam"
          style={styles.cameraInner}
          onBarCodeRead={this.props.onScan}
          type={this.state.cameraType}
                    >
        </CameraModule>
        <View style={styles.imgWrap}>
          <Image source={require('image!Qrscan')} style={styles.img} />
        </View>
      </View>
    )
  }
}
