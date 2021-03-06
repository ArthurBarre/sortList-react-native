import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const NUMBER_TO_GENERATE = 100;
const RANGE = 100;

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
function node(data, next, prev) {
  this.data = data;
  this.next = next;
  this.prev = prev;
}
LinkedList.prototype.addNodeToTail = function (data) {
  const newNode = new node(data, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

class NumbersList extends React.Component {
  constructor(props) {
    super(props);
    this.numbersList = [];
    this.list = new LinkedList();
    this.swapped = Boolean;
  }

  state = {
    numbers: [],
    linkedList: {}
  }

  generateNumbers() {
    this.numbersList = [];
    for (let i = 0; i < NUMBER_TO_GENERATE; i++) {
      let randomNumber = Math.floor(Math.random() * (RANGE))
      this.numbersList.push({ 'id': i, 'number': randomNumber })
      // this.list.addNodeToTail(randomNumber)
      // this.list.length++
    }
    this.setState({ numbers: this.numbersList })
    // this.setState({ numbers: this.list })
    // console.log(this.list)
    // console.log(this.list.length)
  }

  sortByBubble = () => {
    for (let end = this.numbersList.length - 1; end > 0; end--) {
      let swapped = false;
      for (let j = 0; j < end; j++) {
        if (this.numbersList[j].number > this.numbersList[j + 1].number) {
          swapped = true;
          let temp = this.numbersList[j];
          this.numbersList[j] = this.numbersList[j + 1]
          this.numbersList[j + 1] = temp;
        }
      }
      if (swapped == false) return
    }
  }

  sortByBubbleInLL = () => {
    for (let end = this.list.length - 1; end > 0; end--) {
      let swapped = false;
      for (let j = 0; j < end; j++) {
        if (this.list[j].next > this.list[j + 1].next) {
          swapped = true;
          let temp = this.list[j];
          this.list[j] = this.list[j + 1]
          this.list[j + 1] = temp;
        }
      }
      if (swapped == false) return
    }
  }

  insertionSort = () => {
    for (let i = 1; i < this.numbersList.length; i++) {
      let keyNumber = this.numbersList[i].number;
      let key = this.numbersList[i]
      let j = i - 1;
      while (j >= 0 && this.numbersList[j].number > keyNumber) {
        this.numbersList[j + 1] = this.numbersList[j];
        this.numbersList[j] = key;
        j = j - 1;
      }
      //      this.numbersList[j + 1] = key;
    }
  };

  pressSortByBubble() {
    this.sortByBubble()
    //this.sortByBubbleLL()
    this.setState({ numbers: this.numbersList })
    //this.setState({ numbers: this.list })
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
        {/* <ScrollView>
          {
            this.state.numbers.map((item, index) => (
              <View key={item.id} style={styles.item}>
                <Text style={styles.itemIn}>{item.number}</Text>
              </View>
            ))
          }
        </ScrollView> */}
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
    padding: 20,
    margin: 2,
    flex: 1,
    backgroundColor: '#f70147'
  },
  itemIn: {
    color: "#0e0047",
    fontSize: 20,
    alignSelf: 'center',

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

