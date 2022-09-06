'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index postion
const fruits =['apple', 'banana', 'cherry' ];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i ++) {
  console.log(fruits[i]);
}
console.log('');
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
console.log('');
// c. forEach
// 1) 기본적인 형태
fruits.forEach( function(fruit, index, array) {
  console.log(`${index} : ${fruit}`);
  console.log(array[index]);
})
// 2) 축약형
fruits.forEach((fruit,index) => console.log(`${index} : ${fruit}`));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('lemon', 'orange');;
console.log(fruits);
// pop: remove an item from the end
fruits.pop('orange');
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('melon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift('melon');
console.log(fruits);

// note!! unshfit and shift are slower than pop, push
// 배열의 앞에 데이터를 넣고 빼는 과정에서 진체 데이터가 움직여야 하므로

// splice: remove an item by index position
fruits.push('tomato');
console.log(fruits);
const spliced = fruits.splice(1, 3);
console.log(fruits);
fruits.push('banana');
fruits.push('cherry');

const spl_added = fruits.splice(1, 2, 'blueberry', 'watermelon' );
console.log(fruits);
console.log(spl_added);

// concat: combine two arrays
const fruits_ = ['kiwi', 'mango'];
const newFruits = fruits.concat(fruits_);
console.log(newFruits);

// 5. Searching
// indexOf: find the index 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('blueberry'));

// includes
console.log(fruits.includes('cherry'));

// lastIndexOf
fruits.push('blueberry');
console.log(fruits.indexOf('blueberry'));
console.log(fruits.lastIndexOf('blueberry'));
