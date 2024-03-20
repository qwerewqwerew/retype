---
icon: dot
label: 10.svg
order: 100
author:
name: 코알라코딩
avatar: koala
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
category: [css]
tags: [css, svg]
---

### 목차 <!-- omit in toc -->

- [1. 개요](#1-개요)
- [2. 예제](#2-예제)
	- [2.1. viewbox](#21-viewbox)
	- [2.2. svg 삽입하기](#22-svg-삽입하기)
	- [2.3. 자바스크립트 이벤트 넣기](#23-자바스크립트-이벤트-넣기)
	- [2.4. text path 애니메이션](#24-text-path-애니메이션)
	- [2.5. 마퀴텍스트](#25-마퀴텍스트)

## 1. 개요

[!ref target='blank' text=':icon-play:SVG 예제사이트'](https://svg-tutorial.com/)
[!ref target='blank' text=':icon-play:SVG 한글 예제사이트'](https://svgontheweb.com/ko/)

> SVG(Scalable Vector Graphics) 는 웹용 벡터방식 이미지 포멧입니다.
>
> 다양한 해상도에 대응하는 웹서비스 제작시 용이하게 사용할수 있습니다.

## 2. 예제

### 2.1. viewbox

:::box

`viebox` 는 일러스트레이터의 아트보드와 유사합니다

:::
![](./Learn-SVG.001-1.jpeg)

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/10-svg/1.html)

```xml
<svg width="50" height="50" viewBox="0 0 100 100">
	<circle cx="50" cy="50" r="25" fill="red" />
</svg>
<svg width="100" height="100" viewBox="0 0 100 100">
	<circle cx="50" cy="50" r="25" fill="red" />
</svg>
<svg width="100" height="100" viewBox="0 0 50 50">
	<circle cx="50" cy="50" r="25" fill="red" />
</svg>
```

1. width , height 는 svg 요소의 크기입니다
2. viewbox 는 svg 요소의 프레임이며 속성값은 프레임의 좌표를 의미합니다.
3. 같은 크기의 svg 이미지라도 프레임의 크기에 따라 다르게 보이기도 합니다.

### 2.2. svg 삽입하기

<details markdown='block'>
  <summary>
 🐨  이미지다운로드
  </summary>
<img src="./twitter_logo_original.svg">
  {: .text-delta }
</details>

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/10-svg/2.html)

> svg이미지를 html 에 삽입하는 3가지 방법을 알아봅시다.

```html
<img src="images/twitter_logo_original.svg" alt="" />
<div class="svg"></div>
<object type="image/svg+xml" data="images/twitter_logo_original.svg"></object>
```

```css
.svg {
	width: 300px;
	height: 300px;
	background: url(images/twitter_logo_original.svg) no-repeat;
}
```

### 2.3. 자바스크립트 이벤트 넣기

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/css/10-svg/3.html)

```xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" fill="#D9D9D9"/>
<script>
document.querySelector('rect').onclick=function(){
  this.setAttribute('fill','red');
}
</script>
</svg>

```

### 2.4. text path 애니메이션

> 회전하는 글씨를 만들어보자

==- [!badge variant='info' size='s' text='04'] Step 1
[!button variant='primary' icon='play' text='실행화면' target='blank'](https://qwerewqwerew.github.io/source/css/17-effect/rotate.html) {.mt30}

1. 피그마를 열고 아래와 같은 이미지를 제작한다.
   ![](./images/rotate.png)
2. 원을 더블클릭하여 선택후 2->3 순서대로 클릭한다.
   - 도형 레이어를 패스로 깨는 과정이다.
     ![](./images/02-24_608.jpg)
3. 프레임에서 우클릭후 번호 순서대로 클릭한다
   ![](./images/02-24_609.jpg)

==- STEP 2

1. vscode 를 열고 복사한 코드를 붙여넣는다.
1. 파일명 `rotate.svg` 로 저장한다.

```xml

<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="150" height="150" fill="white"/>
<path d="M109.5 75C109.5 94.0538 94.0538 109.5 75 109.5C55.9462 109.5 40.5 94.0538 40.5 75C40.5 55.9462 55.9462 40.5 75 40.5C94.0538 40.5 109.5 55.9462 109.5 75Z" stroke="black"/>
</svg>

```

2. svg 태그에 아래의 코드를 추가한다.

```xml
	<svg ... xmlns:xlink="http://www.w3.org/1999/xlink">
```

- 해당 코드는 'xlink:href'를 사용할수 있게 설정한다.

3. svg 파일을 수정한다.

```xml #2-16
<svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
  .r_text {
    animation: rotate 10s linear infinite;
    transform-origin:50% 50% ;
    font-size:1rem;
  }
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
<path id="line" d="M109.5 75C109.5 94.0538 94.0538 109.5 75 109.5C55.9462 109.5 40.5 94.0538 40.5 75C40.5 55.9462 55.9462 40.5 75 40.5C94.0538 40.5 109.5 55.9462 109.5 75Z" fill="rgba(0,0,0,0)" />
<text class="r_text">
  <textPath xlink:href="#line">Sentence Examples | Examples of Words Used in a Sentence</textPath>
</text>
</svg>
```

4. html 문서를 생성하고 svg 이미지를 삽입한다.

```html rotate.html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<img src="./rotate.svg" width="300" height="300" alt="" />
	</body>
</html>
```

===

### 2.5. 마퀴텍스트

> 특정영역안에서 흐르는 텍스트애니메이트를 만들어보자
>
> [!button variant='primary' icon='play' text='실행화면' target='blank'](https://qwerewqwerew.github.io/source/css/10-svg/5.html)

==- [!badge variant='info' size='s' text='clip-path'] Step 1

1. 피그마를 활용하여 마스크가 적용된 텍스트레이어를 제작한다.
1. svg 형식으로 코드를 복사한다.

```xml #
<svg width="300px" height="100px" version="1.0" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="clip">
      <rect width="300px" height="100px"/>
    </clipPath>
    <style type="text/css">
        text {
          font-size: 5rem;
          fill: #000;
        }
        .text1 {
          animation: left 10s linear infinite;
        }
        @keyframes left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
    </style>
  </defs>
  <rect class="bg" width="300px" height="100px" fill="red"/>
  <g class="text" clip-path="url(#clip)">
    <text class="text1" x="0" y="70">Hello SVG! Hello SVG! Hello SVG! Hello SVG! Hello SVG!</text>
  </g>

</svg>
```

2. html

```xml #
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>SVG</title>
	</head>

	<body>
		<svg class="the-svg">
			<style>
				.the-svg {
					width: 300px;
					height: 100px;
					background: #c348e9;
					border-radius: 30px;
				}

				.the-svg text {
					font-size: 5rem;
				}

				.text1 {
					animation: left 5s infinite linear;
				}

				@keyframes left {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-100%);
					}
				}

				#mask-circle rect {
					fill: #fff;
				}
			</style>
			<mask id="mask-circle">
				<rect width="300" height="80" />
			</mask>
			<g mask="url(#mask-circle)">
				<text class="text1" x="10" y="100">Hello SVG! Hello SVG! Hello SVG! Hello SVG! Hello SVG!</text>
			</g>
		</svg>

		<object data="./marquee.svg" type="image/svg+xml"></object>
	</body>
</html>
```

===
