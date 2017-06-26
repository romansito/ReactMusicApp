/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/IonIcons';

export default class PlatziMusic extends Component {

  render() {

    const image = 'https://www.google.com/search?q=coldplay&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiTtKmwpM3UAhVB-2MKHaXfA1MQ_AUIDCgD&biw=1437&bih=873&dpr=2#imgrc=_'
    const name = 'Cold Play'
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source = {{ uri: image}} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Icon name="rocket" size={30} color="#900" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingTop: 20,
    // flexWrap: 'wrap',
  },
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
    // backgroundColor: 'blue'
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
    // backgroundColor: 'blue'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
