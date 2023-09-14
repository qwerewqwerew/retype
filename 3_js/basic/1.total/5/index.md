# 5. DOM(문서객체모델) <!-- omit in toc -->

## 1. 문서객체모델의 이해

JavaScript의 문서객체 모델(Document Object Model, DOM)은 HTML, XML 문서의 구조화된 표현을 제공하며, 이를 프로그래밍적으로 조작할 수 있는 방법을 제공합니다. 즉, DOM은 웹 페이지의 모든 요소를 객체로 나타내고, 이들 객체에 접근하여 조작할 수 있는 API를 제공합니다.

**DOM은 트리 구조로 이루어져 있으며, 문서의 각 요소는 노드(Node)로 표현됩니다. 노드는 요소 노드(Element Node), 속성 노드(Attribute Node), 텍스트 노드(Text Node) 등 다양한 종류가 있습니다. 이러한 노드들은 상위 노드와 하위 노드로 구성된 계층 구조를 이루고 있습니다.**

DOM은 웹 개발에서 매우 중요한 역할을 합니다. 웹 페이지의 동적인 기능을 구현하거나, 사용자 인터페이스를 조작하는 등 다양한 기능을 구현할 수 있습니다.

!!!warning **_DOM 이란_** 자바스크립트를 이용하여 웹문서에 접근하고 제어할수 있도록 객체를 사용하여 웹문서를 체계적으로 정리하는 방법

!!!

### 1.1. DOM 을 구성하는 기본 원칙

**DOM은 트리라고 하며 html 은 Root 입니다**

![DOM 그림](../../../../source/images/pic_htmltree.gif)

:::box

1. 모든 HTML 태그는 요소(element) 노드 입니다.
2. HTML 태그에서 사용하는 텍스트 내용은 자식 노드인 텍스트 노드 입니다.
3. HTML 태그에 있는 속성은 자식 노드인 속성 노드 입니다.
4. 주석은 주석 노드 입니다.

:::

## 2. DOM에 접근하기

아래의 basic.html 을 복사하여 dom 요소를 선택하는 문법을 학습해 보겠습니다.

```html # basic.html
<html>
	<head>
		<title>JavaScript DOM Course</title>
	</head>
	<body>
		<h1>치킨 (리미와감자)</h1>
		<ul>
			<li id="one">I like 치킨 (치킨시켜)</li>
			<li class="highlight">Everybody likes 치킨 (치킨시켜)</li>
			<li>Let's eat 치킨 (치킨시켜)</li>
		</ul>
		<p class="highlight">양념 치킨 후라이드 치킨 치킨 치킨 (치킨시켜) (치킨시켜) x2 반은 양념 치킨 반은 후라이드 치킨 무는 많이 줘요 아줌마 부위는 날개는 세게 다리는 네게 목은 빼주세요 아줌마 고도비만 치킨 알이 꽉 찬 치킨 두 마리 같은 걸로 아줌마 구이는 날개는 미듐 가슴도 미듐 다린 웰던으로 아줌마</p>
		<ul>
			<li class="highlight">Edge 있게 물티슈, (아줌마)</li>
			<li>콜란 서비스 (아줌마)</li>
			<li>할인카드... 되죠? (아줌마)</li>
		</ul>
	</body>
</html>
```

### 2.1. ID로 선택 `getElementById`

|||:icon-code: Code

```js #
document.getElementById('one').style.background = 'yellow';
```

|||:icon-key: 실행화면

![](../../../../source/images/result1.jpg){.shadow}

|||

### 2.2. 클래스로 선택 `getElementByClassName`

||| :icon-code: Code

```js #
let el3 = document.getElementsByClassName('highlight');
console.log(el3);
el3[1].style.cssText = 'width:500px; marign:auto; background:pink';
```

||| :icon-key: 실행화면

![](../../../../source/images/result2.jpg){.shadow}

[설명]

1.  **.highlight 클래스는 문서에서 여러개 인데 한개만 스타일이 적용됩니다..**{.mark}
2.  3번라인의 cssText 속성은 자바스크립트를 이용하여 css 스타일을 여러개 추가할수 있으나 기존에 css속성이 적용되어 있을경우 덮어 씌워 집니다.

|||

### 2.3. 태그로 선택 `getElementsByTagName`

||| :icon-code: Code

