/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Video = require('react-native-video');
var Camera = require('react-native-camera');
var RemotePushIOS = require("react-native-remote-push");
var {
  AppRegistry,
  StyleSheet,
  ScrollView,
  StatusBarIOS,
  Text,
  View,
  AlertIOS,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
  PushNotificationIOS,
  VibrationIOS
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {text: 'df', cameraType: Camera.constants.Type.back, permissions: null};
  },

  componentWillMount() {
    RemotePushIOS.requestPermissions(function(err, data) {
  if (err) {
    console.log("Could not register for push");
  } else {
    // On success, data will contain your device token. You're probably going to want to send this to your server.
    console.log(data.token);
  }
});


    PushNotificationIOS.addEventListener('register', function(devicetoken){
     console.log('register', devicetoken);
     alert('register: ' + devicetoken);
    });
    PushNotificationIOS.addEventListener('notification', this._onNotification);
    RemotePushIOS.setListenerForNotifications(this._onNotification);
  },
  componentWillUnmount() {
    //PushNotificationIOS.abandonPermissions();
  },
    _showPermissions() {
    PushNotificationIOS.checkPermissions((permissions) => {
      this.setState({permissions});
    });


  },

  _onBarCodeRead(e) {
  console.log(e);
},
_onNotification(notification) {
     // Your code to run when the alert fires
     AlertIOS.alert(
         'Notification received',
         JSON.stringify(notification),
         [
             {text: 'OK', onPress: () => console.log('Ok pressed!')}
         ]
     );

 },
 _reqPer(){

 },
_switchCamera() {
  var state = this.state;
  state.cameraType = state.cameraType === Camera.constants.Type.back
    ? Camera.constants.Type.front : Camera.constants.Type.back;
  this.setState(state);
},
_takePicture() {
  this.refs.cam.capture(function(err, data) {
    console.log(err, data);
  });
},

  render: function() {

    return (
      <View style={styles.container}>
        <Camera
              ref="cam"
              style={styles.container}
              onBarCodeRead={this._onBarCodeRead}
              type={this.state.cameraType}
            >
            <TouchableHighlight onPress={this._switchCamera}>
              <Text>The old switcheroo</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._takePicture}>
              <Text>Take Picture</Text>
            </TouchableHighlight>
            <TouchableHighlight
            style={styles.wrapper}
            onPress={this._reqPer}>
            <View style={styles.button}>
              <Text>Vibrate</Text>
            </View>
          </TouchableHighlight>
          <View>
      <TouchableHighlight onPress={this._showPermissions}>
        <Text>Show enabled permissions</Text>
      </TouchableHighlight>
      <Text>
{JSON.stringify(this.state.permissions)}
      </Text>
    </View>
            </Camera>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
   borderRadius: 5,
   marginBottom: 5,
 },
  wrapper2: {
},
slide1: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#9DD6EB',
},
slide2: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#97CAE5',
},
slide3: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#92BBD9',
},
text: {
 color: '#fff',
 fontSize: 30,
 fontWeight: 'bold',
},
 button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
