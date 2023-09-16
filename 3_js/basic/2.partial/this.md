---
order: category
category:
  - javascript
  - partial
  - this
---
- [1. 개요](#1-개요)
	- [1.1. 전역 컨텍스트 또는 함수 컨텍스트에서의 this](#11-전역-컨텍스트-또는-함수-컨텍스트에서의-this)
	- [1.2. 메서드로서 호출될 때의 this](#12-메서드로서-호출될-때의-this)
	- [1.3. 생성자 함수에서의 this](#13-생성자-함수에서의-this)
	- [1.4. 명시적으로 컨텍스트 설정하기](#14-명시적으로-컨텍스트-설정하기)
	- [1.5. 화살표 함수와 'this'](#15-화살표-함수와-this)

# this <!-- omit in toc -->

## 1. 개요

> JavaScript에서 this 키워드는 실행 컨텍스트에 따라 다르게 바인딩됩니다. 즉, this가 가리키는 값은 그것이 호출된 상황에 따라 달라집니다.

### 1.1. 전역 컨텍스트 또는 함수 컨텍스트에서의 this

전역 스코프나 일반 함수 내부에서 this를 사용하면, 이는 전역 객체를 참조합니다. 웹 브라우저 환경에서 전역 객체는 window입니다.

```js #
console.log(this); // window
function test() {
	console.log(this); // window
}
test();
```

### 1.2. 메서드로서 호출될 때의 this

객체의 메서드 내부에서 this를 사용하면, 이는 해당 메서드를 호출한 객체를 참조합니다.

```js
const obj = {
	prop: 42,
	func: function () {
		return this.prop;
	},
};
console.log(obj.func()); // 42 (여기서 this는 obj를 가리킵니다.)
```

### 1.3. 생성자 함수에서의 this

생성자 함수 내부에서 this를 사용하면, 이는 새로 생성되어 반환되는 객체(instance)를 참조합니다.

```js #
function Person(name) {
	this.name = name;
}

const person = new Person('John');

console.log(person.name); // John (여기서 this는 새로 생성된 person 객체를 가리킵니다.)
```

### 1.4. 명시적으로 컨텍스트 설정하기

JavaScript에 내장된 call(), apply(), bind() 메소드들을 사용하여 명시적으로 함수나 메소드의 실행 컨텍스트(즉, 'this'가 가리키게 될 값)을 설정할 수 있습니다.

### 1.5. 화살표 함수와 'this'

화살표 함수(arrow function)은 자신만의 'this' 바인딩을 생성하지 않습니다. 대신 화살표 함수의 'this'값은 상위 범위(scope)의 'this'값을 상속받습니다.
