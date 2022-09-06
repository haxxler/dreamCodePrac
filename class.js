'use strict';
// Object-oriented programming
// class: template
// object: instatnce of class
// JavaScript classes
//  - introduced in ES6
//  - syntatical sugar over prototype-based inheritance

// 1. Class declatations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  //methods
  spaeak() {
    console.log(`${this.name}: hello!`);
  }
}

const haxx = new Person('haxx', 39);
console.log(haxx.name);
console.log(haxx.age);
haxx.spaeak();

// Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastnName = lastName;
    this.age = age;
  }

  get age() { // 값을 리턴
    return this._age;
  }

  set age(value) { // 값을 설정하므로 value를 받아와야 함
    if (value < 0) {
      throw Error('age can not be negative');
    }
    
    this._age = value;
  }

}

const user1 = new User('Steve', 'Job', 10);
console.log(user1.age);

// Fields (public, private)
// Too soon!

class Experiment {
  publicField = 2;
  #privateFeild = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 클래스 외부에서는 값을 읽을수도, 변경할 수도 없음

// 4. Static properties and methods 
// Too soon!
class Article {
  // 클래스가 갖고 있는 고유한  fields
  static publisher = 'Haxxler';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  // 클래스가 갖고 있는 고유한 method
  static printpublisher() {
    console.log(Article.publisher);
  }
} 

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); 따라서 인스턴스에서 스태틱 필드 호출할 수 없음
console.log(Article.publisher);
Article.printpublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// Shape의 모득 속성과 메소드를 상속받는다.
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

// 다형성(polymorphism)
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('symbol');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 10, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class chechkingL: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(rectangle instanceof Object);



