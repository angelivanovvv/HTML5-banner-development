var startWatch;

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

function setInitialStates() {
    hideAll(['.frame_1', '.frame_2', ".frame_3", ".cta", ".copy_1", ".copy_2"]);
}

function init() {
    setInitialStates();
    addListeners();
    startWatch = new Date().getTime();
    $('.container').show();
    seq01();
}

function seq01() {
    var twnDelay = 0;
    $('.frame_1').show();
    $('.copy_1').show();


    twnDelay += 0.5;
    TweenMax.from($('.copy_1'), 1.0, { opacity: 0, y: 20, ease: Power1.easeOut, force3D: true, delay: twnDelay });
    twnDelay += 2.0;
    TweenMax.to($('.copy_1'), 1.0, { opacity: 0, ease: Power4.easeInOut, force3D: true, delay: twnDelay });

    // twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;
    $('.frame_2').show();
    $('.copy_2').show();

    TweenMax.to($('.frame_1'), 1.5, { x: -534, ease: Power3.easeInOut, delay: twnDelay });
    TweenMax.from($('.frame_2'), 1.5, { x: 534, ease: Power3.easeInOut, delay: twnDelay });

    twnDelay += 1.5;
    TweenMax.from($('.copy_2'), 1.0, { opacity: 0, y: 20, ease: Power1.easeOut, force3D: true, delay: twnDelay });
    twnDelay += 2.5;
    TweenMax.to($('.copy_2'), 1.0, { opacity: 0, ease: Power4.easeInOut, force3D: true, delay: twnDelay });

    TweenMax.delayedCall(twnDelay, seq03);
}

function seq03() {
    var twnDelay = 0;
    $('.frame_3').show();
    $('.cta').show();
    twnDelay += 1.0;
    TweenMax.to($('.frame_2'), 1.0, { opacity: 0, ease: Expo.easeInOut, delay: twnDelay });
    TweenMax.to($('.logo'), 1.0, { opacity: 0, ease: Expo.easeInOut, delay: twnDelay });
    TweenMax.from($('.frame_3'), 1.0, { opacity: 0, ease: Expo.easeInOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($('.elektrolux'), 0.8, { opacity: 0, ease: Power3.easeInOut, delay: twnDelay });

    twnDelay += 0.3;
    TweenMax.from($('.copy_3'), 1.0, { y: 20, opacity: 0, ease: Power1.easeOut, force3D: true, delay: twnDelay });

    twnDelay += 0.3;
    TweenMax.from($('.copy_4'), 1.0, { y: 20, opacity: 0, ease: Power1.easeOut, force3D: true, delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($('.balloon_hat'), 0.5, { scale: 0, opacity: 0, ease: Back.easeOut.config(4), delay: twnDelay });

    twnDelay += 0.5;
    TweenMax.from($('.line_1'), 0.5, { scaleX: 0, ease: Power2.easeInOut, transformOrigin: '100% 0%', delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($('.line_2'), 0.5, { scaleY: 0, ease: Power2.easeInOut, transformOrigin: '100% 0%', delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($('.line_3'), 0.5, { scaleX: 0, ease: Power2.easeInOut, transformOrigin: '0% 0%', delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($('.line_4'), 0.5, { scaleY: 0, ease: Power2.easeInOut, transformOrigin: '0% 100%', delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($('.line_5'), 0.5, { scaleX: 0, ease: Power2.easeInOut, transformOrigin: '100% 0%', delay: twnDelay });

    twnDelay += 0.4;
    TweenMax.from($('.copy_5'), 0.3, { opacity: 0, ease: Power2.easeInOut, force3D: true, delay: twnDelay });

    twnDelay -= 1.0;
    TweenMax.from($('.red_hot_plate'), 0.5, { opacity: 0, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 1.8;
    TweenMax.from($('.orange_hot_plate'), 0.5, { opacity: 0, ease: Power2.easeInOut, delay: twnDelay });

    twnDelay += 0.8;
    TweenMax.from($('.yellow_hot_plate'), 0.5, { opacity: 0, ease: Power2.easeInOut, delay: twnDelay });

    twnDelay += 0.8;
    TweenMax.from($('.cta'), 0.8, { opacity: 0, ease: Power2.easeInOut, delay: twnDelay, onComplete: reportRuntime });
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

function clickThrough() {
    window.open('http://www.google.com');
}

function addListeners() {
    $(".cta").on("mouseenter", function() {
        TweenMax.to($(".cta"), 0.3, { scale: 1.1, ease: Quad.easeInOut, force3D: false });

    });

    $(".cta").on("mouseout", function() {
        TweenMax.to($(".cta"), 0.3, { scale: 1, ease: Quad.easeInOut });

    });

    $(".cta").on("click", function() {
        clickThrough();
    });
}

$(window).on('load', function() {

    preload('assets/', [
        'frame_1_bg.jpg',
        'frame_2_bg.jpg',
        'copy-1.png',
        'copy-2.png',
        'elektrolux.png',
        'copy-3.png',
        'copy-4.png',
        'balloon-hat.png',
        'copy-5.png',
        'red_hot_plate.jpg',
        'orange_hot_plate.png',
        'yellow_hot_plate.png',
        'cta.png'
    ]);
});
