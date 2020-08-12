/*=== GLOBAL VARS ===*/
var loops = 2,
	loopCounter = 0,
	delay,
	container;

/*=== Execute code when HTML page is load ===*/
window.onload = function() {
	hideContainer();
	animation();
};

/*=== Function which hide banner container ===*/
function hideContainer(){
	container = document.getElementById('container');
	container.style.display = 'none';
}
/*=== Function which animate banner ===*/
function animation () {
	var delay;

	loopCounter++;
	/*Showing container*/
	container.style.display = 'block';
	delay = 0;
	TweenLite.from('#search', 1.5, {
		alpha:0,
		rotation:360,
		scale:0.1,
		delay:delay,
	});/*s*/
	
	delay += 2;
	TweenLite.to('#search', 1, {
		alpha:0,
		scale:2,
		delay:delay,
	});/*s*/

	delay += 0.2;
	TweenLite.from('#post', 1.5, {
		alpha:0,
		rotation:360,
		scale:0.1,
		delay:delay,
	});/*s*/

	delay += 2;
	TweenLite.to('#post', 1, {
		alpha:0,
		scale:2,
		delay:delay,
	});/*s*/

	delay += 0.2;
	TweenLite.from('#glance', 1.5, {
		alpha:0,
		rotation:360,
		scale:0.1,
		delay:delay,
	});/*s*/

	delay += 2;
	TweenLite.to('#glance', 1, {
		alpha:0,
		scale:2,
		delay:delay,
	});/*s*/

	delay += 0.2;
	TweenLite.from('#text', 1.5, {
		alpha:0,
		rotation:360,
		scale:0.1,
		delay:delay,
	});/*s*/

	delay += 2;
	TweenLite.to('#text', 1, {
		alpha:0,
		scale:2,
		delay:delay,
	});/*s*/
	
	delay += 0.2;
	TweenLite.from('#email', 1.5, {
		alpha:0,
		rotation:360,
		scale:0.1,
		delay:delay,
	});/*s*/

	delay += 2;
	TweenLite.from('#eyes', 1.5, {
		alpha:0,
		scale:0.5,
		delay:delay,
		ease:Expo.easeOut,
	});/*s*/
	
	delay += 0.1;
	TweenLite.from('#it-can-wait', 1.5, {
		alpha:0,
		scale:0.5,
		delay:delay,
		ease:Expo.easeOut,
	});/*s*/
	
	delay += 0.2;
	TweenLite.from('#learn-more', 1.5, {
		alpha:0,
		scale:0.5,
		delay:delay,
		ease:Expo.easeOut
	});/*s*/
	
	delay += 2;
	TweenLite.delayedCall(delay, replay);
}
/*=== Function which loops banner animation as much as we want ===*/
function replay(){
	if (loopCounter < loops) {
		TweenLite.set(['#search',
						'#post',
						'#glance',
						'#text',
						'#email',
						'#eyes',
						'#it-can-wait',
						'#learn-more'], {alpha: 1, x:0, scale:1});
		animation();
		console.log(loopCounter);
	}
}
