import React from 'react-native'
import { connect } from 'react-redux/native'

import Header from '../components/Header'
import Button from '../components/Button'
import Camera from '../components/Camera'
import ItemList from '../components/ItemList'

import * as RepoActions from '../actions/RepoActions'
import * as utils from '../utils/api'
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

class QrView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checking: false
    }
  }

  _goList(){
    this.props.navigator.replace({name: ROUTER.LIST})
  }

  _qrScan(repoId){
    let that = this;

    // kill if already processing
    if(this.state.checking || !repoId || !repoId.data) return;

    this.setState({checking: true})
    utils.link(
      this.props.settings.endpoint,
      this.props.settings.userId, repoId.data).then((data) => {
      that.setState({checking: false})
      that._goList()
    }).catch(() => {
      alert('linking failed')
      that.setState({checking: false})
    })
  }

  render() {

    const {
      _qrScan
    } = this

    return (
      <View style={styles.container}>
        <Camera onScan={_qrScan.bind(this)} />
        <Header hideSettings={true} />
        <Button
          left={true}
          image={require('image!Xbutton')}
          style={styles.btnLeft} onClick={this._goList.bind(this)} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(QrView)
