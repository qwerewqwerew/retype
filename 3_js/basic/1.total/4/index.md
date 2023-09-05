# 4. 객체 <!-- omit in toc -->

## 1. 객체의 이해

> 자바스크립트엔 여덟 가지 자료형이 있습니다.
> 이 중 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 '원시형(primitive type)'이라 부릅니다
> 객체형(Reference type)은 원시형과 달리 다양한 데이터를 담을 수 있습니다.
> 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장합니다
> [:link:모던자바스크립트](https://ko.javascript.info/object)

!!!warning
![망고로 이해하는 객체](../../../../source/images/js4-1.jpg)
객체는 쉽게 설명하면 이름표를 붙일수 있는 멀티수납공간 입니다.
자바스크립트는 객체 기반 언어로 배열도 객체입니다.
!!!

### 1.1. 객체 생성하기-예제[01]

+++ 지시문
[:icon-play:](./script/object.html) 객체를 선언해봅시다
+++ 01

```js #
var dog = new Object();
dog = {
	/* 키:값 */
	name: '망고',
	features: '말티즈',
};
document.write(`<h1>${dog.name}</h1>`);
```

`Object()`{.red} 생성자 함수를 사용해서 생성할수 있습니다.
[:link:MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

+++ 02

```js #
const baby = {
	name: '망고',
	features: '말티즈',
};
document.write(`<h1>${baby.features}</h1>`);
```

`{ }`{.red} 를 사용해서 생성할수 있습니다.

+++ 03

```js #3-6
const pet = {
	name: '망고',
	eat: function (food) {
		//메소드
		alert(this.name + '는 ' + food + '를 먹습니다.');
	},
};
pet.eat('간식');
```

객체 내에 선언된 함수를 **메소드**{.red} 라고 합니다.

+++

### 1.2. 인스턴스 만들기-예제[02]

> 자바스크립트에서 제공하는 내장 객체를 꺼내어 사용해 보겠습니다.
> 자바스크립트는 개발자들이 자주 사용하는 요소들을 미리 객체로 정의해 놓았는데 그것을 내장 객체 라고 합니다.
> 예를들어 날짜, 시간과 관련된 프로그램을 개발하려면 자바스크립트의 Date 객체를 가져와서 사용할수 있습니다.
>
> 자바스크립트에서 내장객체는 참조형태로 사용해야 합니다.
> Date 객체를 꺼내어 사용시 객체 자체를 사용하면 안되고 인스턴스의 형태로 만들어서 사용해야 합니다.
> 마치 나루토의 그림자 분신술 처럼 본체는 안전하게 보관되어 있는 상태에서 분신만 소환하는 것이죠.
> ![나루토 그림자분신술](../../../../source/images/js4-2.jpg)
>
> _객체가 사용하는 분신술을 자바스크립트에선 인스턴스 라고 하며 자바스크립트는 인스턴스에 식별자를 붙여서 사용합니다._{.red .normal}

+++ 지시문
[:icon-play:](./script/time-1.html)
:::box
인스턴스를 생성하는 문법은 아래와 같습니다.
[!badge variant='primary' size='m' text='기본형'] `new 객체명`{.red}
:::
+++ 01

```html #
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>What time is it?</title>
		<style>
			body {
				font-size: 2em;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<script>
			var now = new Date();
			document.write('현재 시각은 ' + now); // 현재 날짜와 시간 표시하기
		</script>
	</body>
</html>
```

+++ 02
[:icon-play:](./script/time-2.html)

```js
var now = new Date();
document.write('현재 시각은 ' + now.toLocaleString()); // 로컬 형식으로 표시하기
```

01번의 16-17번 라인의 코드를 위와 같이 변경하면 국내 시간으로 변경됩니다.
`.toLocaleString()` 은 `Date()` 객체가 갖고 있는 현지 시각을 표시하는 메서드 입니다.

+++설명
![실행화면](../../../../source/images/js4-3.jpg){.shadow .w50}
01 단계에서 위와 같이 실행화면이 확인됩니다.
GMT는 "Greenwich Mean Time"의 약어로, 그리니치 평균시를 나타냅니다.
그리니치 평균시는 영국 런던의 그리니치 천문대를 기준으로 한 세계 표준 시간입니다.
GMT 시간은 지구 상의 임의의 위치에서 현재 시간을 나타내는 것이 아니라, 국제적인 표준으로 사용되며 다른 시간대와 비교하기 위한 기준점 역할을 합니다
+++

## 2. 내장객체

## 3. BOM(브라우저객체)
