<script src="http://10.208.7.35:8097"></script>
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

class NumbersList extends React.Component {
  constructor(props) {
    super(props)
    this.numbersArray = [];
    this.numbersToSort = [];
    this.newArray = [];
    this.swapped = Boolean
    this.numberToGenerate = 10
  }
  state = {
    numbers: []
  }


  generateNumbers() {
    this.numbers = [];
    this.numbersList = [];

    for (let i = 1; i < this.numberToGenerate + 1; i++) {
      var randomNumber = Math.floor(Math.random() * (this.numberToGenerate + 1))
      //this.numbers.push(randomNumber)
      this.numbersList.push({ 'id': i, 'number': randomNumber })
    }
    this.setState({ numbers: this.numbersList })
    //console.log('this.numbers: ', this.numbers);
  }

  sortByBubble = () => {
    this.swapped = false;
    let end = this.numbersList.length - 1
    for (let i = 0; i < end; i++) {
      if (this.numbersList[i].number > this.numbersList[i + 1].number) {
        this.swapped = true;
        let temp = this.numbersList[i];
        this.numbersList[i] = this.numbersList[i + 1]
        this.numbersList[i + 1] = temp;
      }
    }
    end--;
  }

  insertionSort = () => {
    for (let i = 1; i < this.numbersList.length; i++) {
      let keyNumber = this.numbersList[i].number;
      let key = this.numbersList[i]
      let j = i - 1;
      while (j >= 0 && this.numbersList[j].number > keyNumber) {
        this.numbersList[j + 1] = this.numbersList[j];
        j = j - 1;
      }
      this.numbersList[j + 1] = key;
    }
  };

  pressSortByBubble() {
    do {
      this.sortByBubble()
    }
    while (this.swapped)
    this.setState({ numbers: this.numbersList })
  }
  pressSortByInsertion() {
    this.insertionSort();
    this.setState({ numbers: this.numbersList })
  }
  componentDidMount() {
    this.generateNumbers();
  }

  render() {
    return (
      <View style={{ height: Dimensions.get('window').height * 0.95 + 20, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: "#0e0047", }}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonExt} onPress={() => { this.pressSortByBubble() }}>
            <Text style={styles.buttonIn2}>Sort By Bubble</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonExt} onPress={() => { this.pressSortByInsertion() }}>
            <Text style={styles.buttonIn2}>Sort By Insertion</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonExt2} onPress={() => { this.generateNumbers() }}>
          <Text style={styles.buttonIn2}>Generate New Numbers</Text>
        </TouchableOpacity>
        <ScrollView>
          {
            this.state.numbers.map((item, index) => (
              <View key={item.id} style={styles.item}>
                <Text style={styles.itemIn}>{item.number}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}
export default NumbersList;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    flex: 1,
    backgroundColor: '#f70147'
  },
  itemIn: {
    color: "#0e0047",
    fontSize: 20,
    alignSelf: 'center',
    paddingLeft: 100
  },
  buttons: {
    width: Dimensions.get('window').width,
    flexDirection: 'row'
  },
  buttonExt: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.05,
    backgroundColor: "#0e0047",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#f70147",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20
  },
  buttonExt2: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.05,
    backgroundColor: "#0e0047",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#f70147",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  buttonIn2: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'helvetica',
    color: "#f70147"
  }
})

