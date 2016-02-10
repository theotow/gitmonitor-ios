import React from 'react-native';
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

class ListView extends Component {

  _goQr(){
    this.props.navigator.replace({name: 'QrView'});
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
      _toggleRepo
    } = this

    return (
      <View style={styles.container}>
        <ItemList items={repos.repos} clickHandler={_toggleRepo.bind(this)} />
        <Header />
        <Button
          image={require('image!Scanbutton')}
          style={styles.btnLeft}
          onClick={this._goQr.bind(this)} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
		settings: state.settings
  }
}

export default connect(mapStateToProps)(ListView)
