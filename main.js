
const hacker = {'name': 'haxx', 'age': 39}; 

// obj에 있는 key에 상응하는 값을 value를 받아오는 함수
 function printVal1(obj, key) {
	// 프로그램 작성 시에는 어떤 키값이 있는지 알 수가 없다.
	console.log(obj.key);
}
// 그래서 호출하면 undifined 값을 반환함.
printVal1(hacker, 'name');

// 동적으로 key에 관련된 값들을 받아와야 할 때 유용하게 쓸 수 있다.
function printVal2(obj, key) {
	console.log(obj[key]);
}
printVal2(hacker, 'age');

function makePerson(name, age) {
  return {
    'name': name,
    'age': age
  }
}

const a = makePerson('haxx', 30);
console.log(a.name)