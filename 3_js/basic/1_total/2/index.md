# 2. 기본문법 <!-- omit in toc -->

---

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
		- [1.2.4. 참조형](#124-참조형)
			- [1.2.4.1. 예제 \[04\]](#1241-예제-04)
	- [1.3. 연산자](#13-연산자)
		- [1.3.1. 연산자의 종류](#131-연산자의-종류)
			- [1.3.1.1. 추가연산자(병합연산자 nullish)](#1311-추가연산자병합연산자-nullish)
		- [1.3.2. 산술연산자](#132-산술연산자)
			- [1.3.2.1. 산술연산자의 기본활용 예제 \[05\]](#1321-산술연산자의-기본활용-예제-05)
			- [1.3.2.2. 산술연산자의 자료형 활용예제 \[06\]](#1322-산술연산자의-자료형-활용예제-06)
			- [1.3.2.3. 산술연산자의 자료형 활용예제 \[07\]](#1323-산술연산자의-자료형-활용예제-07)
			- [1.3.2.4. 증가연산자예제 \[08\]](#1324-증가연산자예제-08)
		- [1.3.3. 할당연산자](#133-할당연산자)
			- [1.3.3.1. 예제-\[08\]](#1331-예제-08)
		- [1.3.4. 비교연산자](#134-비교연산자)
			- [1.3.4.1. 예제-\[09\]](#1341-예제-09)
		- [1.3.5. 논리연산자](#135-논리연산자)
			- [1.3.5.1. 예제-\[10\]](#1351-예제-10)
			- [1.3.5.2. 형성평가-\[11\]](#1352-형성평가-11)
			- [1.3.5.3. 형성평가-\[12\]](#1353-형성평가-12)
		- [1.3.6. 조건부연산자](#136-조건부연산자)
			- [1.3.6.1. 예제-\[13\]](#1361-예제-13)

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

#### 1.2.4. 참조형

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

### 1.3. 연산자

!!! [🔗mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%EA%B4%80%EA%B3%84_%EC%97%B0%EC%82%B0%EC%9E%90)

연산자란? 프로그램에서 특정한 동작을 하도록 지시하는 기호.

프로그래밍에서 연산이란 사칙연산은 물론 문자열을 연결해서 새로운 문자열을 만들고 값의 크기를 비교하는 등의 여러가지 동작을 의미한다.
이런 연산을 지시하는 기호가 연산자이다.

산술,관계,할당,논리,부정,삼항,비트,단항,등이 있다.

!!!

#### 1.3.1. 연산자의 종류

| 종류              | 연산자와 역할                                                                                                                                                                                                                                                         | 우선순위                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --- |
| 그룹 연산자       | ()                                                                                                                                                                                                                                                                    | 20                      |
| 속성 접근 연산자  | . (점 연산자), [] (대괄호 연산자)                                                                                                                                                                                                                                     | 19                      |
| 산술 연산자       | + (덧셈), - (뺄셈), \* (곱셈), / (나눗셈), % (나머지)                                                                                                                                                                                                                 | 17                      |
| 비트 이동 연산자  | << (왼쪽 시프트), >> (부호 있는 오른쪽 시프트), >>> (부호 없는 오른쪽 시프트)                                                                                                                                                                                         | 15                      |
| 관계(비교) 연산자 | < (작다), > (크다), <= (작거나 같다), >= (크거나 같다)                                                                                                                                                                                                                | 14                      |
| 관계(비교) 연산자 | instanceof (인스턴스 체크), in (프로퍼티 체크)                                                                                                                                                                                                                        | 14                      |
| 관계(비교) 연산자 | == (동등), != (부등), === (일치), !== (불일치)                                                                                                                                                                                                                        | 13                      |
| 비트 연산자       | & (비트 AND),                                                                                                                                                                                                                                                         | (비트 OR), ^ (비트 XOR) |
| 논리 연산자       | && (논리 AND)                                                                                                                                                                                                                                                         | 11                      |
| 조건(삼항) 연산자 | ? :                                                                                                                                                                                                                                                                   | 4                       |
| 할당(대입) 연산자 | = (할당), += (덧셈 후 할당), -= (뺄셈 후 할당), \*= (곱셈 후 할당), /= (나눗셈 후 할당), %= (나머지 후 할당), <<= (왼쪽 시프트 후 할당), >>= (부호 있는 오른쪽 시프트 후 할당), >>>= (부호 없는 오른쪽 시프트 후 할당), &= (비트 AND 후 할당), ^= (비트 XOR 후 할당), | = (비트 OR 후 할당)     | 3   |
| ———————————-      | 우선순위는 위에서 아래로 내려갈수록 높아진다.                                                                                                                                                                                                                         | ——————                  |

##### 1.3.1.1. 추가연산자(병합연산자 nullish)

> 변수나 표현식이 null 또는 undefined인 경우에만 대체 값을 반환하는 연산자

```
//nullish 병합 연산자 '??'
const a = null;
const b = "1";
console.log(a ?? b);

```

#### 1.3.2. 산술연산자

##### 1.3.2.1. 산술연산자의 기본활용 예제 [05]

```
console.log(100 + 200); // 300
console.log(200 - 80); // 120
console.log(100 * 3); // 300
console.log(400 / 5); // 80	나누기 연산자
console.log(402 % 5); // 2	나머지 연산자
console.log(2 ** 3); // 8 **은 제곱!!

```

##### 1.3.2.2. 산술연산자의 자료형 활용예제 [06]

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

##### 1.3.2.3. 산술연산자의 자료형 활용예제 [07]

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

##### 1.3.2.4. 증가연산자예제 [08]

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

#### 1.3.3. 할당연산자

| 종류 | 설명                               |
| ---- | ---------------------------------- |
| =    | 우항을 좌항에 할당                 |
| +=   | 좌항에 우항을 더한후 좌항에 재할당 |

##### 1.3.3.1. 예제-[08]

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

#### 1.3.4. 비교연산자

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

##### 1.3.4.1. 예제-[09]

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

#### 1.3.5. 논리연산자

!!!불리언(boolean) 연산자 라고도 하며 결괏값이 true, false 를 반환하는 연산자
!!!

| 종류   | 설명                               |
| ------ | ---------------------------------- |
| A&&B   | A와 B가 모두 True일 경우에만 True  |
| A ∣∣ B | A또는 B가 True일 경우 True         |
| !A     | A가 True이면 False, False이면 True |

##### 1.3.5.1. 예제-[10]

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

##### 1.3.5.2. 형성평가-[11]

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

##### 1.3.5.3. 형성평가-[12]

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

#### 1.3.6. 조건부연산자

!!! 자바스크립트에서 항을 3개 가지는 연산자는 이것 밖에 없어서 삼항연산자라고도 불리우며 조건문을 간단히 작성할때 많이 사용됨
!!!

| 문법           | 설명                                 |
| -------------- | ------------------------------------ |
| (조건) ? A : B | 조건 ? 참이면 A실행 : 거짓이면 B실행 |

##### 1.3.6.1. 예제-[13]

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
