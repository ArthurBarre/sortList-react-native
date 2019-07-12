<script src="http://10.208.3.4:8097"></script>
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RecursiveFunction extends React.Component {

  fact() {
    let n = 10;
    let x = 1;
    for (let i = 0; i < n; i++) x *= i
    return x
  }
}
export default RecursiveFunction;