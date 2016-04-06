import React from 'react-native';
import _ from 'lodash';
import Item from './Item';
import { STYLE } from '../constants'

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

const styles = {
  scrollView: {
    top: 78,
    bottom: 70,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  unpushed: {
    backgroundColor: 'black',
    paddingBottom: STYLE.PADDING
  },
  icon: {
    height: 30,
    width: 30
  },
  loading: {
    flex: 1,
    padding: STYLE.PADDING,
    alignItems: 'center'
  },
  noRepos: {
    padding: STYLE.PADDING
  },
  noReposTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: STYLE.FONT_LATO
  }
};

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

  _list(){

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

    if(unpushedItems.length > 0 || pushedItems.length > 0){
      return (
        <View>
          <View style={_hidePad((unpushedItems.length === 0), styles.unpushed)}>
            {_mapItems(unpushedItems, clickHandler)}
          </View>
          {_mapItems(pushedItems, clickHandler)}
         </View>
      )
    }else{
      return <View style={styles.noRepos}><Text style={styles.noReposTxt}>You didnt add any Repo yet :(</Text></View>
    }
  }

  render() {

    return (
      <ScrollView
       automaticallyAdjustContentInsets={false}
       scrollEventThrottle={200}
       style={styles.scrollView}>
       {(!this.props.loading)
       ? this._list()
       : <View style={styles.loading}>
         <Image
          style={styles.icon}
          source={require('../assets/loader.gif')}
        />
      <Text style={styles.noReposTxt}>Updating repos...</Text>
       </View>
      }
     </ScrollView>
    );
  }
}
