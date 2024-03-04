---
order: 100
label: 17.localStorage
author: 코알라코딩
name: 코알라코딩
avatar: koala
icon: dot
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
category: [javascript]
tags: [javascript, defer, async]
---


### 목차 <!-- omit in toc -->



## 1. 개요
> 데이터를 브라우저에 영구보존하고 싶을때 사용.
> localStorage는 브라우저에 데이터를 간단하게 저장할수있다. window객체에 localStorage객체가 있으므로 위치에 상관없이 사용할수 있으며,localStorage에 저장된 데이터는 기간제한이 없다

## 2. 문법
| 메소드                                 | 의미                     | 반환   |
|----------------------------------------|--------------------------|--------|
| `localStorage.setItem('myParam',data)` | localStorage 에 저장     | 없음   |
| `localStorage.getItem('myParam')`      | localStorage에서불러오기 | 문자열 |

> set Item( )을 사용해 데이터를 저장하며, 첫 번째 인수는 키, 두 번째 인수는 데이터를 전달한다.
> 문자열, 숫자, 논리값, 객체, 배열 등 다양한 데이터타입을 사용할 수 있다.
> get Item( )은 ( )을 사용해 저장된 데이터를 불러오며, 저장시 사용한 키와 같은 값을 인수로 전달한다
>
## 3. 예제
[!button variant='primary' icon='play' text='실행화면' target='blank'](https://qwerewqwerew.github.io/source/js/localstorage/1.html)
```html #
<section class="localStorage">
<h2>localStorage</h2>
<input type="text">
<button class="btnSave">저장하기</button>
<button class="btnRead">불러오기</button>
</section>
```
```js #
const section = document.querySelector('.localStorage'); // 부모 요소 취득
const btnRead = section.querySelector('.btnRead'); // 버튼 요소 취득
const btnSave = section.querySelector('.btnSave'); // 버튼 요소 취득
const input = section.querySelector('input'); // 텍스트 입력 박스 취득
btnSave.addEventListener('click', () => {
  const data = input.value; //input 의 입력값 취득
  localStorage.setItem('myKey', data); // localStorage 저장
});
btnRead.addEventListener('click', () => {
  const data = localStorage.getItem('myKey'); // localStorage에서 불러오기
  input.value = data; //저장값 출력
});
```

!!!
### sessionStorage <!-- omit in toc -->

sessionStorage와 localStorage는 비슷한 기능으로, sessionStorage가 있으며, 사용법은 같다.

localStorage는 저장 기간의 제한이 없지만, sessionStorage는 세션이 종료(브라우저 닫기)되면 데이터도 함께 삭제된다

!!!