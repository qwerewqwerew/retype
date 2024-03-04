---
label: Testmonial
order: 100
category:
  - css
  - projects
tags: [css, grid, project, responsive, 반응형, 탈그리드, masonry]
---

[:icon-play:미리보기](./final/index.html)

[:icon-download:예제파일 다운로드](./media.zip)

[!badge variant='contrast' size='xl' text='index.html']

```html #
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="" />
		<title>Testimonials - CSS Grid</title>
		<link rel="shortcut icon" href="./media/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="./style.css" />
		<link rel="stylesheet" href="./responsive.css" />
		<link rel="stylesheet" href="./utility.css" />
	</head>

	<body>
		<section class="testimonials">
			<div class="heading">
				<h1 class="h-c">Testimonials 📋</h1>
			</div>
			<div class="container">
				<div class="items item1 w-t">
					<img src="./media/testimonials-1.png" alt="" />
					<p class="name">Kelly Sikkema</p>
					<p class="title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
					<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate numquam doloribus placeat quia natus dolor! Expedita sint nobis vero eligendi, nemo consectetur, voluptas voluptatibus dignissimos in ullam inventore distinctio maxime dolorem omnis. Unde, odit commodi itaque vero accusantium amet quisquam dignissimos maxime, placeat culpa modi iusto totam cum magnam.</p>
				</div>
				<div class="items item2 w-t">
					<img src="./media/testimonials-2.png" alt="" />
					<p class="name">Ethan Hoover</p>
					<p class="title">Lorem ipsum dolor sit</p>
					<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ratione aliquam voluptate alias error consequuntur fugiat suscipit perspiciatis velit dolore.</p>
				</div>
				<div class="items item3">
					<img src="./media/testimonials-3.png" alt="" />
					<p class="name">Joseph Pearson</p>
					<p class="title">Lorem ipsum dolor sit amet consectetur adipisicing</p>
					<p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora unde ducimus ab nisi asperiores quaerat debitis repudiandae officiis vero recusandae deleniti culpa quos deserunt nam quibusdam dicta, ullam nostrum aperiam aliquam dolorem hic, iste alias sit eligendi. Deleniti eos labore nulla dolorum nobis commodi aut officiis! Ipsa veritatis atque quis similique placeat pariatur repellendus assumenda quo a soluta rem accusantium voluptatum laborum excepturi exercitationem ab, eveniet facilis doloribus sunt? Optio!</p>
				</div>
				<div class="items item4">
					<img src="./media/testimonials-4.png" alt="" />
					<p class="name">Daniel Lincoln</p>
					<p class="title">Lorem ipsum dolor sit</p>
					<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ratione aliquam voluptate alias error consequuntur fugiat suscipit perspiciatis velit dolore.</p>
				</div>
				<div class="items item5 w-t">
					<img src="./media/testimonials-5.png" alt="" />
					<p class="name">Mike Austin</p>
					<p class="title">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat! Odio blanditiis aspernatur nesciunt quo dolorem asperiores atque, non reiciendis exercitationem velit debitis voluptate, cumque excepturi. Itaque, iure non perspiciatis repellendus necessitatibus vel distinctio corrupti consequuntur doloremque recusandae alias, nulla impedit, tempora nisi dolorum. Suscipit, eveniet? Dolorum, pariatur. Consequuntur, eum.</p>
				</div>
			</div>
		</section>
	</body>
</html>
```

[!badge variant='contrast' size='xl' text='style.css']

```css #
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('utility.css');
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

html {
	font-size: 10px;
}

.testimonials {
	background: #ecf2f7;
	padding: 4rem 0;
}

.heading h1 {
	font-size: 3rem;
	margin: 3rem;
}

.container {
	width: 95%;
	max-width: 1280px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas: 'item1 item1 item2 item3' 'item4 item5 item5 item3';
	gap: 1.5rem;
}

.items {
	border-radius: 5px;
	padding: 1.5rem;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'image name' 'title title' 'description description';
	row-gap: 1.5rem;
	align-content: start;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.items img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	grid-area: image;
}

.items .name {
	font-size: 1.6rem;
	grid: name;
	align-self: center;
	padding-left: 1rem;
	font-weight: 600;
}

.items .title {
	font-size: 1.8rem;
	grid-area: title;
	font-weight: 600;
}

.items .description {
	font-size: 1.6rem;
	grid-area: description;
}

.items .description::before {
	content: '"';
}

.items .description::after {
	content: '"';
}

.item1 {
	background: #733fc7 url('./media/quotation.png') no-repeat top 10% right 20px;
	background-size: 50px;
	grid-area: item1;
}

.item2 {
	background: #49556c;
	grid-area: item2;
}

.item3 {
	background: #fefefe;
	grid-area: item3;
}

.item4 {
	background: #fefefe;
	grid-area: item4;
}

.item5 {
	background: #181f2c;
	grid-area: item5;
}
```

[!badge variant='contrast' size='xl' text='utility.css']

```css #
.b-t {
	color: #000000;
}

.w-t {
	color: #ffffff;
}

.h-c {
	display: flex;
	justify-content: center;
}
```

[!badge variant='contrast' size='xl' text='responsive.css']

```css #
@media (min-width: 1279px) {
}

@media (max-width: 1279px) {
}

@media (max-width: 991px) {
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-template-areas: 'item1 item1 item2' 'item4 item5 item5' 'item3 item3 item3';
		gap: 1.5rem;
	}
}

@media (max-width: 768px) {
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-template-areas: 'item1' 'item2' 'item3' 'item4' 'item5';
		gap: 1.5rem;
	}
}

@media (max-width: 480px) {
}
```
