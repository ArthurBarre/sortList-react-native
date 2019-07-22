import React from 'react'; import { View } from 'react-native';
class NewList extends React.Component { render() { return (<View></View>) } } export default NewList;

const n = 10;
const RANGE = 10;
var length = 0

function node(value, next) {
  return { value: value, next: next };
}
function head(node) {
  if (node) return node.value;
}
function tail(node) {
  if (node) return node.next;
}
// function generateList(n) {
//   length = length + 1;
//   let randomNumber = Math.floor(Math.random() * (RANGE))
//   if (n > 0) return node(randomNumber, generateList(n - 1));
//   else return null;
// }
function generateList(n) {
  for (let i = 0; i < n; i++) {
    var number = i;
  }
  if (n > 0) return node(number, generateList(n - 1));
  else return null;
}

function print(node) {
  if (!node) console.log("end");
  else {
    //current node
    console.log(head(node));
    //recursive function with the next return element 
    print(tail(node));
  }
}
//
function count(node) {
  if (!node) return 0;
  return 1 + count(tail(node));
}
function sum(node) {
  if (!node) return 0;
  return head(node) + sum(tail(node));
}
//
function conc(p, q) {
  if (!p) {
    return q
  } else {
    return node(head(p), conc(tail(p), q))
  }
}
//
function dup(p) {
  if (!p) {
    return p;
  } else {
    return node(head(p), dup(tail(p)))
  }
}
//
function append(p, a) {
  if (!p) {
    return a
  }
  else {
    return node(head(p), append(tail(p), a))
  }
}
//
function appendAndSort(p, a) {
  if (p) {
    if (head(p) < a) {
      return node(a, p)
    }
    else {
      return node(head(p), appendAndSort(tail(p), a))
    }
  } else {
    return node(a, null)
  }
}

function convertObjToArr(obj) {
  let arr2 = [];
  while (obj != null) {
    arr2.push(head(obj))
    obj = tail(obj);
  }
  return arr2;
}

var arr2 = [];
function convertObjToArrRec(obj) {
  if (obj != null) {
    arr2.push(head(obj))
    convertObjToArrRec(tail(obj));
  }
  return arr2;
}
//
var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];
//
function convertArrayToList(arr) {
  var list = null;
  var index = 0;
  //
  while (index < arr.length) {
    list = node(arr[index], list);
    index++;
  }
  return list;
}
//
function convertArrayToListRec(arr) {
  var list = null;
  var index = 0;
  //
  if (index < arr.length) {
    list = node(arr[index], list);
    index++;
    convertArrayToListRec()
  }
  return list;
}
//

//list
var obj = { "value": 1, "next": { "value": 112, "next": { "value": 3, "next": { "value": 4, "next": { "value": 5, "next": null } } } } };
var p = generateList(n);
var q = generateList(n + 10);
//values
const a = 12;
const w = 4.5;
//concatenate function
var concVal = conc(p, q)
console.log('concVal: ', concVal);
//duplicate function 
var dupVal = dup(p)
console.log('dupVal: ', dupVal);
//append function
var appendVal = append(p, a);
console.log('appendVal: ', appendVal);
//append and sort function 
var appendAndSortVal = appendAndSort(p, w)
console.log('appendAndSortVal: ', appendAndSortVal);
//convert list to array
var arr2 = convertObjToArr(obj);
console.log('convert List to Array: ', arr2);
//
var arr2R = convertObjToArrRec(obj);
console.log('convert List to Array by recursive func: ', arr2R);
//convert array to list
var list2 = convertArrayToList(arr);
console.log('convertArrayToList: ', list2);