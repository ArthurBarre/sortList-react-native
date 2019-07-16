
import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';


class RecursiveFunction extends React.Component {
  constructor() {
    super();
    this.numberReturn = 1;
  }
  state = {
    inputNumber: null,
    finalResult: null,
  }

  fact(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    this.setState({ finalResult: result })
  }
  recursiveFact(n) {
    if (n <= 1) return 1
    return n * this.recursiveFact(n - 1)
  }

  betterRecursiveFact() {
    var number = this.recursiveFact(this.state.inputNumber);
    this.setState({ finalResult: number })
  }

  render() {
    return (
      <View style={styles.margin}>
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(inputNumber) => this.setState({ inputNumber })}
          />
          <Button title="Update number"
            onPress={() => this.fact(this.state.inputNumber)}
          ></Button>
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 20 }}>Factorielle de {this.state.inputNumber} =  {this.state.finalResult}</Text>
        </View>

        <View style={styles.margin}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(inputNumber) => this.setState({ inputNumber })}
          />
          <Button title="Update number with recursive function"
            onPress={() => this.betterRecursiveFact(this.state.inputNumber)}
          ></Button>
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 20 }}>Factorielle de {this.state.inputNumber} =  {this.state.finalResult}</Text>
        </View>
      </View >
    )
  }
}
export default RecursiveFunction;

const styles = StyleSheet.create({
  margin: {
    marginTop: 150,
    marginBottom: 15,
  }
})