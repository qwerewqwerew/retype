---
order: 100
label: 6.containerQuery
author: 코알라코딩
name: 코알라코딩
avatar: koala
icon: square
link: https://www.youtube.com/channel/UCMb94yucTNsjIJqD8C8lO2Q
category: [css]
tags: [css, responsive]
---

## 1. 컨테이너쿼리 VS 미디어쿼리

:::box

미디어 쿼리(Media Query): 미디어 쿼리는 CSS3에 소개된 기능으로, 브라우저의 뷰포트 너비와 같은 조건에 따라 스타일을 적용할 수 있게 해주는 기능입니다. 따라서 브라우저 창의 크기에 따라 다른 스타일을 적용하거나, 특정 뷰포트 크기에서만 특정 CSS를 적용하는 등의 작업이 가능합니다. 예를 들어, 미디어 쿼리를 사용해서 브라우저 창의 너비가 600px 미만일 때는 배경색을 빨간색으로, 600px 이상일 때는 파란색으로 변경하는 CSS를 작성할 수 있습니다.

컨테이너 쿼리(Container Query): 컨테이너 쿼리는 아직 웹 표준으로 채택되지 않은 기능이지만, 미디어 쿼리가 뷰포트를 기준으로 스타일을 적용하는 반면, 컨테이너 쿼리는 특정 요소의 너비를 기준으로 스타일을 적용합니다. 따라서 부모 요소의 크기에 따라 자식 요소의 스타일을 변경하는 등의 작업이 가능합니다.

:::

## 2. 컨테이너쿼리

