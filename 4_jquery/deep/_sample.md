---
icon: hubot
label: 12.슬라이드
order: 100
author:
name: 코알라코딩
avatar: koala
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
category: [jQuery, javascript]
tags: [jQuery, javascript, jQuery + javascript, carousel]
---


### 목차 <!-- omit in toc -->
- [1. 기본 슬라이드](#1-기본-슬라이드)
- [2. 메인비주얼](#2-메인비주얼)



## 1. 기본 슬라이드

+++ 지시문

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/jq/12/12b-jq.html)

 [!badge variant='primary' size='l' text='다운로드' icon='download'](https://qwerewqwerew.github.io/source/jq/12/img.zip)

+++ HTML

```html # html
<body>
  <div id="content">
    <h3>Simple Crossfade Waterfalls Slideshow </h3>
    <ul id="crossfade">
       <li>
        <a href="http://en.wikipedia.org/wiki/Agua_Azul"><img src="./img/600/AguaAzul.jpg" alt="Agua Azul" /></a>
        <p>Agua Azul, Mexico</p>
      </li>
      <li>
        <a href="http://en.wikipedia.org/wiki/Burney_Falls"><img src="./img/600/BurneyFalls.jpg" alt="Burney Falls" /></a>
        <p>Burney Falls, California, USA</p>
      </li>
      <li>
        <a href="http://en.wikipedia.org/wiki/Venezuala"><img src="./img/600/Cachoeira_do_Pacheco.jpg" alt="Cachoeira do Pacheco" /></a>
        <p>Cachoeira do Pacheco, Venezuela</p>
      </li>
    </ul>
</body>
```

+++ CSS

```css # css
#crossfade {
	position: relative;
	margin: auto;
	padding: 0;
	list-style-type: none;
	width: 600px;
	height: 400px;
	overflow: hidden;
}

#crossfade li {
	position: absolute;
	width: 600px;
	height: 400px;
}

#crossfade p {
	position: absolute;
	bottom: 0;
	padding: 20px;
	color: #fff;
	background: #000;
	background-color: rgba(0, 0, 0, 0.6);
	margin: 0;
	left: 0;
	right: 0;
}
```

+++ JS

```js # JQ
$(() => {
	$('#crossfade li').hide().filter(':first').show();
	setInterval(slideshow, 3000);
	function slideshow() {
		$('#crossfade li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('#crossfade');
	}
});
```

+++



## 2. 메인비주얼

+++ 코드

[!badge icon='play' iconAlign='left' variant='info' size='xl' corners='round' text='미리보기' target='blank'](./12/final/12-jq.html) [!badge variant='primary' size='l' text='이미지다운로드' icon='file'](./12/final/img.zip)

+++ HTML

```html # index.html
<div id="wrap">
	<div id="brandVisual">
		<ul>
			<li class="visual_0"><a href="#">배너이미지1</a></li>
			<li class="visual_1"><a href="#">배너이미지2</a></li>
			<li class="visual_2"><a href="#">배너이미지3</a></li>
		</ul>
	</div>
	<div class="btnImg">
		<img src="img/left.png" class="prev" width="30" height="50" alt="" />
		<img src="img/right.png" class="next" width="30" height="50" alt="" />
	</div>
	<ul id="buttonList">
		<li class="on"><a href="#">배너1</a></li>
		<li><a href="#">배너2</a></li>
		<li><a href="#">배너3</a></li>
	</ul>
</div>
```

+++ CSS

```css # reset.css
/* common */
html {
	width: 100%;
	height: 100%;
	overflow-y: scroll;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0px;
	padding: 0px;
	font: inherit;
	vertical-align: baseline;
}
body {
	font-size: 12px;
	font-family: Dotum, Arial;
	color: #74767a;
	line-height: 120%;
}
a,
a:link,
a:visited {
	color: #74767a;
	text-decoration: none;
}
ul,
ol {
	list-style: none;
}
table,
fieldset,
th,
td,
img {
	border: none;
}
img,
input,
select {
	vertical-align: middle;
}
```

```css # style.css
#brandVisual ul {
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 500px;
	display: flex;
}
#brandVisual ul li {
	position: absolute;
	width: 100%;
	height: 100%;
}
#brandVisual ul li a {
	display: block;
	text-indent: -9999px;
} /* 글씨 제거 */

/* visual_0, visual_1, visual_2 위치정렬 */
#brandVisual .visual_0 {
	left: 0;
	background: url(img/0.png) 50% 0 no-repeat;
}
#brandVisual .visual_1 {
	left: 100%;
	background: url(img/1.png) 50% 0 no-repeat;
}
#brandVisual .visual_2 {
	left: 200%;
	background: url(img/2.png) 50% 0 no-repeat;
}

/* 화살표 */
.btnImg {
	position: relative;
	top: -250px;
	width: 100%;
}
.btnImg .prev {
	position: absolute;
	left: 100px;
}
.btnImg .next {
	position: absolute;
	right: 100px;
}

/* 버튼 위치 지정 */
#buttonList {
	display: flex;
}
#buttonList li {
	background: url(img/btnVisual.png) 0 -16px no-repeat;
	width: 14px;
	height: 15px;
	position: relative;
	left: 50%;
	top: -135px;
	overflow: hidden;
	margin: 0 5px;
	cursor: pointer;
}
#buttonList li a {
	display: block;
	text-indent: -9999px;
} /* 글씨 제거 */
#buttonList li.on {
	background-position: 0 0;
} /* 활성화된 버튼 */
```

+++ JS

```js
$(function () {
	var visual = $('#brandVisual>ul>li'); // 슬라이드 이미지
	var button = $('#buttonList>li'); // 버튼
	var leftBtn = $('.btnImg .prev');
	var rightBtn = $('.btnImg .next');
	var current = 0; // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함

	var counterEl = '<div class="counter">1';
	$('#wrap').append(counterEl);
	var counter = $('.counter');

	timer();
	function timer() {
		setIntervalId = setInterval(function () {
			var prev = visual.eq(current);
			var pn = button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++;
			if (current == visual.length) current = 0;
			var next = visual.eq(current);
			var pnn = button.eq(current);
			move(next, '100%', 0);
			pnn.addClass('on');
			cnt(current);
		}, 3000);
	}

	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' });
	}

	function cnt(num) {
		counter.html(`${num + 1}`);
	}
	//버튼을 클릭 했을 때
	button.on({
		click: function () {
			var tg = $(this);
			var i = tg.index(); // 선택한 버튼의 인덱스 번호

			button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
			tg.addClass('on'); // 선택한 버튼에 'on' 활성화

			move1(i);
			cnt(i);
		},
	});

	function move1(i) {
		if (current == i) return; // 현재 보이는 이미지가 i랑 같으면 종료

		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({ left: '100%' }).stop().animate({ left: 0 }, 500); // 이미지 이동

		current = i;
	}

	//호버시 멈추게 하는 기능
	$('#wrap').on({
		mouseover: function () {
			clearInterval(setIntervalId);
		},
		mouseout: function () {
			timer();
		},
	});

	/* 화살표클릭 */
	rightBtn.click(function () {
		var prev = visual.eq(current);
		var pn = button.eq(current);

		move(prev, 0, '-100%');
		pn.removeClass('on');

		current++;

		if (current == visual.length) current = 0;

		var next = visual.eq(current);
		var pnn = button.eq(current);
		move(next, '100%', 0);
		pnn.addClass('on');
		cnt(current);

		return false;
	});

	leftBtn.click(function () {
		var prev = visual.eq(current);
		var pn = button.eq(current);
		move(prev, 0, '100%');
		pn.removeClass('on');

		current--;

		if (current == -visual.length) current = 0;

		var next = visual.eq(current);
		var pnn = button.eq(current);
		move(next, '-100%', 0);
		pnn.addClass('on');

		/* 카운터에 인덱스 넘겨줌 */
		if (current < 0) {
			current = visual.length - 1;
		}
		cnt(current);
		return false;
	});
});
```

+++
