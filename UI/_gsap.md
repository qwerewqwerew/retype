

#### 3.6.2. 가로방향 스크롤

[!ref target='blank' text=':icon-play:미리보기'](https://qwerewqwerew.github.io/source/js/deep/gsap/07-horizontal.html)

#### 3.6.3. html

> 아래의 cdn 추가

```html #
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
<script src="https://assets.codepen.io/16327/ScrollSmoother.min.js"></script>
<script src="https://assets.codepen.io/16327/ScrollTrigger.min.js"></script>
```

> 구조작성

```html
<div class="wrapper">
	<div class="factsContainer">
		<h2>안녕하세요</h2>
		<div class="factsContainer_sm">
			<div class="fact">
				<h3>신입 프론트엔드 김망고입니다:</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>일머리 좋은 신입 프론트엔드입니다</h3>
			</div>
			<div class="fact">
				<h3>좋아하는 음식</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>떡순이</h3>
			</div>
			<div class="fact">
				<h3>자신있는 기술스택</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>자바스크립트🤙</h3>
			</div>
			<div class="fact">
				<h3>앞으로 공부하려고 하는 기술스택</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>앵귤러, 노드JS, 타입스크립트</h3>
			</div>
			<div class="fact">
				<h3>좋아하는 가수</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>뉴진스 민지</h3>
			</div>
			<div class="fact">
				<h3>좋아하는 것</h3>
				<img src="https://source.unsplash.com/random" alt="" />
				<h3>강아지</h3>
			</div>
		</div>
	</div>
	<div class="socialContainer">
		<h2>저를 안뽑으시면 내일도 제생각이 나실꺼에요</h2>
	</div>
</div>
```

#### 3.6.4. css

```css
* {
	margin: 0;
	padding: 0;
}

.wrapper {
	background: #1d373f;
	overflow-x: hidden;
}

.factsContainer {
	min-height: 100vh;
	padding: 0em 2em;
	text-align: center;
	line-height: 10vh;
}

.factsContainer h2 {
	font-size: 1.8em;
	transform: scale(0);
	padding: 2em 0em;
	margin-bottom: 15vh;
	color: #f0c368;
}

.factsContainer_sm,
.factsContainer_sm1 {
	display: flex;
	width: 300vw;
}

.fact {
	display: flex;
	flex-direction: column;
	height: 40vh;
	flex: 1;
	justify-content: space-between;
	padding: 1em;
	align-items: center;
	color: #f0c368;
}

.fact img {
	width: 25vw;
	height: 100vh;
	margin: 1em;
}

.socialContainer {
	width: 100vw;
	height: 100vh;
	color: white;
	font-size: 5em;
}
```

#### 3.6.5. js

```js
//애니메이션 해야할 대상이 많으므로 전체 타임라인에 부모요소를 추가한다
let scroll_tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.factsContainer',
		markers: true,
		start: 'top top', //시작점 설정 윗방향기준 뷰포드 중앙에서 시작
		end: '+=300', //300px 떨어진거리에서 끝
		scrub: true,
	},
});
let facts = document.querySelectorAll('.fact');
let factW = document.querySelector('.factsContainer_sm').clientWidth;
console.log(factW);
scroll_tl.to('.factsContainer h2', {
	scale: 1.5,
	duration: 1,
	ease: 'slow',
});
scroll_tl.to(facts, {
	xPercent: -85 * (facts.length - 1), //x이동거리
	scrollTrigger: {
		trigger: '.factsContainer_sm',
		start: 'center center',
		pin: true,
		scrub: 1,
		snap: 1 / (facts.length - 1),
		// base vertical scrolling on how wide the container is so it feels more natural.
		// end: () => `+=${smallFactsContainer.offsetWidth}`
		end: () => `+=${factW}`,
	},
});
gsap.config({ trialWarn: false });
```

<aside>
📢 **코드설명**

- **let scroll_tl**=애니메이션 해야할 대상이 많으므로 전체 타임라인에 부모요소를 추가한다.
- **start = 스크롤의 시작방향과 지점 설정**

- end: 끝점 설정
</aside>

#### 3.6.6. 옵션설명

onLeave를 이용해서 섹션범위가 끝날때 콜백함수실행

또 각각의 모션에서 onComplete를 이용해서 모션이 끝나는시점도 콜백이 가능
