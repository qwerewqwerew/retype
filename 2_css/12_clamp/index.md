---
order: 100
label: 12.clamp(),min(),max()
author: 코알라코딩
name: 코알라코딩
avatar: koala
icon: square
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
category: [css]
tags: [css, responsive, clamp]
---

### 목차 <!-- omit in toc -->

## 1. min()

> min() 함수는 하나 이상의 쉼표로 구분된 연산을 포함하며 최소값을 지정한다.
> 보통 최대값 설정시 사용한다.

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/12-clamp/2.html)

```css
.element {
	width: min(50%, 500px);
}
```

> 브라우저는 뷰포트 너비에 따라 두 값(50%, 500px) 중에서 가장 작은 값을 선택한다.

![](https://ishadeed.com/assets/comparison-css/css-min-1.jpg)

## 2. max()

> max() 함수는 하나 이상의 쉼표로 구분된 연산 중 가장 큰 값을 나타낸다.
> 보통 최소값을 설정할 때 사용한다.

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/12-clamp/3.html)

```css
.element {
	width: max(50%, 500px);
}
```

![](https://ishadeed.com/assets/comparison-css/css-max-1.jpg)

## 3. clamp()

[!ref target='blank' text=':icon-play:MDN'](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

:::box

클램프 함수는 요소의 크기에 최소,최대 범위를 지정할수 있는 함수이다.

:::

### 3.1. 기본문법

최소값, 기본값, 최대 허용값의 세 가지 매개 변수가 필요하다.

`clamp(1rem, 10vw, 2rem)`

`clamp(min, val, max)`

- min(최소값)
  최소값은 가장 작은(가장 음수인) 값이다. 이는 허용되는 값 범위의 하한값이다. 기본값이 이 값보다 작으면 최소값이 사용된다.

- val(기본값)
  기본값은 결과가 최소값과 최대값 사이에 있는 한 값이 사용되는 표현식이다.

- max(최대값)
  최대값은 기본값이 이 상한값보다 큰 경우 속성 값이 할당될 가장 큰(가장 양수인) 표현식 값이다.

### 3.2. 예제

+ 화면의 너비가 440px 일때 5vw => 440x 0.05 =22px
[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/12-clamp/4.html)

```css
.title {
	font-size: clamp(16px, 5vw, 50px);
}
```

```html
<h1 class="title">타이틀타이틀타이틀타이틀</h1>
```

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/12-clamp/1.html)

||| :icon-code: Code

```html
<h1>Simple responsive test</h1>
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci, eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula. Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis, libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit. Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum. Suspendisse potenti. Nunc neque mauris, tempor
	sed facilisis at, ultrices eget nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.</p>
```

||| :icon-code: Code

```css
html {
	font-family: sans-serif;
}
/* body 는 최대 70%+100px 의 너비를 가진다 */
body {
	margin: 0 auto;
	width: min(1000px, calc(70% + 100px));
}
/* h1의 폰트사이즈는 기본 2.5vw 이고 최소 1.8rme 에서 최대 2.8rem 이다 */
h1 {
	letter-spacing: 2px;
	font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}
/* p는 최소 1.2rem 의 폰트사이즈를 가진다 */
p {
	line-height: 1.5;
	font-size: max(1.2rem, 1.2vw);
}
```

|||
