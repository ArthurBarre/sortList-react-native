<script src="http://localhost:8097"></script>
import React from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';


function LinkedList() {
  this.head = null;
  this.tail = null;
}
function node(data, next, prev) {
  this.data = data;
  this.next = next;
  this.prev = prev
}
// LinkedList.prototype.addNodeToHead = function (data) {
//   const newNode = new node(data, this.head, null)
//   if (this.head) this.head.prev = newNode
//   else this.tail = newNode
//   this.head = newNode;
// }
LinkedList.prototype.addNodeToTail = function (data) {
  const newNode = new node(data, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}
const list = new LinkedList();
//list.addNodeToHead('O');
list.addNodeToTail(1)
list.addNodeToTail(2)
list.addNodeToTail(3)
list.addNodeToTail(4)

console.log(list)

// function head(node) {
//   return node.data
// }
// function tail(node) {
//   if (node == null) {
//     return null
//   }
//   return node.next
// }


//console.log(LL);

class BestList extends React.Component {
  // constructor() {
  //   super()
  //   this.LL = new LinkedList;
  //   this.count = 0;
  // }
  // test() {
  //   this.count++;
  //   this.LL.add(this.count)
  //   console.log(this.LL)
  // }
  render() {
    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
        <TouchableOpacity style={{
          backgroundColor: '#DDDDDD',
          padding: 10, marginTop: 100
        }}
          onPress={() => { this.test() }}
        ><Text style={{ alignSelf: 'center' }}>Add item in Linked List</Text></TouchableOpacity>
      </View>
    )
  }
}
export default BestList;