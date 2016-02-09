import React from 'react-native';
import { trimBranch } from '../utils/helper';
import _ from 'lodash';

let {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Component,
  AlertIOS,
  StyleSheet
} = React;

var stylesRaw = {
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
    paddingRight: 10
  },
  box: {
    backgroundColor: '#000000',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#000000',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10
  },
  boxTxt: {
    fontFamily: 'Droid Sans Mono',
    overflow: 'hidden',
    fontSize: 10,
    color: 'white',
    lineHeight: 12,
    height: 12
  },
  item: {
    backgroundColor: '#FFF147',
    height: 60,
    padding: 10,
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
}
var styles = StyleSheet.create(stylesRaw);

// TODO: make image changable with prop, left / right , make click prop

export default class ItemList extends Component {

  _allBranches(branches){
    var trimed = _.map(branches, function(branch){
      return trimBranch(branch)
    })
    return trimed.join(', ');
  }

  _getStyle(what, styles, yesNo){
    let extend = {};
    switch (what) {
      case 'box':
          let color = (yesNo) ? '#FFFFFF' : '#000000';
          _.extend(extend, styles, {
            backgroundColor: color,
            borderBottomColor: color
          })
      break;
      case 'boxTxt':
        _.extend(extend, styles, {
          color: (yesNo) ? 'black' : 'white'
        })
      break;
      case 'wrap':
        if(yesNo){
          _.extend(extend, _.omit(styles, 'height'))
        }else{
          _.extend(extend, styles, {
            height: 0
          })
        }
      break;
    }
    return extend;
  }

  render() {

    const {
      props: {
        name,
        branch,
        author,
        message,
        status,
        id,
        branches,
        reversed,
        clickHandler,
        open
      },
      _allBranches,
      _getStyle
    } = this;

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => clickHandler(id)}>
      <View style={styles.itemWrap}>
        <View style={styles.itemWrapInner}>
          <View style={styles.item}>
            <Text style={styles.itemTxt}>{name}</Text>
          </View>
          <View style={styles.branch}>
            <Text style={styles.branchTxt}>{trimBranch(branch)}</Text>
          </View>
          <View style={_getStyle('wrap', stylesRaw.boxWrap, open)}>
            <View style={_getStyle('box', stylesRaw.box, reversed)}>
              <Text style={_getStyle('boxTxt', stylesRaw.boxTxt, reversed)}>Author: {author}</Text>
              <Text style={_getStyle('boxTxt', stylesRaw.boxTxt, reversed)}>Commitmsg: {message}</Text>
              <Text style={_getStyle('boxTxt', stylesRaw.boxTxt, reversed)}>Status: Ahead {status.ahead} / Behind {status.behind} </Text>
              <Text style={_getStyle('boxTxt', stylesRaw.boxTxt, reversed)}>Branches: {_allBranches(branches)}</Text>
            </View>
          </View>
        </View>
     </View>
     </TouchableOpacity>
    );
  }
}
