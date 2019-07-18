/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View, StatusBar
} from 'react-native';
import NumberList from './components/NumberList'
import RecursiveFunction from './components/RecursiveFunction';
//import BestList from './components/BestList';
import NumberLinkedList from './components/NumberLinkedList';
import List from './components/List';
const App = () => {
  return (
    <View>
      {/* <RecursiveFunction /> */}
      {/* <NumberList /> */}
      {/* <NumberLinkedList /> */}
      <List />
      {/* <BestList /> */}
    </View>
  )
};

export default App;
