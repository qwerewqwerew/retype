# 2. 기본문법 <!-- omit in toc -->

### 목차 <!-- omit in toc -->

- [1. 기본문법](#1-기본문법)
	- [1.1. 변수](#11-변수)
		- [1.1.1. 예제 **선언과 할당** \[01\]](#111-예제-선언과-할당-01)
		- [1.1.2. 예제 \[02\] 나이계산 프로그램 만들기](#112-예제-02-나이계산-프로그램-만들기)
	- [1.2. 자료형](#12-자료형)
		- [1.2.1. 개요](#121-개요)
		- [1.2.2. 종류](#122-종류)
		- [1.2.3. 원시형](#123-원시형)
			- [1.2.3.1. 예제\[03\]](#1231-예제03)
		- [1.2.4. 참조형 🔗ppt](#124-참조형-ppt)
			- [1.2.4.1. 예제 \[04\]](#1241-예제-04)
	- [1.3. 연산자](#13-연산자)

---

## 1. 기본문법

### 1.1. 변수

![](https://user-images.githubusercontent.com/59301948/262992819-7156ad7e-3bd9-4942-8044-2bbbba9fd9ce.png)

<aside style="border:1px solid #ddd; padding:2rem; background:#ebebeb">

    ✅ 변수(상수)란? 데이터(값)를 저장 할 수 있는 메모리 공간

    - 변하는 값은 변수 `var, let`
    - 변하지 않는 값은 상수 `const`
    -

    ✅ 변수명 규칙

    - 영문,숫자, 일부 특수문자($,\_)만 포함
    - 첫 글자로는 $,\_,영문자만 사용가능
    - 한글 사용불가
    - 의미에 맞는 이름으로 사용
    - 소문자로 시작
    - 기본 this, with(상수), document,window,screen, location등등 자바스크립트에서 사용하는 단어(예약어)를 사용불가

    ✅ 변수 사용 이유

    - 변수를 쓰는 이유는 코드의 재활용성을 높여준다.

</aside>

#### 1.1.1. 예제 **선언과 할당** [01]
```js
var currentYear; //올해 연도의 변수 선언
var name; // 이름의 변수 선언
var age; // 나이의 변수 선언
var currentYear, name, age; //한번에 선언

//선언후 할당하기
var frontend;
frontend = '김망고';

//선언과 할당을 동시에 하기
var variable = '변수';
```

#### 1.1.2. 예제 [02] 나이계산 프로그램 만들기

[문제](./script/age.html)

[정답](./script/age-result.html)

+++문제
```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>나이 계산하기</title>
	</head>
	<body></body>
</html>
```
+++해설
```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>나이 계산하기</title>
	</head>
	<body>
		<script>
			var currentYear = 2021;
			var birthYear;
			var age;
			birthYear = prompt('태어난 연도를 입력하세요. (YYYY)', '');
			age = currentYear - birthYear + 1;
			document.write(currentYear + '년 현재<br>');
			document.write(birthYear + '년에 태어난 사람의 나이는 ' + age + '세입니다.');
		</script>
	</body>
</html>
```
+++




### 1.2. 자료형

#### 1.2.1. 개요

  <aside style='border:1px solid #ddd; padding:2rem;'>

🚩 자료형이란?

1. 자료(data): 컴퓨터에서 처리할수 있는 모든 것

1. 자료형(data type): 자료를 형태별로 분류해 놓은것

  <img src="https://user-images.githubusercontent.com/59301948/263288313-7165bdd5-a33b-4628-beb4-ffdb39024811.png">

  </aside>

#### 1.2.2. 종류

| 종류            | 자료형    | 설명                                                                                               | 예시                                           |
| --------------- | --------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 기본(원시) 유형 | Number    | 숫자를 나타내는 데이터 타입. 정수 및 부동소수점 숫자를 포함.                                       | `var num = 123;`                               |
| --------------- | String    | 문자열을 나타내는 데이터 타입. 0개 이상의 16비트 유니코드 문자로 구성.                             | `var str = "Hello World";`                     |
| --------------- | Boolean   | 논리적인 값을 나타내며 `true`와 `false` 두 가지 값을 가짐.                                         | `var isTrue = false;`                          |
| 복합(참조) 유형 | Object    | JavaScript의 객체를 나타냄. 객체는 이름과 값으로 구성된 프로퍼티들의 집합.                         | `var obj = {name: "John", age: 30};`           |
| ---             | Array     | 순서가 있는 요소들의 집합을 나타냄. 배열 요소에 접근하는 것은 대괄호([])를 사용하여 인덱스로 접근. | `var arr = [1, 2, 3];`                         |
| ---             | Function  | 실행 가능한 코드 블록을 가지며, 기능을 반복해서 사용할 수 있음.                                    | `function sayHello() { alert('Hello!'); }`     |
| 특수 유형       | undefined | 변수가 선언되었으나 초기화되지 않았을 때의 값.                                                     | `var x; console.log(x);  // 출력: undefined`   |
| ---             | null      | 값이 없음을 의미. 변수에 명시적으로 할당해 사용.                                                   | `var y = null; console.log(y);  // 출력: null` |

#### 1.2.3. 원시형

> `typeof` : 자료형을 확인하는 단항 연산자와 함께 알아보자

##### 1.2.3.1. 예제[03]

```js
//number
let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log('sum:', sum, typeof sum);

//string
let str1 = '1';
let str2 = '2';
let para = str1 + str2;
console.log('para:', para, typeof para);

//boolean
let fact = true;
let lie = false;
console.log('fact:', fact, typeof fact);

//null
let temp = null;
console.log('temp:', temp, typeof temp);

//undefined
let noName;
console.log('noName:', noName, typeof noName);
```

#### 1.2.4. 참조형 [🔗ppt](../ppt/2.pdf)


원시형과 참조형의 차이는 쉽게 아래처럼 값을 여러개 나누어 저장할수 있다는 것에 있다.

> ![alt](https://user-images.githubusercontent.com/59301948/263474834-522f5912-4eb3-47b3-8faf-bdd22eb461eb.png)
>
> ▲ 원시타입은 한개의 물건을 저장하는 수납박스
>
> ![alt](https://user-images.githubusercontent.com/59301948/263474885-7d02961d-ec30-4c29-93c8-2c3eec89b32d.png)
>
> ▲ 참조타입은 한번에 여러개의 물건을 저장하는 수납박스이다

<aside style='border:1px solid #ddd; padding:1rem; white-space:pre-wrap;background:#00bcd412;'>
<h4>배열 다루기</h4>

	• 배열 생성하기: [요소, 요소, 요소, … , 요소]

	•  배열 요소에 접근하기: 배열[인덱스]

	•  배열 요소 개수 확인하기: 배열.length

	•  배열 뒷부분에 요소 추가하기: 배열.push(요소)

	•  배열 특정 위치에 요소 추가하기: 배열.splice(인덱스, 0, 요소)

	•  배열 요소 제거하기:

		•  인덱스로 제거하기: 배열.splice( 인덱스, 제거할 요소의 개수)

		•  값으로 요소 제거하기: const 인덱스 = 배열.indexOf(요소)

		•  배열.splice(인덱스, 1)

</aside>

##### 1.2.4.1. 예제 [04]

```js
//Object
let person = {
	name: 'mimi',
	age: 20,
	city: 'seoul',
};
console.log(person);

//Array
let zoo=['koala','cat','dog'];
console.log(zoo[0])

let arr = [1, 2, 3, 4, 5];
console.log(arr);


//function
function addNums(num1, num2) {
	return num1 + num2;
}
console.log(addNums(5, 10));
```
---

### 1.3. 연산자

<aside style='border:1px solid #ddd; padding:1rem; white-space:pre-wrap;background:#00bcd412;'>
연산자란? 프로그램에서 특정한 동작을 하도록 지시하는 기호.

프로그래밍에서 연산이란 사칙연산은 물론 문자열을 연결해서 새로운 문자열을 만들고 값의 크기를 비교하는 등의 여러가지 동작을 의미한다.
이런 연산을 지시하는 기호가 연산자이다.
</aside>
