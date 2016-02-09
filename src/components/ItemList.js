import React from 'react-native';
import _ from 'lodash';
import Item from './Item';

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

var stylesRaw = {
  scrollView: {
    top: 78,
    bottom: 70,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  unpushed: {
    backgroundColor: 'black',
    paddingBottom: 20
  },
  noRepos: {
    padding: 20
  },
  noReposTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Lato'
  }
};
var styles = StyleSheet.create(stylesRaw)

// TODO: https://github.com/jsdf/react-native-refreshable-listview

export default class ItemList extends Component {

  _pushedItems(items){
      return _.filter(items, {isClean: true});
  }

  _hidePad(rule, style){
    if(!rule) return style
    return _.extend({}, _.omit(style, 'paddingBottom'))
  }

  _unPushedItems(items){
      return _.filter(items, {isClean: false}).map(function(item){
        return {
          ...item,
          reversed: true
        }
      });
  }

  _mapItems(items, clickHandler){
    let that = this;
    return _.map(items, (item, key) => {
        return <Item
          key={key}
          author={item.author}
          message={item.message}
          reversed={item.reversed}
          open={item.open}
          id={item.id}
          clickHandler={clickHandler}
          status={item.status}
          branch={item.branch}
          branches={item.branches}
          name={item.name} />
    });
  }

  render() {

    const {
      props: {
        items,
        clickHandler
      },
      _pushedItems,
      _unPushedItems,
      _hidePad,
      _mapItems
    } = this;
    let unpushedItems = _unPushedItems(items);
    let pushedItems = _pushedItems(items);

    return (
      <ScrollView
       automaticallyAdjustContentInsets={false}
       scrollEventThrottle={200}
       style={styles.scrollView}>
       {(unpushedItems.length > 0 || pushedItems.length > 0)
       ? <View>
         <View style={_hidePad((unpushedItems.length === 0), stylesRaw.unpushed)}>
           {_mapItems(unpushedItems, clickHandler)}
         </View>
         {_mapItems(pushedItems, clickHandler)}
        </View>
       : <View style={styles.noRepos}><Text style={styles.noReposTxt}>You didnt add any Repo yet :(</Text></View>
       }
     </ScrollView>
    );
  }
}
