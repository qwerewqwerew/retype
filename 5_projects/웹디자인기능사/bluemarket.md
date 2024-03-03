---
label: 블루마켓
layout: default
order: 100
author:
name: 코알라코딩
avatar: koala
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
icon: dot
tags: [css, responsive]
---

### 목차 <!-- omit in toc -->

- [1. 구현화면보기](#1-구현화면보기)
- [2. 리소스 다운로드](#2-리소스-다운로드)
- [3. STEP1-와이어프레임](#3-step1-와이어프레임)
- [4. STEP2-A영역-메뉴](#4-step2-a영역-메뉴)
- [5. STEP4-B영역-슬라이드](#5-step4-b영역-슬라이드)
- [6. STEP5-C영역-배너](#6-step5-c영역-배너)
- [7. STEP6-C영역-게시판](#7-step6-c영역-게시판)

## 1. 구현화면보기

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/webDesign/bluemarket/site/final/index.html)

## 2. 리소스 다운로드

1. 수험자제공파일
   [!ref target='blank' text=':icon-download:파일다운로드'](https://qwerewqwerew.github.io/source/webDesign/bluemarket/source.zip)

2. 피그마시안보기
   [!ref target='blank' text=':icon-play:미리보기'](https://www.figma.com/file/EE5HfGEtv4Hp6DV0gaby0S/%EB%B8%94%EB%A3%A8%EB%A7%88%EC%BC%93?type=design&node-id=0%3A1&mode=design&t=BogwgGmI8pF0I1Db-1)

## 3. STEP1-와이어프레임

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/projects/webDesign/bluemarket/site/step/02-wireframe)

==- HTML

> 와이어프레임제작

```html #
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>the BlueMarket</title>
		<link rel="stylesheet" href="css/reset.css" />
		<link rel="stylesheet" href="css/main.css" />
	</head>

	<body>
		<div class="wrap">
			<header></header>
			<main>
				<div class="main_slides">
					<ul class="slide_wrap">
						<li class="slide1"></li>
						<li class="slide2"></li>
						<li class="slide3"></li>
					</ul>
				</div>
				<div class="banner"></div>
				<div class="board"></div>
			</main>
			<footer></footer>
		</div>
	</body>
</html>
```

==- CSS

> 초기화 코드 작성

```css #
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--primary: #72ae67;
	--background: #eae8dd;
	--accent: #fb748a;
	--text1: #b4b4b4;
	--text2: #6a6a6a;
	--text3: #333;
}
html {
	overflow-y: scroll;
	overflow-x: hidden;
	font-size: 62.5%; /* (10 / 16) * 100% = 62.5% */
	line-height: 1.75;
	font-weight: 400;
}
body {
	font-size: 1.6rem;
	color: #333;
	font-family: 'Pretendard', sans-serif;
}

ul,
li,
ol {
	list-style: none;
}
a {
	text-decoration: none;
	color: var(--text3);
}
h1,
.h1 {
	font-size: 4.9rem;
	font-weight: 800;
}
h2,
.h2 {
	font-size: 3.9rem;
	font-weight: 700;
}
h3,
.h3 {
	font-size: 3.1rem;
	font-weight: 600;
}
h4,
.h4 {
	font-size: 2.5rem;
	font-weight: 500;
}
.comment1 {
	font-size: 1.6rem;
	font-weight: 400;
}
.comment2 {
	font-size: 1.3rem;
	font-weight: 400;
}
.comment3 {
	font-size: 1rem;
	font-weight: 400;
}
```

> 레이아웃 작성

```css #
.wrap {
	width: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
}
header {
	width: 100%;
	max-width: 200px;
	height: 850px;
	background-color: var(--accent);
}
/***	main	***/
main {
	width: 100%;
	max-width: calc(100% - 200px);
	background-color: var(--text1);
}
main .main_slides {
	width: 100%;
	height: 400px;
	background: var(--primary);
}
main .banner {
	width: 100%;
	height: 200px;
	background: var(--text3);
}
main .board {
	width: 100%;
	height: 250px;
	background: var(--text1);
}

footer {
	width: 100%;
	height: 120px;
	background-color: var(--text3);
}
```

===

## 4. STEP2-A영역-메뉴

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/projects/webDesign/bluemarket/site/step/03-menu)

==- HTML

> `header` 영역에 하위 요소 추가

```html #
<header>
	<!-- h1.logo+nav+ul.spotmenu -->
	<h1 class="logo"><a class="h4" href="#home">The Bluemarket</a></h1>
	<nav>
		<ul class="depth1">
			<li>
				<a href="#">OnSale</a>
				<ul class="depth2">
					<li><a href="#">할인행사</a></li>
					<li><a href="#">덤증정</a></li>
				</ul>
			</li>
			<li>
				<a href="#">기획전</a>
				<ul class="depth2">
					<li><a href="#">봄 먹거리</a></li>
					<li><a href="#">여름 먹거리</a></li>
					<li><a href="#">가을 먹거리</a></li>
					<li><a href="#">겨울 먹거리</a></li>
				</ul>
			</li>
			<li>
				<a href="#">푸른마을 레시피</a>
				<ul class="depth2">
					<li><a href="#">메인요리</a></li>
					<li><a href="#">밑반찬</a></li>
					<li><a href="#">간식</a></li>
					<li><a href="#">브런치</a></li>
				</ul>
			</li>
			<li>
				<a href="#">매장안내</a>
				<ul class="depth2">
					<li><a href="#">신규매장</a></li>
					<li><a href="#">추천매장</a></li>
					<li><a href="#">공지사항</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<ul class="spotmenu">
		<li><a href="#">로그인</a></li>
		<li><a href="#">회원가입</a></li>
	</ul>
</header>
```

> 스크립트 추가를 위해 `</body>` 태그 위에 아래의 코드를 추가한다.
> 시험에서는 jQuery 와 js 둘다 사용가능함

```html #
<script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
<script src="./js/jquery.js"></script>
<!--   <script src="./js/vanila.js"></script> -->
```

==- CSS

> 초기화 코드 작성

```css #
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--primary: #72ae67;
	--background: #eae8dd;
	--accent: #fb748a;
	--text1: #b4b4b4;
	--text2: #6a6a6a;
	--text3: #333;
}
html {
	overflow-y: scroll;
	overflow-x: hidden;
	font-size: 62.5%; /* (10 / 16) * 100% = 62.5% */
	line-height: 1.75;
	font-weight: 400;
}
body {
	font-size: 1.6rem;
	color: #333;
	font-family: 'Pretendard', sans-serif;
}

ul,
li,
ol {
	list-style: none;
}
a {
	text-decoration: none;
	color: var(--text3);
}
h1,
.h1 {
	font-size: 4.9rem;
	font-weight: 800;
}
h2,
.h2 {
	font-size: 3.9rem;
	font-weight: 700;
}
h3,
.h3 {
	font-size: 3.1rem;
	font-weight: 600;
}
h4,
.h4 {
	font-size: 2.5rem;
	font-weight: 500;
}
.comment1 {
	font-size: 1.6rem;
	font-weight: 400;
}
.comment2 {
	font-size: 1.3rem;
	font-weight: 400;
}
.comment3 {
	font-size: 1rem;
	font-weight: 400;
}
```

> A영역 디자인

```css #
header:before {
	content: '';
	display: block;
	position: absolute;
	width: 0%;
	height: 30rem;
	background: #ffffff8a;
	top: 71px;
	left: 200px;
	z-index: 2;
	transition: all 0.3s;
	backdrop-filter: blur(20px);
}
header.on:before {
	width: 100%;
}
header h1.logo {
	width: 20rem;
	height: 4rem;
	line-height: 4rem;
	text-align: center;
}
header h1.logo a {
	color: var(--primary);
}

header nav {
	margin-top: 4rem;
	position: relative;
	z-index: 5;
}
header nav ul.depth1 li {
	position: relative;
	width: 100%;
}
header nav ul.depth2 {
	position: absolute;
	right: -600px;
	top: 0;
	display: none;
	width: 600px;
}
header nav ul.depth2 li {
	display: inline;
}
header nav ul.depth2 li a {
	width: 20%;
	display: inline-block;
}
header nav ul li a {
	display: block;
	padding: 2rem;
	padding-left: 2rem;
	color: var(--text3);
	transition: color 300ms;
}
header nav ul li:hover > a {
	background: var(--accent);
	color: #fff;
}
header .spotmenu {
	display: flex;
	margin-top: 4rem;
	gap: 1rem;
}
header .spotmenu li {
	flex: 1 1 100px;
	text-align: center;
}
header .spotmenu li a {
	display: block;
	padding: 1rem;
	background: var(--background);
	transition: all 0.3s;
}
header .spotmenu li:hover a {
	background: var(--primary);
	color: #fff;
}
```

==- JS

> jQuery

```js #
const depth1 = $('.depth1');
depth1.on({
	mouseenter: function () {
		$('.depth2').css('display', 'block');
		$('header').addClass('on');
	},
	mouseleave: function () {
		$('.depth2').css('display', 'none');
		$('header').removeClass('on');
	},
});
```

> vanilla

```js #
const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'block';
	});
	document.querySelector('header').classList.add('on');
});
depth1.addEventListener('mouseout', function () {
	depth1.querySelectorAll('.depth2').forEach((el) => {
		el.style.display = 'none';
	});
	document.querySelector('header').classList.remove('on');
});
```

===

## 5. STEP4-B영역-슬라이드

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/webDesign/bluemarket/site/step/04-slide)

==- HTML

> main_slides 하위영역 작성

```html #
<main>
	<div class="main_slides">
		<ul class="slide_wrap">
			<li class="slide1">
				<div class="textbox"><span class="h2">푸른마을과 함께하는</span><span class="h1">20% 쿠폰 할인행사</span></div>
			</li>
			<li class="slide2">
				<div class="textbox"><span class="h2">양봉조합과 함께하는</span><span class="h1">천연 프로폴리스 50%</span></div>
			</li>
			<li class="slide3">
				<div class="textbox"><span class="h2">제주농민과 함께하는</span><span class="h1">한라봉 최대 50%</span></div>
			</li>
		</ul>
	</div>
</main>
```

==- CSS

> slide 디자인작성

```css #
/* main_slides */
main .main_slides {
	width: 100%;
	height: 40rem;
}
main .slide_wrap {
	width: 100%;
	height: 40rem;
	position: relative;
	overflow: hidden;
}
main .slide_wrap .textbox {
	max-width: 50%;
	text-align: center;
	color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
main .slide_wrap .textbox span {
	display: block;
}
main .slide_wrap li {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: all 1s ease-in-out;
}
main .slide_wrap li.on {
	opacity: 1;
}
main .slide_wrap li.slide1 {
	background: url(../images/slide1.png) no-repeat center center/cover;
}
main .slide_wrap li.slide2 {
	background: url(../images/slide2.png) no-repeat center center/cover;
}
main .slide_wrap li.slide3 {
	background: url(../images/slide3.png) no-repeat center center/cover;
}
```

==- JS

> jquery

```js #
// slide
const slides = $('.slide_wrap li');
let idx = 0;
function slide() {
	slides.each((i, o) => $(o).removeClass('on'));
	slides.eq(idx).addClass('on');
	idx++;
	if (idx >= slides.length) {
		idx = 0;
	}
}
setInterval(() => {
	slide();
}, 5000);
slides.eq(idx).addClass('on');
```

> vanilla

```js #
// slide
const slides = document.querySelectorAll('.slide_wrap li');
let idx = 0;

function slide() {
	// 현재 슬라이드에서 'on' 클래스 제거
	slides.forEach((slide) => slide.classList.remove('on'));

	// 새로운 슬라이드에 'on' 클래스 추가
	slides[idx].classList.add('on');

	// 인덱스를 증가시키고, 필요한 경우 다시 0으로 설정
	idx++;
	if (idx >= slides.length) {
		idx = 0;
	}
}

setInterval(() => {
	slide();
}, 5000);

// 초기 활성 슬라이드 설정
slides[idx].classList.add('on');
```

===

## 6. STEP5-C영역-배너

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/webDesign/bluemarket/site/step/05-banner)

==- HTML
Content 1

```html #
<div class="banner">
	<ul class="quick_nav">
		<li>
			<a href="#"><span class="icon"></span><span class="txt"></span></a>
		</li>
		<li>
			<a href="#"><span class="icon"></span><span class="txt"></span></a>
		</li>
		<li>
			<a href="#"><span class="icon"></span><span class="txt"></span></a>
		</li>
	</ul>
	<div class="inner">
		<div class="row">
			<div class="col_l"></div>
			<div class="col_m">
				<h3>싱싱한 유기농 채소를 신선할 때 생생배송</h3>
				<p>검증된 친환경 자재만을 사용하여 정성껏 길러내는무농약 농산물, gap(우수농산물관리) 기준에 부합하는 건강하고 안전한 농산물을 신선하게 생생 배송 해드리고 있습니다.</p>
			</div>
			<div class="col_r"></div>
		</div>
	</div>
</div>
```

==- CSS

```css #
/* quick */
main .quick_nav {
	position: fixed;
	right: 1rem;
	top: 1rem;
	width: 4rem;
	height: 19.6rem;
	padding: 2rem;
	background-color: var(--accent);
	z-index: 10;
}
/* banner */
main .banner {
	width: 100%;
	min-height: 20rem;
	padding: 3rem 4rem;
	background-color: var(--background);
}

main .row .col_l {
	flex: 1 1 14rem;
	height: 14rem;
	background: url(../images/banner.png) no-repeat;
}
main .row .col_m {
	flex: 0 1 64rem;
}
main .row p {
	margin-top: 2.4rem;
}

main .row .col_r {
	flex: 1 1 5rem;
	background: url(../images/arrow.png) no-repeat center center;
}
```

===

## 7. STEP6-C영역-게시판

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/projects/webDesign/bluemarket/site/step/06-tab)

==- HTML

> board 하위 작성

```html #
<div class="board">
	<div class="inner">
		<ul class="row buttons">
			<li class="on"><a href="#panel1">공지사항</a></li>
			<li><a href="#panel2">갤러리</a></li>
		</ul>
		<div class="row panels">
			<div id="panel1">
				<ul class="row">
					<li class="col_l">- 푸른마을 제품 후기 작성 EVENT -</li>
					<li class="col_r comment2">2021-01-18</li>
				</ul>
				<ul class="row">
					<li class="col_l">적립금 이용 안내</li>
					<li class="col_r comment2">2021-01-18</li>
				</ul>
				<ul class="row">
					<li class="col_l">입금자를 찾습니다.</li>
					<li class="col_r comment2">2021-01-18</li>
				</ul>
				<ul class="row">
					<li class="col_l">1월 11일 ~ 1월 15일 생산예정상품안내</li>
					<li class="col_r comment2">2021-01-18</li>
				</ul>
			</div>
			<div id="panel2">
				<ul class="row">
					<li class="col_l">
						<a href="#"><img src="./images/gallery1.png" alt="apple" /></a>
					</li>
					<li class="col_l">
						<a href="#"><img src="./images/gallery2.png" alt="apple" /></a>
					</li>
					<li class="col_l">
						<a href="#"><img src="./images/gallery3.png" alt="apple" /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- //inner -->
</div>
</main>
```

==- CSS

> tab 디자인

```css #
/* board */
main .board {
	width: 100%;
	min-height: 25rem;
	padding: 1rem;
}
main .board .buttons li {
	width: 9rem;
	padding: 1rem;
	text-align: center;
	border: 2px solid var(--background);
	background-color: var(--background);
}
main .board .buttons li.on {
	border: 2px solid var(--background);
	background-color: #fff;
}
main .board .buttons li a {
	display: block;
}
main .board .panels {
	max-width: 69.4rem;
	flex-direction: column;
	padding: 1.6rem 5.7rem;
	border: 2px solid var(--background);
	border-top: none;
	position: relative;
}
main .board .panels:after {
	content: '';
	position: absolute;
	right: -2px;
	top: -2px;
	background-color: var(--background);
	width: calc(100% - 17.6rem);
	height: 2px;
}
main .board .panels .row {
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.2rem;
}
main .board .panels .row li {
	cursor: pointer;
}
main .board .panels .row li:hover {
	text-decoration: underline;
}
main .board .panels .row:last-child {
	margin-bottom: 0;
}
main .board .panels #panel2 {
	display: none;
}
```

==- JS

> jQuery

```js #
// tab
const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
	e.preventDefault();
	let tg = $(this).index();
	panels.hide();
	tabBtn.removeClass('on');
	tabBtn.eq(tg).addClass('on');
	panels.eq(tg).show();
});
```

> vanilla

```js #
const tabBtn = document.querySelectorAll('.board .buttons li');
const panels = document.querySelectorAll('.panels>div');

tabBtn.forEach((el, idx) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let tg = idx;
		if (tg > 0) {
			tabBtn[0].classList.remove('on');
		} else {
			tabBtn[1].classList.remove('on');
		}
		tabBtn[tg].classList.add('on');
		panels.forEach((el) => (el.style.display = 'none'));
		panels[tg].style.display = 'block';
	});
});
```

===
[!button variant='primary' icon='play' text='실행화면' target='blank'](https://qwerewqwerew.github.io/source/webDesign/bluemarket/site/final_sub/index.html)
