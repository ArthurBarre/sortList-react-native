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
import BestList from './components/BestList'
const App = () => {
  return (
    <View>
      {/* <RecursiveFunction /> */}
      <NumberList />
      {/* <BestList /> */}
    </View>
  )
};

export default App;
