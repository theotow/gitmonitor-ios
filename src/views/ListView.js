import React, { PropTypes } from 'react-native';
import { connect } from 'react-redux/native';

import Header from '../components/Header';
import Button from '../components/Button';
import Camera from '../components/Camera';
import ItemList from '../components/ItemList';

import * as RepoActions from '../actions/RepoActions'


let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});


function mapStateToProps(state) {
  return {
    repos: state.repos,
		settings: state.settings
  }
}

class ListView extends Component {

  _goQr(){
    this.props.navigator.replace({name: 'QrView'});
  }

  _goSettings(){
    this.props.navigator.replace({name: 'SettingsView'});
  }

  _toggleRepo(id){
    this.props.dispatch(RepoActions.toggleItem(id));
  }

	componentWillMount() {
		if(this.props.settings.userId !== null &&
			 this.props.settings.token !== null){
			 this.props.dispatch(RepoActions.getList(this.props.settings.userId));
		}
	}

  render() {

    const {
      props: {
        repos
      },
      _toggleRepo,
      _goSettings,
      _goQr
    } = this

    return (
      <View style={styles.container}>
        <ItemList items={repos.repos} clickHandler={_toggleRepo.bind(this)} />
        <Header hideSettings={false} goSettings={_goSettings.bind(this)} />
        <Button
          image={require('image!Scanbutton')}
          style={styles.btnLeft}
          onClick={_goQr.bind(this)} />
      </View>
    )
  }
}

ListView.propTypes = {
  repos: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ListView)