```js #
const el2 = document.getElementsByTagName('li');
console.log(el2);

el2[1].style.backgroundImage = 'url("https://qwerew.cafe24.com/images/icon/02.png")';
el2[1].style.backgroundSize = '24px';
el2[1].style.backgroundRepeat = 'no-repeat';
el2[1].style.paddingLeft = '24px';
```

||| :icon-key: 실행화면

![](../../../../source/images/result3.jpg){.shadow}

|||

### 2.4. css선택자로 선택 `querySelector` , `querySelectorAll`

선택대상이 한개일때는 `querySelector` 선택대상이 여러개일때는 `querySelectorAll` 을 사용합니다. querySelector 은 모든 css 선택자를 사용할수 있습니다.

||| :icon-code: Code

```js
const el4 = document.querySelector('.highlight');
console.log(el4);
el4.style.backgroundColor = 'yellow';
const el5 = document.querySelectorAll('.highlight');
console.log(el5);
el5[2].style.backgroundColor = 'yellow';
```

||| :icon-key: 실행화면

생략

|||

[!ref target='blank' text="제이쿼리로 선택하기"](./script/basic-jq.html)

## 3. 취득하고 수정하기

### 3.1. 수정하기 `innerText`,`innerHTML`

### 3.2. innerText, textContent

> 요소내의 텍스트 내용을 가져오거나 수정하는 속성 `display:none` 된 텍스트는 읽지 하며 숨김 텍스트는 `textContent` 속성으로 취득해야 합니다.

+++ 지시문

[!ref target='blank' text=":icon-play: 미리보기"](./script/inner.html)

- 요소의 텍스트노드를 취득/수정하는 속성을 학습해보겠습니다.
- 코드1을 html을 복사하여 시작합니다.

+++ 코드1

```html #
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			#four span {
				display: none;
			}
		</style>
	</head>

	<body>
		<div id="page">
			<h1 id="header">textContent/innerText</h1>
			<h2>망고의 쇼핑목록</h2>
			<ul>
				<li id="one" class="hot">
					<em>삑삑공</em>
				</li>
				<li id="two" class="hot">연어간식</li>
				<li id="three" class="hot">치즈껌</li>
				<li id="four"><span>😀😀😀😀😀</span></li>
			</ul>
			<div id="scriptResults"></div>
		</div>
	</body>
</html>
```

+++ 코드2

![](../../../../source/images/js5-1.jpg){.shadow}

[설명]

- innerText: 요소의 텍스트 내용을 가져오거나 설정합니다. 보여지는 텍스트만을 고려하며, 숨겨진(hidden) 요소나 스타일(display: none)이 적용된 요소의 텍스트를 가져오지 않습니다. HTML 태그를 포함한 모든 텍스트를 반환합니다.
- textContent: 요소의 모든 텍스트 내용을 가져오거나 설정합니다. 이 속성은 숨겨진(hidden) 요소나 스타일(display: none)이 적용된 요소에 대해서도 포함된 모든 텍스트를 반환합니다.

+++

### 3.3. `innerHTML`

선택된 요소 내부 HTML을 가져오거나 조작하는데 사용하는 속성.
innerHTML을 사용하여 새로운 HTML 코드를 설정하면 해당 요소의 모든 자식 노드들이 완전히 대체됩니다.
즉, 기존에 있는 모든 자식 노드들은 제거되고, 새로운 HTML 코드가 그 자리에 삽입됩니다. 따라서 주변 컨텍스트와 함께 유지하려는 경우에는 조심해야 합니다.

+++ 지시문

- 요소의 HTML노드를 취득/수정하는 속성을 학습해보겠습니다.
- 코드1의 html을 복사하여 시작합니다.

[!ref target='blank' text=":icon-play: 미리보기"](./script/inner.html)

+++ 코드1

```html #
<!DOCTYPE html>
<html>
	<head>
		<title>Inner HTML</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<div id="page">
			<h1 id="header">innerHTML</h1>
			<h2>요소내 HTML 태그를 취득하거나 조작시 사용되는 속성</h2>
			<ul>
				<li id="one" class="hot">떡볶이</li>
				<li id="two" class="hot">순대</li>
				<li id="three" class="hot">간짜장</li>
				<li id="four">물만두</li>
			</ul>
		</div>
	</body>
</html>
```
+++ 코드2

![](../../../../source/images/js5-2.jpg){.shadow}

+++

## 4. DOM에서 이벤트 처리하기

## 5. DOM에서 노드 조작하기
