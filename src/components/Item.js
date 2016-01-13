import React from 'react-native';
import { trimBranch } from '../utils/helper';

let {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Component,
  AlertIOS,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  itemWrap: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    flex: 1,
  },
  itemWrapInner: {
    position: 'relative',
    overflow: 'hidden'
  },
  branch: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#8D8D8D'
  },
  branchTxt: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1.2,
    color: 'white',
    padding: 3
  },
  boxWrap: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  box: {
    backgroundColor: 'black',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 10
  },
  boxTxt: {
    color: 'white',
    fontFamily: 'Droid Sans Mono',

  },
  item: {
    backgroundColor: '#FFF147',
    height: 60,
    borderWidth: 10,
    borderColor: '#FFF147',
            borderRadius: 10,
    flex: 1,
  },
  itemTxt: {
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    letterSpacing: 1.2,
  }
});

// TODO: make image changable with prop, left / right , make click prop

export default class ItemList extends Component {

  _onPressButton(){
    alert('register: ');
  }

  render() {

    const {
      repo
    } = this.props;

    return (
      <View style={styles.itemWrap}>
        <View style={styles.itemWrapInner}>
          <View style={styles.item}>
            <Text style={styles.itemTxt}>{repo.name}</Text>
          </View>
          <View style={styles.branch}>
            <Text style={styles.branchTxt}>{trimBranch(repo.branch)}</Text>
          </View>
          <View style={styles.boxWrap}>
            <View style={styles.box}>
              <Text style={styles.boxTxt}>dfddfd</Text>
                <Text style={styles.boxTxt}>dfddfd</Text>
                  <Text style={styles.boxTxt}>dfddfd</Text>
                    <Text style={styles.boxTxt}>dfddfd</Text>

            </View>
          </View>
        </View>
     </View>
    );
  }
}
