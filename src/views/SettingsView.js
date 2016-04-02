import React from 'react-native'
import { connect } from 'react-redux/native'

import Header from '../components/Header'
import Button from '../components/Button'
import Camera from '../components/Camera'
import ItemList from '../components/ItemList'

import * as RepoActions from '../actions/RepoActions'
import * as utils from '../utils/api'

let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  StyleSheet
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

class SettingsView extends Component {

  _goList(){
    this.props.navigator.replace({name: 'ListView'})
  }

  render() {

    const {
      props: {
        settings
      },
      _qrScan,
      _goList
    } = this

    return (
      <View style={styles.container}>
        <Header hideSettings={true} />
        <Button
          left={true}
          image={require('image!Xbutton')}
          style={styles.btnLeft} onClick={_goList.bind(this)} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(SettingsView)
