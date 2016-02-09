import React, { Component, Navigator, AlertIOS, PushNotificationIOS } from 'react-native'
import RemotePushIOS from 'react-native-remote-push'
import { connect } from 'react-redux/native';

import * as SettingsActions from '../actions/SettingActions'
import * as RepoActions from '../actions/RepoActions'
import Router from '../components/Router'
import { SettingsConst } from '../reducer/Settings'

// function *hello() {
// }

class App extends Component {

  componentWillMount() {
    let that = this;

    // init store
    this.props.dispatch(SettingsActions.readStore()).then(function(){
      // trigger dialog for permission
      RemotePushIOS.requestPermissions(function(err, data) {})
    })

    // get token
    PushNotificationIOS.addEventListener('register', function(devicetoken){
     that.props.dispatch(SettingsActions.setToken(devicetoken))
     if(that.props.settings.userId !== null &&
        that.props.settings.token !== null){
          that.props.dispatch(RepoActions.getList(that.props.settings.userId));
     }else{
       that.props.dispatch(SettingsActions.signup()).then(function(){
         that.props.dispatch(RepoActions.getList(that.props.settings.userId));
       }).catch(() => {
         alert('signup error')
       })
     }
    })

    // PushNotificationIOS.addEventListener('notification', this._onNotification)
  }

  _onNotification(notification) {
      // TODO: handle inline notifications
   }

  render() {
    return (
      <Navigator
          initialRoute={{name: 'ListView'}}
          renderScene={Router}
          configureScene={Router.configureScene}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(App)
