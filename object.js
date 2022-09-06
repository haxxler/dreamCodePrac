// Objects
// one of the Javascripts' data types.
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instances of Object
// object = {key : value} 오브젝트는 key, value의 집합체이다.

// 1. Literals and Properties(변수)
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = 'haxx';
const age = 4;
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const haxx = {name: 'haxx', age: 39};
print(haxx);

// runtime: 프로그램이 동작하고 있을 때
// dynamically typed language
// can add properties later
haxx.hasJob = true;
console.log(haxx);

// can delete properties later
delete haxx.hasJob;
console.log(haxx);

// 2. Computed properties
console.log(haxx.name);
// 어떤 키가 필요한지 모를 때 즉, 런타임에 결정될 때 computed 사용
console.log(haxx['name']);
haxx['hasJob'] = true;
console.log(haxx.hasJob);

function printVal1(obj, key) {
  console.log(obj.key); // obj에 key라는 프로퍼티는 먼저 정의되지 않았으므로 
}

function printVal2(obj, key) {
  // 여기 key라는 변수안에 실제 '키'값이 따옴표 안에 들어갈 것이므로
  console.log(obj[key]);
}
// 전달인자로 key를 전달할 때는 항상 string 타입으로 전달할 것
printVal1(haxx, 'name');
printVal2(haxx, 'name');

// 3. Property value shorthand
const person1 =  {name: 'bob', age: 2};
const person2 =  {name: 'steve', age: 3};
const person3 =  {name: 'dave', age: 4};
const person4 =  {name: 'gigson', age: 5};

// 원래 클래스 없었을 때는 이렇게 함수에서 객체를 반환하도록 만들었고,
function makePerson(name, age, sex) {
  return {
    name,
    age,
    sex
  };
}
const mySon = makePerson('theo', 7, 'male');
console.log(mySon.name);

// 4. Constructor Function
// 이렇게 다른 계산을하지 않고 순수하게 오브젝트만 생성하는 함수는 대문자로 시작하는 함수로 만들고
function Person(name, age) {
  // this = { }; 객체를 의미하는 중괄호가 this
  this.name = name;
  this.age = age;
  // return this; 가 생략된 것
}
const myDaughter = new Person('uno', 5); // 클래스 인스턴스 생성하는 것처럼
console.log(myDaughter.name);

// 5. in operator: property exitence check (key in obj)
console.log('name' in haxx);
console.log('age' in haxx);
console.log('sex' in haxx);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in mySon) {
  console.log(key);
}

// for (value of iterable)
const arr = [1, 2, 3, 4, 5];
for (val of arr) {
  console.log(val);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = {name: 'haxx', age: 20};
const user2 = user; // 포인터처럼 같은 주소를 바라보는 꼴
user2.name = 'hacker'; // user2의 이름을 변경한다는 것은 같은 주소를 바라보는 모든 객체의 이름이 변하는 것
console.log(user.name);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 들어가는 인자가 앞의 값을 덮어씌움
console.log(mixed.color);
console.log(mixed.size);