:[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

1. container 쿼리는 viewport기준이 아닌, 특정 요소의 크기에 따라 반응적으로 스타일링이 가능하다.
2. container 쿼리를 사용하기 위해선 `container-name`, `container-type` 지정이 필요하다.

### 2.1. container 쿼리 사용하기

#### 2.1.1. container-type

:::box

- container-type을 사용해 특정 요소를 쿼리 컨테이너로 지정할 수 있다.
- 자식요소는 쿼리 컨테이너의 사이즈에 따라 반응적으로 스타일링할 수 있다.
- `container-type`에는 `size`, `inline-size` 등이 존재한다.

:::

#### 2.1.2. container-type

:::box

- container-name 쿼리 컨테이너의 이름을 지정한다.
- 지정된 이름은 `@container container-name` 형식으로 쓰인다.

:::

```css
.parent {
	container-type: inline-size;
	container-name: parent; /* 쿼리 컨테이너 이름 지정 */
}
```

```css
@container parent (min-width: 300px) {
	/* 쿼리 컨테이너 이름 사용 */
	.child {
		/* styling */
	}
}
```

## 3. 예제코드

### 3.1. 컨테이너 요소의 너비에 따라 배경색 변경

||| :icon-code: Code

```html
<h2>container-type: inline-size</h2>

- width 크기변화:
<input type="range" value="200" id="width" name="width" min="200" max="500" onInput="onInput(event)" /> <br />

<hr />

<div class="parent">
	<div class="child"></div>
</div>
```

||| :icon-code: Code

```css
.parent {
	container-type: inline-size;
	container-name: child-style;
	border: 3px solid gray;
	width: 200px;
	height: 200px;
	display: grid;
}
.child {
	width: 100px;
	height: 100px;
	background: blue;
}

@container child-style (max-width: 400px) {
	.child {
		background: red;
	}
}
```

|||

### 요소의 너비에 따라 컨텐츠의 배열변경

||| :icon-code: Code

```html
<main>
	<h1>The Polar Bear</h1>

	<div class="info">
		<p>ℹ️ Your browser does not support Container Queries <em>(or only supports an older syntax)</em>. To plug this hole, <a href="https://www.npmjs.com/package/container-query-polyfill" target="_top">a polyfill</a> has been loaded.</p>
	</div>

	<div class="animalcards">
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://source.unsplash.com/PX_1j-M59I8" alt="Photo of a polar bear walking" width="1080" height="720" />
					<a href="https://unsplash.com/photos/PX_1j-M59I8" target="_blank">Polar bear walking</a> by <a href="https://unsplash.com/@dtbosse" target="_blank">Daniel Bosse</a>
				</div>
				<div class="animalcard__description">
					<p>The polar bear <em>(Ursus maritimus)</em> is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://source.unsplash.com/PX_1j-M59I8" alt="Photo of a polar bear walking" width="1080" height="720" />
					<a href="https://unsplash.com/photos/PX_1j-M59I8" target="_blank">Polar bear walking</a> by <a href="https://unsplash.com/@dtbosse" target="_blank">Daniel Bosse</a>
				</div>
				<div class="animalcard__description">
					<p>The polar bear <em>(Ursus maritimus)</em> is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.</p>
				</div>
			</div>
		</div>
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://source.unsplash.com/PX_1j-M59I8" alt="Photo of a polar bear walking" width="1080" height="720" />
					<a href="https://unsplash.com/photos/PX_1j-M59I8">Polar bear walking</a> by <a href="https://unsplash.com/@dtbosse">Daniel Bosse</a>
				</div>
				<div class="animalcard__description">
					<p>The polar bear <em>(Ursus maritimus)</em> is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.</p>
				</div>
			</div>
		</div>
	</div>

	<p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>

	<p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>

	<h2>Aenean ac pellentesque ante</h2>

	<div class="animalcard-wrapper">
		<div class="animalcard">
			<div class="animalcard__image">
				<img src="https://source.unsplash.com/PX_1j-M59I8" alt="Photo of a polar bear walking" width="1080" height="720" />
				<a href="https://unsplash.com/photos/PX_1j-M59I8" target="_blank">Polar bear walking</a> by <a href="https://unsplash.com/@dtbosse" target="_blank">Daniel Bosse</a>
			</div>
			<div class="animalcard__description">
				<p>The polar bear <em>(Ursus maritimus)</em> is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.</p>
			</div>
		</div>
	</div>

	<p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>

	<div class="inset">
		<div class="animalcard-wrapper">
			<div class="animalcard">
				<div class="animalcard__image">
					<img src="https://source.unsplash.com/PX_1j-M59I8" alt="Photo of a polar bear walking" width="1080" height="720" />
					<a href="https://unsplash.com/photos/PX_1j-M59I8" target="_blank">Polar bear walking</a> by <a href="https://unsplash.com/@dtbosse" target="_blank">Daniel Bosse</a>
				</div>
				<div class="animalcard__description">
					<p>The polar bear <em>(Ursus maritimus)</em> is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.</p>
				</div>
			</div>
		</div>
	</div>

	<p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>

	<p>Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.</p>
</main>
```

||| :icon-code: Code

```css
.animalcard {
	align-content: start;
	border: 1px solid #ccc;
	background: rgba(0, 0, 0, 0.05);
}
.animalcard__image {
	grid-area: image;
	font-size: 0.5em;
	font-style: italic;
	text-align: center;
}
.animalcard__description {
	grid-area: description;
	font-size: 0.9em;
	text-align: center;
}
.animalcard > * > :first-child {
	margin-top: 0;
}
.animalcard > * > :last-child {
	margin-bottom: 0;
}

/** Container Queries in Action: If enough space is available, place image next to description **/
.animalcard-wrapper {
	container-type: inline-size;
}
.animalcard {
	/* SMALL LAYOUT: Image stacked on top of Description */
	display: grid;
	grid-template: 'image' 'description' / 1fr;
	gap: 1em;
	padding: 1em;
}
@container (min-width: 480px) {
	/* MEDIUM LAYOUT: Image next to Description (1fr each) */
	.animalcard {
		gap: 2em;
		padding: 2em;
		grid-template: 'image description' / 1fr 1fr;
	}

	.animalcard__description {
		text-align: left;
	}
}
@container (min-width: 1120px) {
	/* LARGE LAYOUT: Large Image next to Description */
	.animalcard {
		grid-template-columns: 2fr 1fr;
	}
}

/* Set of animalcards: Place nested elements next to eachother */
.animalcards {
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
}

/* Inset in content */
.inset {
	width: 100%;
	max-width: 55rem;
	margin: 1em 1em 1em 0;
}
@media (min-width: 55rem) {
	.inset {
		float: left;
	}
}

/* Show/Hide Warning if no container Queries Support */
@supports (container-type: inline-size) {
	.info {
		display: none;
	}
}
.info,
.warning {
	padding: 1em;
	border: 1px solid #123456;
	background: rgba(205 230 255 / 0.8);
}
.warning {
	background: rgba(255 255 225 / 0.9);
}
.info p,
.warning p {
	margin: 0;
	padding: 0;
	color: #123456;
}

/* NON ESSENTIAL STYLES BELOW */
html,
body {
	margin: 0;
	padding: 0;
	background: #fff;
}

body {
	font-size: clamp(1.1em, calc(0.5em + 1vw), 2.5em);
	line-height: 1.42;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

main {
	font-weight: 300;
	width: 90vw;
	max-width: 80rem;
	margin: 0 auto;
}

main > * {
	margin: 0;
}
main > * + * {
	margin-top: 1em;
}

main img {
	width: 100%;
	height: auto;
}

.full-bleed {
	--source: 'https://brm.us/full-bleed';
	width: 100vw;
	margin-left: 50%;
	transform: translateX(-50%);
}

.text-center {
	text-align: center;
}
```

|||
