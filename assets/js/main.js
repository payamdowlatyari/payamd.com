// /*
// 	Author: Payam Dowlatyari 
// 	Personal Website
// 	www.payamd.com
// */

window.onload = () => { document.body.classList.remove('is-preload'); }
window.ontouchmove = () => { return false; }
window.onorientationchange = () => { document.body.scrollTop = 0; }

const overlay2 = document.getElementById("overlay-2");

const on = () => {
	overlay2.style.display = 'block';
}

const off = () => {
	overlay2.style.display = 'none';
}

// title animation first page
var ml4 = {};
ml4.opacityIn = [0, 0.9];
ml4.scaleIn = [0.9, 1];
ml4.scaleOut = [1, 1.1];
ml4.durationIn = 2000;
ml4.durationOut = 2000;
ml4.delay = 2500;

anime.timeline({ loop: true })
	.add({
		targets: '.ml4 .letters-1',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-1',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-2',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-2',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-3',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-3',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-4',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-4',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4',
		opacity: 0,
		duration: 0,
		delay: 0
	});	