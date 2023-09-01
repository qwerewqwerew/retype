# 2. 기본문법 <!-- omit in toc -->

### 목차 <!-- omit in toc -->

- [1. 변수](#1-변수)
	- [1.1. 예제 **선언과 할당** \[01\]](#11-예제-선언과-할당-01)
	- [1.2. 예제 \[02\] 나이계산 프로그램 만들기](#12-예제-02-나이계산-프로그램-만들기)
- [2. 자료형](#2-자료형)
	- [2.1. 개요](#21-개요)
	- [2.2. 종류](#22-종류)
	- [2.3. 원시형](#23-원시형)
		- [2.3.1. 예제\[03\]](#231-예제03)
	- [2.4. 참조형](#24-참조형)
		- [2.4.1. 예제 \[04\]](#241-예제-04)
- [3. 연산자](#3-연산자)
	- [3.1. 연산자의 종류](#31-연산자의-종류)
		- [3.1.1. 추가연산자(병합연산자 nullish)](#311-추가연산자병합연산자-nullish)
	- [3.2. 산술연산자](#32-산술연산자)
		- [3.2.1. 산술연산자의 기본활용 예제 \[05\]](#321-산술연산자의-기본활용-예제-05)
		- [3.2.2. 산술연산자의 자료형 활용예제 \[06\]](#322-산술연산자의-자료형-활용예제-06)
		- [3.2.3. 산술연산자의 자료형 활용예제 \[07\]](#323-산술연산자의-자료형-활용예제-07)
		- [3.2.4. 증가연산자예제 \[08\]](#324-증가연산자예제-08)
	- [3.3. 할당연산자](#33-할당연산자)
		- [3.3.1. 예제-\[08\]](#331-예제-08)
	- [3.4. 비교연산자](#34-비교연산자)
		- [3.4.1. 예제-\[09\]](#341-예제-09)
	- [3.5. 논리연산자](#35-논리연산자)
		- [3.5.1. 예제-\[10\]](#351-예제-10)
		- [3.5.2. 마무리문제-\[11\]](#352-마무리문제-11)
		- [3.5.3. 마무리문제-\[12\]](#353-마무리문제-12)
	- [3.6. 조건부연산자](#36-조건부연산자)
		- [3.6.1. 예제-\[13\]](#361-예제-13)
		- [3.6.2. 마무리문제-\[14\]](#362-마무리문제-14)
		- [3.6.3. 마무리문제-\[15\]](#363-마무리문제-15)
	- [3.7. 연산자의 우선순위](#37-연산자의-우선순위)
- [4. 제어문](#4-제어문)
	- [4.1. 조건문](#41-조건문)
		- [4.1.1. if-예제\[16\]](#411-if-예제16)
		- [4.1.2. if-예제\[17\]](#412-if-예제17)
		- [4.1.3. if-예제\[18\]](#413-if-예제18)
	- [4.2. 선택문](#42-선택문)
	- [4.3. 반복문](#43-반복문)

---

## 1. 기본문법 <!-- omit in toc -->

### 1. 변수

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

#### 1.1. 예제 **선언과 할당** [01]

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

#### 1.2. 예제 [02] 나이계산 프로그램 만들기

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

### 2. 자료형

#### 2.1. 개요

  <aside style='border:1px solid #ddd; padding:2rem;'>

🚩 자료형이란?

1. 자료(data): 컴퓨터에서 처리할수 있는 모든 것

1. 자료형(data type): 자료를 형태별로 분류해 놓은것

  <img src="https://user-images.githubusercontent.com/59301948/263288313-7165bdd5-a33b-4628-beb4-ffdb39024811.png">

  </aside>

#### 2.2. 종류

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

#### 2.3. 원시형

> `typeof` : 자료형을 확인하는 단항 연산자와 함께 알아보자

##### 2.3.1. 예제[03]

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

#### 2.4. 참조형

!!![🔗ppt](../ppt/2.pdf)

원시형과 참조형의 차이는 쉽게 아래처럼 값을 여러개 나누어 저장할수 있다는 것에 있다.

!!!

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

##### 2.4.1. 예제 [04]

```js
//Object
let person = {
	name: 'mimi',
	age: 20,
	city: 'seoul',
};
console.log(person);

//Array
let zoo = ['koala', 'cat', 'dog'];
console.log(zoo[0]);

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//function
function addNums(num1, num2) {
	return num1 + num2;
}
console.log(addNums(5, 10));
```

---

### 3. 연산자

!!! [🔗mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%EA%B4%80%EA%B3%84_%EC%97%B0%EC%82%B0%EC%9E%90)

연산자란? 프로그램에서 특정한 동작을 하도록 지시하는 기호.

프로그래밍에서 연산이란 사칙연산은 물론 문자열을 연결해서 새로운 문자열을 만들고 값의 크기를 비교하는 등의 여러가지 동작을 의미한다.
이런 연산을 지시하는 기호가 연산자이다.

산술,관계,할당,논리,부정,삼항,비트,단항,등이 있다.

!!!

#### 3.1. 연산자의 종류

| 연산자 유형 | 연산자                | 설명                                            |
| ----------- | --------------------- | ----------------------------------------------- | ---------------------- |
| 산술 연산자 | `+`                   | 덧셈                                            |
|             | `-`                   | 뺄셈                                            |
|             | `*`                   | 곱셈                                            |
|             | `/`                   | 나눗셈                                          |
|             | `%`                   | 나머지 계산                                     |
|             | `++`                  | 증가 (값에 1을 더함)                            |
|             | `--`                  | 감소 (값에서 1을 뺌)                            |
| 대입 연산자 | `=`                   | 값을 변수에 할당함                              |
|             | `+=`                  | 기존 값에 값을 더하고 결과를 변수에 할당함      |
|             | `-=`                  | 기존 값에서 값을 빼고 결과를 변수에 할당함      |
|             | `*=`                  | 기존 값에 값을 곱하고 결과를 변수에 할당함      |
|             | `/=`                  | 기존 값으로 값을 나누고 결과를 변수에 할당함    |
|             | `%=`                  | 기존 값으로 나머지 계산 후 결과를 변수에 할당함 |
| 비교 연산자 | `==`                  | 동등 비교 (값이 같은지 확인)                    |
|             | `!=`                  | 부등 비교 (값이 다른지 확인)                    |
|             | `=== `                | 일치 비교 (값과 타입이 모두 같은지 확인)        |
|             | `!== `                | 부일치 비교 (값과 타입이 모두 다른지 확인)      |
|             | `<`, `<=_`, `>`, `>=` | 크기/같음을 비교하는 관계 연산자들              |
| 논리 연산자 | `&&`,``               | ``, `!`                                         | AND, OR, NOT 로직 구현 |

##### 3.1.1. 추가연산자(병합연산자 nullish)

> 변수나 표현식이 null 또는 undefined인 경우에만 대체 값을 반환하는 연산자

```
//nullish 병합 연산자 '??'
const a = null;
const b = "1";
console.log(a ?? b);

```

#### 3.2. 산술연산자

##### 3.2.1. 산술연산자의 기본활용 예제 [05]

```
console.log(100 + 200); // 300
console.log(200 - 80); // 120
console.log(100 * 3); // 300
console.log(400 / 5); // 80	나누기 연산자
console.log(402 % 5); // 2	나머지 연산자
console.log(2 ** 3); // 8 **은 제곱!!

```

##### 3.2.2. 산술연산자의 자료형 활용예제 [06]

| 표현식        | 결과   |
| ------------- | ------ |
| 문자형+문자형 | 문자형 |
| 문자형+숫자형 | 문자형 |

+++ 코드

```js
var t1 = '망고는';
var t2 = 5;
var t3 = '살';
var t6 = true;
var t4 = t1 + t2 + t3 + t6;
console.log(typeof t4); //string
alert(t4); //'망고는5살true'
```

+++ 설명

<mark>문자형과 `+` 연산자를 사용하면 모든 자료형이 문자형으로 변환된다.</mark>

🔑 자바스크립트는 변수가 가지는 값에 따라 그 타입이 동적으로 결정되는 동적 타이핑(dynamic typing) 언어이다.

동적 타이핑의 장점은 유연성이다.

변수의 타입이 자유롭기 때문에 언제든지 동적인 값에 따라 변수의 타입이 자동으로 바뀔 수 있으므로 유연하고 생산적인 코딩이 가능하다.

하지만 동적 타이핑으로 인해 변수의 타입을 예측하기 어려우므로, 이에 따라 예상하지 않은 에러가 발생할 수도 있다.

이를 보완한 것이 타입스크립트 이다.
+++

##### 3.2.3. 산술연산자의 자료형 활용예제 [07]

+++ code

```js
const x = 75;
const y = 87;
const add = x + y;
document.write('국어 점수 :' + x + '<br>');
document.write('수학 점수 :' + y + '<br>');
document.write('합계 :' + add + '<br>');
document.write('평균은 :');
document.write(add / 2);
document.write(`국어점수: ${x}<br>수학점수: ${y}<br>합계: ${add}<br> `);
```

+++ explain

- `const add = x + y;`
  - `+` 는 숫자 자료형으로 연산하였다.
- `document.write('국어 점수 :' + x + '<br>');`
  - `+` 는 문자 자료형으로 연산하였다.
- `document.write(`국어점수: ${x}<br>수학점수: ${y}<br>합계: ${add}<br> `);`
  - 백틱을 사용하면 표현식과 문자를 쉽게 연결할수 있다. (Template literals)
    +++

##### 3.2.4. 증가연산자예제 [08]

<aside style='border:1px solid #ddd; padding:1rem; white-space:pre-wrap;background:#00bcd412;'>
변수에 붙이면 1씩 증가/감소 시키는 연산자

앞에 붙이면 전위연산, 뒤에 붙이면 후위 연산이라고 하며 위치에 따라 결과가 다르다

</aside>

| 종류    | 설명                                 |
| ------- | ------------------------------------ |
| A = ++A | A에 A에 1을 더한값을 재할당 전위연산 |
| A = A++ | A에 A에 1을 더한값을 재할당 후위연산 |
| A = --A | A에 A에 1을 뺀값을 재할당 전위연산   |
| A = A-- | A에 A에 1을 뺀값을 재할당 후위연산   |

+++ 코드

```js
let x = 1;

document.write(x++); //1(2)
document.write(x++); //2(3)
document.write(x++); //3(4)
document.write(x++); //4(5)
document.write('<br>');

x = 1;

document.write(++x); //2
document.write(++x); //3
document.write(++x); //4
document.write(++x); //5
```

+++ 설명
후위 연산은 결과를 다음 호출시 반환하고
전위 연산은 결과를 즉시 반환한다.
+++

#### 3.3. 할당연산자

| 종류 | 설명                               |
| ---- | ---------------------------------- |
| =    | 우항을 좌항에 할당                 |
| +=   | 좌항에 우항을 더한후 좌항에 재할당 |

##### 3.3.1. 예제-[08]

+++ 코드

```html
<!DOCTYPE html>
<html>
	<head>
		<title>노드 추가</title>
	</head>
	<body>
		<div id="container">
			<p>첫 번째 단락</p>
		</div>

		<script>
			// 기존의 요소 선택
			const container = document.getElementById('container');

			// 새로운 노드 생성 및 추가
			container.innerHTML += '<p>두 번째 단락</p>';
		</script>
	</body>
</html>
```

+++ 설명
!!! `container.innerHTML += '<p>두 번째 단락</p>';` 의 연산자를 `+` 로 변경하면 두번째 p 태그는 교체된다.
`+=` 연산자는 가산후 재할당 한다.
+++

#### 3.4. 비교연산자

!!! 비교연산자는 우항과 좌항의 값은 비교후 참이나 거짓을 반환한다.
주로 조건문에 사용한다.
!!!

| 종류  | 설명                         |
| ----- | ---------------------------- |
| A==B  | A와 B가 같다                 |
| A!=B  | A와 B가 같지 않다            |
| A===B | A와 B가 자료형까지 같다      |
| A!==B | A와 B가 자료형까지 같지 않다 |
| A<B   | A가 B보다 작다               |
| A<=B  | A가 B보다 작거나 같다        |
| A>B   | A가 B보다 크다               |
| A>=B  | A가 B보다 크거나 같다        |

##### 3.4.1. 예제-[09]

+++ 코드

```js
var x = 10;
var y = 20;

document.write(x + '>=' + y + ': ');
document.write(x >= y);
document.write('<br>');

document.write(x + '<=' + y + ': ');
document.write(x <= y);
document.write('<br>');

document.write(x + '!=' + y + ': ');
document.write(x != y);
document.write('<br>');

document.write(x + '==' + y + ': ');
document.write(x == y);
document.write('<br>');

document.write(x + '===' + y + ': ');
document.write(x === y);
document.write('<br>');

document.write(x + '!==' + y + ': ');
document.write(x !== y);
document.write('<br>');
```

+++ 설명

x=10, y=20 입니다.

`document.write(x >= y);` 10은 20보다 크거나 같다는 false 입니다

`document.write(x <= y);` 10은 20보다 작거나 같다는 true 입니다

`document.write(x != y);` 10은 20과 같지 않다는 true 입니다

`document.write(x == y);` 10은 20과 같다 는 false 입니다

`document.write(x !== y);` 10은 20과 자료형까지 같지 않다는 true 입니다

`document.write(x === y);` 10은 20과 자료형까지 같다 는 false 입니다

+++

#### 3.5. 논리연산자

!!!불리언(boolean) 연산자 라고도 하며 결괏값이 true, false 를 반환하는 연산자
!!!

| 종류   | 설명                               |
| ------ | ---------------------------------- |
| A&&B   | A와 B가 모두 True일 경우에만 True  |
| A ∣∣ B | A또는 B가 True일 경우 True         |
| !A     | A가 True이면 False, False이면 True |

##### 3.5.1. 예제-[10]

+++ 코드

```js
var x = 7 > 6 && 1 > 8;
var y = 7 > 6 || 1 > 8;
var z = !(7 > 6);

document.write('7이 6보다 크고 1이 8보다 크면 논리값은?');
document.write(x + '<br>');
document.write('7이 6보다 크거나 1이 8보다 크면 논리값은?');
document.write(y + '<br>');
document.write('7이 6보다 크지 않으면 논리값은?');
document.write(z + '<br>');
```

+++ 설명
!!!

1. t/f => false
2. t/f => true
3. t => false
   !!!
   +++

##### 3.5.2. 마무리문제-[11]

+++ 지시문
!!!danger :zap: 20대 여성이라면 결과값이 true로, 아니라면 결과 값으로 false:zap:
20대 대상의 소개팅을 준비 중입니다.<br>
남성은 모집이 완료 되었지만 여성은 아직 모집이 다 되지 않았네요.
prompt메서드를 활용하여 참가 희망자의 성별과 나이를 확인합니다.<br>
20대 여성이라면 결과값이 true로, 아니라면 결과 값으로 false가 나오게 만드세요
!!!
+++ 힌트
[MDN :link:](https://developer.mozilla.org/ko/docs/Web/API/Window/prompt)
`prompt(message, default);`
+++ 정답

```js
var gender = prompt('당신의 성별은', '여성');
var age = prompt('당신의 나이는', '20');
var result = age >= 20 && age < 30 && gender == '여성';
document.write(result);
```

+++ 설명
!!!This is another Tab!!!
+++

##### 3.5.3. 마무리문제-[12]

+++ 지시문
!!!danger :zap: 평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true를 아니라면 false:zap:
prompt 메서드를 활용하여 국어, 영어, 수학 점수를 입력 받으세요.<br>
평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true를 아니라면 false를 출력합니다.
!!!
+++ 힌트
엄청쉽다
+++ 정답

```js
var korNum = Number(prompt('국어점수는?', '0'));
var engNum = Number(prompt('영어점수는?', '0'));
var mathNum = Number(prompt('수학점수는?', '0'));
var avg = (korNum + engNum + mathNum) / 3;
var result = avg >= 70 && konNum >= 60 && engNum >= 60 && mathNum >= 60;
document.write(result);
```

+++ 설명
!!!This is another Tab!!!
+++

#### 3.6. 조건부연산자

!!! 자바스크립트에서 항을 3개 가지는 연산자는 이것 밖에 없어서 삼항연산자라고도 불리우며 조건문을 간단히 작성할때 많이 사용됨
!!!

| 문법           | 설명                                 |
| -------------- | ------------------------------------ |
| (조건) ? A : B | 조건 ? 참이면 A실행 : 거짓이면 B실행 |

##### 3.6.1. 예제-[13]

+++ 코드

```js
//your="어려워요"
your = '재밌어요';
let study = your == '어려워요' ? ' 천재이시군요' : '복습하세요';
document.write(`자바스크립트가 ${your} <h1>${study}</h1>`);
```

+++ 설명
!!!This is another Tab!!!
+++

##### 3.6.2. 마무리문제-[14]

+++ 지시문
!!!info :zap: 삼항 연산자 사용 :zap:
경아는 오늘 교통비 3,000원 식비 7,000원, 음료비 2,000원을 사용했습니다.
하루 용돈인 10,000원을 초과했을 경우 "000원 초과"라고 출력되거나,
아니면 "돈 관리 참 잘했어요!"라고 출력되도록 해보세요
!!!
+++ 힌트
!!!danger
정답틀림
!!!
+++ 정답

```js
var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var total = price1 + price2 + price3;
var result = total > 1000 ? total - 10000 + '원 초과' : '돈 관리 잘 했어요!';
document.write(result);
```

+++ 설명
!!!This is another Tab
!!!
+++

##### 3.6.3. 마무리문제-[15]

+++ 지시문
!!!info :zap: 삼항 연산자 사용 :zap:
방문자에게 질의응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다.
방문자의 몸무게가 적정 몸무게보다 이상일 경우 "적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요.
적정 몸무게 공식은 '몸무게=(신장-100)\*0.9'입니다
!!!
+++ 힌트
!!!danger
정답틀림
!!!
+++ 정답

```js
var user_height = prompt('당신의 신장은?', '0');
var user_weight = prompt('당신의 체중은?', '0');
var normal_weight = (user_height - 100) * 0.9;
var result = user_weight > normal_weight ? '적정 몸무게 이상' : '적정 몸무게 미달';
document.write(result);
```

+++ 설명
!!!This is another Tab
!!!
+++

#### 3.7. 연산자의 우선순위

!!!info
자바스크립트에서 연산자 우선순위는 표현식 내에서 연산자가 어떤 순서로 평가되는지를 결정하는 규칙입니다.

이 규칙에 따라 표현식의 평가 순서와 결과가 달라질 수 있습니다.
!!!
|우선순위|연산자|
|---|---|
|1. |`( )`|
|2. 단항 연산자|`--,++,!`|
|3. 산술 연산자 |`_,/,%,+,-`|
|4. 비교 연산자|`>,>=,<,<=,==,===,!==`|
|5. 논리 연산자|`&&,||`|
|6. 대입(복합 대입)연산자|`=,+=,-+,_=,/=,%=`|

---

### 4. 제어문

:::comment_box
<mark>제어문</mark> 에는 <mark>조건문, 선택문, 반복문</mark> 이 있습니다.

1. 조건문이란 조건에 따라 실행이 달라지게 할 때 사용되는 제어문입니다.

   - 자바 스크립트의 조건문 에는` if, else, else if`가 있습니다.

2. 선택문이란 값에 따라서 실행 내용을 선택하여 실행 할때 사용되는 제어문입니다.

   - 자바 스크립트의 선택문 에는 `switch`가 있습니다.

3. 반복문이란 주어진 조건에 따라서 문장을 반복 실행 할때 사용되는 제어문 입니다
   - 자바 스크립트의 반복문 에는 `for, while, do while` 등이 있습니다.

:::

#### 4.1. 조건문

!!!
프로그래밍을 할때는 특정 조건과 명령에 따라 실행 순서를 정해야 합니다.

이때 특정 조건이 맞는지 확인하기 위해 조건문 을 사용하며 프로그래밍 시 가장 빈번히 사용하는 구문입니다.

자바스크립트의 조건문과 조건 연산자에 대해 학습하겠습니다.
!!!

> if 문이나 if~else문을 사용하여 스크립트 안에서 조건을 체크할수 있습니다.<br>
> if문은 소괄호 안의 조건을 체크하여 결괏값이 true 면 중괄호 내부의 실행문을 실행하고<br>
> 조건의 결과가 false 이면 중괄호의 실행문을 무시합니다.<br>
> 아래는 if 문의 기본 문법 예시입니다.<br>

[!badge variant='primary' size='m' text='기본형']

```js
if (조건) {
	실행문;
}
```

##### 4.1.1. if-예제[16]

+++ 코드

```js
var your_sex = '남자';
document.write('당신은' + your_sex + '이므로');
if (your_sex == '남자') document.write('치마를 입으세요.');
if (your_sex == '여자') document.write('바지를 입으세요.');
```

+++ 설명
!!!This is another Tab!!!
+++

> if문은 조건이 true 일때만 실행할수 있으므로 false 일때도 명령을 하려면 실행문을 두번 작성해야 하는 번거로움이 있습니다.<br>
> 이럴때 else 를 사용하면 됩니다.<br>
> 아래는 if ~ else if 문의 기본 문법 예시입니다.<br>

##### 4.1.2. if-예제[17]

+++ 지시문
!!!
질의응답 창(prompt)을 이용하여
시험 점수를 입력 받아 저장한 후 만일 :zap:70점보다 크거나 같으면 '합격':zap:이라는 메시지를 출력하시오
!!!
+++ 힌트
정답틀림
+++ 정답

```js
var testNum = prompt('시험 점수를 입력하세요');
if (textNum >= 70) {
	document.write('합격입니다.');
}
```

+++ 설명
GPT 한테 물어보세요
+++

##### 4.1.3. if-예제[18]

+++ 지시문
!!!
사용자로부터 입력받은 숫자가 3의 배수인지를 확인후 결과를 출력하는 프로그램을 작성하시오
!!!
+++ 힌트
3의 배수는 3으로 나눈 나머지가 0일 꺼에요 🤔
+++ 정답
사는게 쉽지 않아요
+++ 설명
GPT 한테 물어보세요
+++

> if문은 조건이 true 일때만 실행할수 있으므로 false 일때도 명령을 하려면 실행문을 두번 작성해야 하는 번거로움이 있습니다.<br>
> 이럴때 else 를 사용하면 됩니다.<br>
> 아래는 if ~ else if 문의 기본 문법 예시입니다.<br>

[!badge variant='primary' size='m' text='기본형']

```js
if (조건1) {
	실행문1;
}else {
	조건1이 false 일때 실행문;
}
```

> 조건이 복잡할 경우 if~else 를 사용하여 중첩으로 조건을 판별할수 있습니다.<br>
> 아래는 if 문의 기본 문법 예시입니다.<br>

[!badge variant='primary' size='m' text='기본형']

```js
if (조건1) {
	실행문1;
} else if (조건2) {
	실행문2;
}
```

#### 4.2. 선택문

#### 4.3. 반복문
