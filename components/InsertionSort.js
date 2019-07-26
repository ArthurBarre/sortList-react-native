// import React from 'react'; import { View } from 'react-native';
// class Test extends React.Component { render() { return (<View></View>) } } export default Test;

const RANGE = 10;
const n = 10;
//
function generateList(n) {
  let randomNumber = Math.floor(Math.random() * (RANGE));
  if (n > 0) return node(randomNumber, generateList(n - 1));
  else return null;
}
//
function node(value, next) {
  return { value: value, next: next };
}
function head(node) {
  if (node) return node.value;
}
function tail(node) {
  if (node) return node.next;
}
//
const arr = [1, 2, 4, 5, 6, 3, 4.5, 3, 5, 6];
const obj = { "value": 1, "next": { "value": 2, "next": { "value": 3, "next": null } } }

// const insertionSort = arr => {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let el = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > el; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = el;
//   }
//   return arr;
// };
const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let current = arr[i];
    let j;
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current;
  }
  return arr;
}
var test = insertionSort(arr);
console.log(test)