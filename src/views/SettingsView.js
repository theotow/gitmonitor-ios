import React from 'react-native'
import { connect } from 'react-redux/native'
import t from 'tcomb-form-native'
const Form = t.form.Form

import Header from '../components/Header'
import Button from '../components/Button'
import Camera from '../components/Camera'
import ItemList from '../components/ItemList'

import stylesheetForm from '../utils/stylesForm'

import * as SettingsActions from '../actions/SettingActions'
import { ROUTER } from '../constants'

let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  StyleSheet
} = React

var styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#FFF147',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  view: {
    top: 78,
    bottom: 70,
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 20
  },
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

const SettingsForm = t.struct({
  endpoint: t.String
});

class SettingsView extends Component {

  constructor(props){
    super(props)
    this.state = { endpoint: props.settings.endpoint }
  }

  _goList(){
    this.props.navigator.replace({name: ROUTER.LIST})
  }

  _change(endpoint){
     this.setState({ ...endpoint })
  }

  _send(){
    this.props.dispatch(SettingsActions.signup()).then(function(){
      this.props.dispatch(SettingsActions.changeEndpoint(this.state.endpoint || this.props.settings.endpoint))
    }.bind(this))
  }

  render() {

    const {
      props: {
        settings
      },
      _qrScan,
      _change,
      _send
    } = this

    return (
      <View style={styles.container}>
        <Header hideSettings={true} />
        <View style={styles.view}>
          <Text>{this.props.endpoint}</Text>
          <Form
            ref="form"
            type={SettingsForm}
            value={this.state}
            onChange={_change.bind(this)}
            options={{stylesheet: stylesheetForm}}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={_send.bind(this)} activeOpacity={0.5}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <Button
          left={true}
          image={require('image!Xbutton')}
          style={styles.btnLeft} onClick={this._goList.bind(this)} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(SettingsView)
