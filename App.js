/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
} from 'react-native';
import NumberList from './components/NumberList'
import RecursiveFunction from './components/RecursiveFunction'
const App = () => {
  return (
    <View>
      <NumberList />
      {/* <RecursiveFunction/> */}
    </View>
  )
};

export default App;
