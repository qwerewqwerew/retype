//js
function js(params) {
	addEventListener('load', function () {
		addEventListener('scroll', function () {
			if (scrollY >= 100) {
				document.querySelector('.article1').classList.add('on');
			}
			if (scrollY >= 500) {
				document.querySelector('.left1').classList.add('on');
			}
			if (scrollY >= 1000) {
				document.querySelector('.right1').classList.add('on');
			}
		});
	});
}
jq();
function jq(params) {
	const sections = $('section');
	let speed = Math.floor(sections.outerHeight() * 0.2);
	let topArr = [];
	let winSCT;

	sections.each((idx, section) => {
		$(section).addClass(`bg${idx + 1}`);
		const sectionTop = $(section).offset().top;
		topArr.push(sectionTop);
	});

	$(window).on('scroll', () => {
		winSCT = $(window).scrollTop();
		if (winSCT > topArr[0] - speed && winSCT < topArr[1]-speed ) {
			sections.eq(0).find('.box').css('transform', 'translateX(0%)');
		}
		if (winSCT > topArr[1] - speed && winSCT < topArr[2]) {
			sections.eq(1).find('.bg3').stop().delay(100).animate({ top: 0, opacity: 1 }, 500, 'swing');
			sections.eq(1).find('.bg4').stop().delay(200).animate({ top: -100, opacity: 1 }, 800, 'swing');
			sections.eq(1).find('.bg5').stop().delay(300).animate({ top: -200, opacity: 1 }, 1100, 'swing');
		}
	});
}

if (winSCT > topArr[2] - speed && winSCT < topArr[3]) {
	return;
}
if (winSCT > topArr[3] - speed && winSCT < topArr[4]) {
	return;
}
if (winSCT > topArr[4] - speed ) {
	return;
}