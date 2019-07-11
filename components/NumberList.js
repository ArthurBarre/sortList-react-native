<script src="http://10.208.7.35:8097"></script>
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

class NumbersList extends React.Component {
  constructor(props) {
    super(props)
    this.numbersArray = [];
    this.numbersToSort = [];
    this.newArray = []
  }
  state = {
    numbers: []
  }


  generateNumbers() {
    this.numbers = [];
    this.numbersList = [];

    for (let i = 1; i < 100; i++) {
      var randomNumber = Math.floor(Math.random() * (10000000000000 - 0 + 1)) + 0
      this.numbers.push(randomNumber)
      this.numbersList.push({ 'id': i, 'number': randomNumber })
    }
    this.setState({ numbers: this.numbersList })
    console.log('this.numbers: ', this.numbers);
  }

  sortByBubble = () => {
    let arrayLength = this.numbers.length;
    for (let i = 0; i < arrayLength; i++) {
      for (let j = 0; j < arrayLength; j++) {
        if (this.numbers[j] > this.numbers[j + 1]) {
          let tempValue = this.numbers[j];
          this.numbers[j] = this.numbers[j + 1]
          this.numbers[j + 1] = tempValue
        }
      }
    }
    var finalArr = [];
    for (let i = 0; i < 100; i++) {
      finalArr.push({ 'id': i, 'number': this.numbers[i] })
    }
    console.log('finalArr: ', finalArr);
    this.setState({ numbers: finalArr })
  }

  pressSort() {
    this.sortByBubble()
  }


  componentDidMount() {
    this.generateNumbers();
    //this.test()
    //console.log(this.state.numbers)
  }
  render() {
    return (
      <View style={{ height: Dimensions.get('window').height * 0.95 + 20, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: "#0e0047", }}>
        <TouchableOpacity style={styles.buttonExt} onPress={() => { this.pressSort() }}>
          <Text style={styles.buttonIn2}>Sort</Text>
        </TouchableOpacity>
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
  buttonExt: {
    width: Dimensions.get('window').width * 0.5,
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
    fontSize: 20,
    fontFamily: 'helvetica',
    color: "#f70147"
  }
})


// <script src="http://10.208.7.35:8097"></script>
// import React from 'react';
// import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

// class ScrollViewExample extends React.Component {
//   constructor(props) {
//     super(props)
//     this.numbersArray = [];
//     this.numbersToSort = []
//   }
//   state = {
//     numbers: []
//   }
//   generateNumbers() {
//     this.numbersArray = [];
//     var id = 0;
//     for (let i = 0; i < 101; i++) {
//       this.numbersArray.push({ 'id': id++, 'number': Math.floor(Math.random() * (100 - 0 + 1)) + 0 })
//     }
//     console.log('numbersArray: ', this.numbersArray);
//     this.numbersToSort = this.numbersArray;
//     this.setState({ numbers: this.numbersArray })
//     this.sortList()
//   }
//   sortList() {
//     console.log('SORT : ' + this.numbersToSort)
//     //console.log('numbersToSort: ', numbersToSort);
//     // for (let i = 0; i < numbersToSort.length; i++) {
//     //   if (numbersToSort[i] > numbersToSort[i + 1]) {
//     //     console.log(numbersToSort.join());
//     //     number.splice(i, i + 1, numbersToSort[i]);
//     //     console.log(numbersToSort.join());
//     //   }
//     // }
//     // this.setState({ numbers: numbersToSort })
//   }
//   componentDidMount() {
//     this.generateNumbers()
//     //console.log(this.state.numbers)
//   }
//   render() {
//     return (
//       <View style={{ height: Dimensions.get('window').height * 0.95 + 20, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: "#0e0047", }}>
//         <TouchableOpacity style={styles.buttonExt} onPress={() => { this.sortList() }}>
//           <Text style={styles.buttonIn}>Sort</Text>
//         </TouchableOpacity>
//         <ScrollView>
//           {
//             this.state.numbers.map((item, index) => (
//               <View key={item.id} style={styles.item}>
//                 <Text style={styles.itemIn}>{item.number}</Text>
//               </View>
//             ))
//           }
//         </ScrollView>
//       </View>
//     )
//   }
// }
// export default ScrollViewExample;

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 30,
//     margin: 2,
//     flex: 1,
//     backgroundColor: '#f70147'
//   },
//   itemIn: {
//     color: "#0e0047",
//     fontSize: 20,
//     alignSelf: 'center',
//     paddingLeft: 130
//   },
//   buttonExt: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').height * 0.05,
//     backgroundColor: "#0e0047",
//     borderRadius: 20,
//     borderWidth: 3,
//     borderColor: "#f70147",
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25
//   },
//   buttonIn: {
//     alignSelf: 'center',
//     fontSize: 20,
//     fontFamily: 'helvetica',
//     color: "#f70147"
//   }
// })