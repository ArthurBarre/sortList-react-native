import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function LinkedList() '{
var length = 0;
var head = null;

var Node = function (data) {
  this.data = data;
  this.next = null;
};
this.size = function () {
  console.log('------------------------------------');
  console.log(length);
  console.log('------------------------------------');;
}
this.head = function () {
  return head;
}

this.add = function (data) {
  var node = new Node(data);
  //si la liste est vide on place le premier add au début de la liste
  if (head === null) {
    head = node
    //sinon on  parcourt la liste jusqu'a trouver le premier el qui n' pas de next 
  } else {
    var currentNode = head
    //tant qu'un el de la liste a un "next" on continue de parcourir 
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node;
  }
  length++;
};

console.log
  // this.remove = (data) => {
  //   var currentNode = head;
  //   var previousNode;
  //   if (currentNode.data === data) {
  //     head = currentNode.next
  //   } else {
  //     while (currentNode.data !== data) {

  //     }
  //   }
  //   length--;
  // };
}

// var test = new LinkedList;
// test.add(12)

class ListAlgo extends React.Component {
  constructor() {
    this.conga = new LinkedList();
  }

  componentDidMount() {
    this.conga.add(1223)
    this.conga.size()

  }

  render() {
    return (
      <View>
        <Text>
          Hey
        </Text>
      </View>
    )
  }
}
export default ListAlgo;