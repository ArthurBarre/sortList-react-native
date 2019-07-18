import React from 'react'; import { View } from 'react-native';
class NewList extends React.Component { render() { return (<View></View>) } } export default NewList;

const n = 3;
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
    var randomNumber = i;
  }
  if (n > 0) return node(randomNumber, generateList(n - 1));
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
// var nb=count(list)
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
function dup(p) {
  if (!p) {
    return p = oldP;
  } else {
    return node(head(p), dup(tail(p)))
  }
}
function append(p, a) {
  if (!p) {
    return node(a, null)
  }
  else {
    node(head(p), append(tail(p), a))
  }
}
var a = 1;
var p = generateList(n);
const oldP = p
//console.log('p: ', p);
var q = generateList(n + 10)
//console.log('q: ', q)
var concVal = conc(p, q)
console.log('concVal: ', concVal);
var dupVal = dup(p)
console.log('dupVal: ', dupVal);
var appendVal = append(p, a)
console.log('appendVal : ' + appendVal)
