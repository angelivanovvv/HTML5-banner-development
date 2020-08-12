var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var startWatch;

function setInitialStates() {
    hideAll(['.logo',
        '.frame1',
        '.frame2',
        '.frame3',
        '.frame4',
        '.claim',
        '.hashtag-canvas',
        '.hashtag_slogan',
        '.bg',
        '.product',
        '.cta',
        '.slogan',
        '.light'
    ]);
}

function preload(preloadPath, preloadImages) {
    var lastLoadedImage = 0;
    loadNext();

    function loadNext() {
        if (lastLoadedImage >= preloadImages.length) {
            init();
        } else {
            var img = new Image();
            img.src = preloadPath + preloadImages[lastLoadedImage];
            img.onload = loadNext;
        }
        lastLoadedImage++;
    }
}

function init() {
    startWatch = new Date().getTime();
    $('.container').show();
    $('.logo').show();
    $('.light').show();

    TweenMax.to('.light', 2, { x: -80, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, overwrite: false });
    seq01();
}

function seq01() {
    var twnDelay = 0;
    $('.frame1').show();

    twnDelay += 0.4;
    TweenMax.from('.frame1', 0.8, { opacity: 0, ease: Power1.easeIn, delay: twnDelay, overwrite: false });
    TweenMax.from('.frame1', 4, { scale: 1.15, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, transformOrigin: '50% 80%', delay: twnDelay, overwrite: false });

    twnDelay += 0.3;
    TweenMax.to('.light', 0.2, { opacity: 0, ease: Power0.easeNone, delay: twnDelay, overwrite: false });

    twnDelay += 1.6;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;
    $('.frame2').show();

    TweenMax.set('.light', { x: 0, opacity: 0.35, z: 0.1, rotationZ: 0.01, delay: twnDelay, overwrite: false });

    twnDelay += 0.2;
    TweenMax.to('.light', 2, { x: -80, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, delay: twnDelay, overwrite: false });

    twnDelay += 0.4;
    TweenMax.to('.frame1', 0.8, { opacity: 0, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    twnDelay += 0.8;
    TweenMax.from('.frame2', 0.8, { opacity: 0, ease: Power1.easeIn, delay: twnDelay, overwrite: false });
    TweenMax.from('.frame2', 4, { scale: 1.15, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, transformOrigin: '50% 40%', delay: twnDelay, overwrite: false });

    twnDelay += 0.5;
    TweenMax.to('.light', 0.2, { opacity: 0, ease: Power0.easeNone, delay: twnDelay, overwrite: false });

    twnDelay += 1.6;
    TweenMax.delayedCall(twnDelay, seq03);
}

function seq03() {
    var twnDelay = 0;
    $('.frame3').show();
    $('.claim').show();

    TweenMax.set('.light', { x: 0, opacity: 0.35, z: 0.1, rotationZ: 0.01, delay: twnDelay, overwrite: false });

    twnDelay += 0.2;
    TweenMax.to('.light', 2, { x: -80, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, delay: twnDelay, overwrite: false });

    twnDelay += 0.4;
    TweenMax.to('.frame2', 0.8, { opacity: 0, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    twnDelay += 0.8;
    TweenMax.from('.frame3', 0.8, { opacity: 0, ease: Power1.easeIn, delay: twnDelay, overwrite: false });
    TweenMax.from('.frame3', 4, { scale: 1.15, z: 0.1, rotationZ: 0.01, ease: Power0.easeNone, transformOrigin: '20% 50%', delay: twnDelay, overwrite: false });

    twnDelay += 0.5;
    TweenMax.to('.light', 0.2, { opacity: 0, ease: Power0.easeNone, delay: twnDelay, overwrite: false });

    twnDelay += 0.5;
    TweenMax.from('.claim', 0.6, { y: 10, opacity: 0, z: 0.1, rotationZ: 0.01, ease: Expo.easeOut, delay: twnDelay, overwrite: false });
    // TweenMax.from('.claim', 0.8, { x: 10, opacity: 0, z: 0.1, rotationZ: 0.01, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    twnDelay += 2.0;
    TweenMax.delayedCall(twnDelay, seq04);
}

function seq04() {
    var twnDelay = 0;
    $('.frame4').show();
    $('.hashtag-canvas').show();
    $('.hashtag_slogan').show();

    TweenMax.from('.frame4', 0.8, { opacity: 0, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    TweenMax.delayedCall(twnDelay, hashtagAnim);
    twnDelay += 0.6;
    TweenMax.from('.hashtag-canvas', 1.2, { y: 20, z: 0.1, rotationZ: 0.01, ease: Power1.easeOut, delay: twnDelay, overwrite: false });
    twnDelay += 0.8;
    TweenMax.from('.hashtag_slogan', 1.2, { opacity: 0, ease: Power1.easeOut, delay: twnDelay});

    twnDelay += 3;
    TweenMax.delayedCall(twnDelay, seq05);
}

function seq05() {
    var twnDelay = 0;
    $('.bg').show();
    $('.product').show();
    $('.cta').show();
    $('.slogan').show();

    TweenMax.to('.hashtag-canvas', 0.8, { opacity: 0, ease: Power1.easeOut, delay: twnDelay });
    TweenMax.to('.hashtag_slogan', 0.8, { opacity: 0, ease: Power1.easeOut, delay: twnDelay });
    TweenMax.from('.bg', 1.0, { opacity: 0, ease: Power1.easeIn, delay: twnDelay });
    TweenMax.delayedCall(twnDelay, productAnim);

    twnDelay += 0.4;
    TweenMax.delayedCall(twnDelay, bgAnim);
    TweenMax.from('.product', 2.5, { x: -75, scale: 0.7, z: 0.1, rotationZ: 0.01, opacity: 0, ease: Power2.easeOut, transformOrigin: 'center 55%', delay: twnDelay });

    twnDelay += 1;
    TweenMax.from('.cta', 0.8, { y: 10, opacity: 0, z: 0.1, rotationZ: 0.01, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    twnDelay += 0.2;
    TweenMax.from('.slogan', 0.8, { y: 10, opacity: 0, z: 0.1, rotationZ: 0.01, ease: Power1.easeOut, delay: twnDelay, overwrite: false });

    // TweenMax.delayedCall(twnDelay, reportRuntime);
}


/*==================Hashtag canvas==================*/
var hashtagImg = new Image();
var crackMask = new Image();
hashtagImg.src = 'assets/hashtag.png';
crackMask.src = 'assets/cracked_mask.png';

var hashtagCanvas = document.querySelector('.hashtag-canvas');
var hashtagCTX = hashtagCanvas.getContext('2d');

var maskX = -66;
var maskY = 0;
var maskIter = 0;

function hashtagAnim() {
    maskIter++;
    maskY = easeOutQuad(maskIter, -124, 26, 70);

    hashtagCTX.clearRect(0, 0, 168, 24);
    hashtagCTX.save();
    hashtagCTX.drawImage(crackMask, maskX, maskY);
    hashtagCTX.globalCompositeOperation = 'source-in';
    hashtagCTX.drawImage(hashtagImg, 0, 26);
    hashtagCTX.restore();

    if (maskY < 0) window.requestAnimationFrame(hashtagAnim);
}

/*==================Background light canvas==================*/
var lightX = 0;
var lightY = 0;
var lightIter = 0;

var bgImg = new Image();
var lightImg = new Image();
bgImg.src = 'assets/bg.jpg';
lightImg.src = 'assets/light.png';

var bgCanvas = document.querySelector('.bg');
var bgCTX = bgCanvas.getContext('2d');

function bgAnim() {
    lightIter += 0.5;
    lightX = easeOutCubic(lightIter, 0, -300, 60);

    bgCTX.clearRect(0, 0, 300, 250);
    bgCTX.drawImage(bgImg, 0, 0);
    bgCTX.globalCompositeOperation = 'soft-light';
    bgCTX.drawImage(lightImg, lightX, lightY);

    if (lightX > -300) window.requestAnimationFrame(bgAnim);
}

/*=================Product shadow canvas==================*/
var shadowX = 0;
var shadowY = 30;
var shadowIter = 0;

var productImg = new Image();
var shadowImg = new Image();
productImg.src = 'assets/product.png';
shadowImg.src = 'assets/product-shadow.png';

var productCanvas = document.querySelector('.product');
var productCTX = productCanvas.getContext('2d');

function productAnim() {
    shadowIter++;
    shadowX = easeOutQuad(shadowIter, -25, -200, 180);

    productCTX.clearRect(0, 0, 72, 158);
    productCTX.drawImage(productImg, 0, 0);
    productCTX.globalCompositeOperation = 'multiply';
    productCTX.drawImage(shadowImg, shadowX, shadowY);

    if (shadowX > -238) window.requestAnimationFrame(productAnim);
}

/*====================================*/

function easeOutQuad(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (currentIteration /= totalIterations) * currentIteration + startValue;
}

function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}

function hideAll(elements_to_hide) {
    for (var i = 0; i < elements_to_hide.length; i++) {
        $(elements_to_hide[i]).hide();
    }
}

function reportRuntime() {
    var elapsed = new Date() - startWatch;
    console.log(elapsed / 1000 + 'seconds');
}

$(window).on('load', function() {
    setInitialStates();
    preload('assets/', [
        'frame1-3.jpg',
        'frame2.jpg',
        'bg.jpg',
        'logo.png',
        'claim.png',
        'hashtag.png',
        'hashtag-translate.png',
        'slogan.png',
        'cta.png',
        'product.png'
    ]);
});
