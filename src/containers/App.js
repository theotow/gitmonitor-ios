import React, { Component, Navigator, AlertIOS, PushNotificationIOS } from 'react-native'
import RemotePushIOS from 'react-native-remote-push'
import { connect } from 'react-redux/native';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

import * as SettingsActions from '../actions/SettingActions'
import * as RepoActions from '../actions/RepoActions'
import Router from '../components/Router'
import { SettingsConst } from '../reducer/Settings'
import { ROUTER } from '../constants'

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

  componentDidMount() {
    this.setInterval(function(){
      if(this.props.settings.userId !== null &&
         that.props.settings.token !== null){
        this.props.dispatch(RepoActions.getList(this.props.settings.userId));
      }
    }.bind(this), 5000);
  }

  _onNotification(notification) {
      // TODO: handle inline notifications
   }

  render() {
    return (
      <Navigator
          initialRoute={{name: ROUTER.LIST}}
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

reactMixin(App.prototype, TimerMixin);

export default connect(mapStateToProps)(App)
