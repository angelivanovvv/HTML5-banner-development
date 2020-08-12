// global variables
var time_at_the_beginig,
    time_at_the_end,
    total_banner_time,
    rdyToPress,
    startStopSnowing = true,
    snowing = true;

var x_pos_leave_1 = getRandomInt(10, 38),
    x_pos_leave_2 = getRandomInt(38, 76),
    x_pos_leave_3 = getRandomInt(76, 114),
    x_pos_leave_4 = getRandomInt(114, 152),
    x_pos_leave_5 = getRandomInt(152, 190),
    x_pos_leave_6 = getRandomInt(190, 228),
    x_pos_leave_7 = getRandomInt(228, 266),
    x_pos_leave_8 = getRandomInt(266, 280),
    y_pos_leave = -40;

// array of all images that is used in banner and want to preload
var preloadImages = [
    'background.jpg',
    'summer-beach.jpg',
    'sea-sprite.jpg',
    'copy1.png',
    'autumn.jpg',
    'leaves_1.png',
    'leaves_2.png',
    'leaves_3.png',
    'leaves_4.png',
    'copy2.png',
    'winter.jpg',
    'copy3.png',
    'snow.png',
    'camera-part1.png',
    'camera-part2.png',
    'picture1.jpg',
    'picture2.jpg',
    'picture3.jpg',
    'press-btn.png',
    'arrow.png',
    'shadow-btn.png',
    'hand.png',
    'copy4.png',
    'cta.png',
    'cta-hover.png',
    'logo.png'
];

// this funciton is to preload all images used in banner
function preload(paths) {
    lastLoadImage = 0;
    loadNext();

    function loadNext() {
        if (lastLoadImage >= preloadImages.length) {
            mainInit();
        } else {
            var img = new Image();
            img.src = paths + preloadImages[lastLoadImage];
            img.onload = loadNext;
        }
        lastLoadImage++;
    }
}

function setInitialStates() {
    hideAll(['.background',
        '.picture_holder',
        '.summer_container',
        '.copy_1',
        '.autumn_container',
        '.leaves_1',
        '.leaves_2',
        '.leaves_3',
        '.leaves_4',
        '.leaves_5',
        '.leaves_6',
        '.leaves_7',
        '.leaves_8',
        '.copy_2',
        '.winter_container',
        '.copy_3',
        '.snow',
        '.camera_1',
        '.camera_2',
        '.pic_1',
        '.pic_2',
        '.pic_3',
        '.press_btn_container',
        '.shadow_btn',
        '.hand',
        '.copy4',
        '.cta_container',
        '.logo'
    ]);
}

function mainInit() {
    time_at_the_beginig = new Date().getTime();
    $('.container').show();
    setInitialStates();
    addListeners();
    seq01();
}

function seq01() {
    var twnDelay = 0;
    $('.background').show();
    $('.picture_holder').show();
    $('.summer_container').show();
    $('.autumn_container').show();
    $('.winter_container').show();
    $('.copy_1').show();

    TweenMax.set($('.autumn_container'), { 'webkitFilter': 'blur(2px)' });

    TweenMax.delayedCall(twnDelay, function() {
        $('.summer_sea').addClass('animation_sea');
    });

    TweenMax.delayedCall(0, flash, [1.5]);

    twnDelay += 2.0;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.frame_one'), 0.5, { scale: 0.5, transformOrigin: '50% 35%', ease: Expo.easeOut, force3D: false });
    });

    twnDelay += 0.7;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.autumn_container'), 1.0, { 'webkitFilter': 'blur(0px)', ease: Expo.easeInOut });
        TweenMax.to($('.frame_one'), 0.8, {
            rotation: 360,
            x: 350,
            ease: Back.easeIn.config(1),
            force3D: false,
        });
    });

    twnDelay += 0.4;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;
    $('.leaves_1').show();
    $('.leaves_2').show();
    $('.leaves_3').show();
    $('.leaves_4').show();
    $('.leaves_5').show();
    $('.leaves_6').show();
    $('.leaves_7').show();
    $('.leaves_8').show();
    $('.copy_2').show();

    TweenMax.set($('.winter_container'), { 'webkitFilter': 'blur(2px)' });

    TweenMax.delayedCall(twnDelay, fallingLeaves);

    TweenMax.delayedCall(twnDelay, resetFlash);


    TweenMax.delayedCall(0, flash, [2.3]);

    twnDelay += 2.8;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.frame_two'), 0.5, { scale: 0.5, transformOrigin: '50% 35%', ease: Expo.easeOut, force3D: false });
    });

    twnDelay += 0.7;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.winter_container'), 1.0, { 'webkitFilter': 'blur(0px)', ease: Expo.easeInOut });
        TweenMax.to($('.frame_two'), 0.8, {
            rotation: 360,
            x: 350,
            ease: Back.easeIn.config(1),
            force3D: false
        });
    });
    twnDelay += 0.4;
    TweenMax.delayedCall(twnDelay, seq03);
}

function seq03() {
    var twnDelay = 0;
    $('.copy_3').show();

    TweenMax.delayedCall(twnDelay, FallingSnow);

    twnDelay += 1.9;
    TweenMax.delayedCall(twnDelay, function() {
        $('.snow_container').hide();
        $('.snow').show();
        resetFlash();
        startStopSnowing = false;
        snowing = false;
    });

    TweenMax.delayedCall(0, flash, [2.0]);

    twnDelay += 0.6;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.frame_three'), 0.5, { scale: 0.5, transformOrigin: '50% 35%', ease: Expo.easeOut, force3D: false });
    });

    twnDelay += 0.7;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.frame_three'), 0.8, { rotation: 360, x: 350, ease: Back.easeIn.config(1), force3D: false });
    });

    twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, seq04);
}

function seq04() {
    var twnDelay = 0;
    $('.camera_1').show();
    $('.camera_2').show();
    $('.shadow_btn').show();

    TweenMax.set($('.picture_container'), { perspective: 300 });
    TweenMax.set($('.pic_1'), { scale: 0.9, rotationX: 40, transformOrigin: '50% 0%' });
    TweenMax.set($('.pic_2'), { scale: 0.9, rotationX: 40, transformOrigin: '50% 0%' });
    TweenMax.set($('.pic_3'), { scale: 0.9, rotationX: 40, transformOrigin: '50% 0%' });

    twnDelay += 0.3;
    TweenMax.from([$('.camera_1'), $('.camera_2'), $('.shadow_btn')], 0.6, { y: -150, ease: Sine.easeInOut, delay: twnDelay });

    twnDelay += 0.8;
    TweenMax.delayedCall(twnDelay, function() {
        $('.pic_3').show();
        TweenMax.to($('.pic_3'), 0.5, { scale: 1.0, y: 95, x: 35, rotationX: 65, rotationY: 10, transformOrigin: '50% 50%', ease: Power1.easeInOut, force3D: false });
    });

    twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, function() {
        $('.pic_2').show();
        TweenMax.to($('.pic_2'), 0.5, { scale: 1.0, y: 90, x: -30, rotationX: 65, rotationY: -10, transformOrigin: '50% 50%', ease: Power1.easeInOut, force3D: false });
    });

    twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, function() {
        $('.pic_1').show();
        TweenMax.to($('.pic_1'), 0.5, { scale: 1.0, y: 90, rotationX: 60, transformOrigin: '50% 0%', ease: Sine.easeOut, force3D: false });
    });

    twnDelay += 0.7;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.to($('.pic_1'), 0.6, { scale: 1.5, opacity: 0, ease: Power4.easeOut, force3D: false });
        twnDelay = 0.2;
        TweenMax.to($('.pic_2'), 0.6, { scale: 1.5, opacity: 0, ease: Power4.easeOut, force3D: false, delay: twnDelay });
        twnDelay = 0.4;
        TweenMax.to($('.pic_3'), 0.6, { scale: 1.5, opacity: 0, ease: Power4.easeOut, force3D: false, delay: twnDelay });
    });

    twnDelay += 0.6;
    TweenMax.delayedCall(twnDelay, function() {

        twnDelay = 0.3;
        TweenMax.to([$('.camera_1'), $('.camera_2'), $('.shadow_btn')], 0.5, { y: 40, ease: Sine.easeOut, delay: twnDelay, onComplete: pressBtn });
    });
}


/*=== function that create camera flash effect ===*/
function flash(seconds) {
    var flashdelay = 0;
    TweenMax.from($('.flash'), 0.1, { opacity: 0, ease: Expo.easeOut, delay: seconds });

    flashdelay = (seconds + 0.1);
    TweenMax.delayedCall(flashdelay, function() {
        TweenMax.to($('.flash'), 0.1, { opacity: 0, ease: Expo.easein });
    });
}

/*=== function for clearing flash div  ===*/
function resetFlash() {
    TweenMax.set($('.flash'), { clearProps: 'opacity' });
}

/*=== funciton for creating falling leaves effect ===*/
function fallingLeaves() {
    var twnDelay = 0;

    TweenMax.set($('.leaves_1'), { x: x_pos_leave_1, y: y_pos_leave });
    TweenMax.set($('.leaves_2'), { x: x_pos_leave_2, y: y_pos_leave });
    TweenMax.set($('.leaves_3'), { x: x_pos_leave_3, y: y_pos_leave });
    TweenMax.set($('.leaves_4'), { x: x_pos_leave_4, y: y_pos_leave });
    TweenMax.set($('.leaves_5'), { x: x_pos_leave_5, y: y_pos_leave });
    TweenMax.set($('.leaves_6'), { x: x_pos_leave_6, y: y_pos_leave });
    TweenMax.set($('.leaves_7'), { x: x_pos_leave_7, y: y_pos_leave });
    TweenMax.set($('.leaves_8'), { x: x_pos_leave_8, y: y_pos_leave });
    TweenMax.set($('.autumn_container'), { perspective: 150 });

    twnDelay = 0.8;
    TweenMax.to($('.leaves_1'), 1.4, { y: 280, x: getRandomInt(20, 30), rotationY: 100, rotationX: 180, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '30% 20%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.7;
    TweenMax.to($('.leaves_2'), 1.1, { y: 280, x: getRandomInt(50, 60), rotationY: 90, rotationX: 160, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '40% 10%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.6;
    TweenMax.to($('.leaves_3'), 1.0, { y: 280, x: getRandomInt(90, 100), rotationY: 180, rotationX: 100, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '70% 40%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.4;
    TweenMax.to($('.leaves_4'), 1.6, { y: 280, x: getRandomInt(130, 140), rotationY: 120, rotationX: 80, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '20% 80%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.6;
    TweenMax.to($('.leaves_5'), 1.0, { y: 280, x: getRandomInt(170, 180), rotationY: 220, rotationX: 200, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '40% 50%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.4;
    TweenMax.to($('.leaves_6'), 1.0, { y: 280, x: getRandomInt(210, 220), rotationY: 170, rotationX: 70, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '50% 50%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.7;
    TweenMax.to($('.leaves_7'), 1.1, { y: 280, x: getRandomInt(240, 250), rotationY: 250, rotationX: 120, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '90% 70%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 0.8;
    TweenMax.to($('.leaves_8'), 1.3, { y: 280, x: getRandomInt(260, 270), rotationY: 130, rotationX: 30, rotationZ: 0.01, transformStyle: 'prespective-3d', transformOrigin: '30% 20%', ease: SlowMo.ease.config(0.1, 0.1, false), delay: twnDelay });

    twnDelay = 2.4;
    TweenMax.delayedCall(twnDelay, function() {
        hideAll(['.leaves_1', '.leaves_2', '.leaves_3', '.leaves_4', '.leaves_5', '.leaves_6', '.leaves_7', '.leaves_8']);
    });
}

/*=== function for creating snowflakes effect ===*/
function FallingSnow() {
    var twnDelay = 0;
    if (startStopSnowing) {
        for (var i = 0; i < 55; i++) {
            var snowFlake = document.createElement('div');
            var z = Math.random() * 10 + "px";
            snowFlake.id = 'snow_flake';
            snowFlake.className = 'snow_flake';
            snowFlake.style.left = (Math.random() - 0.2) * 300 + "px";
            snowFlake.style.top = "-120px";
            snowFlake.style.height = z;
            snowFlake.style.width = z;

            document.querySelector(".snow_container").appendChild(snowFlake);

            twnDelay += 0.05;
            if (snowing) {
                TweenLite.to(snowFlake, 2.5, {
                    x: (Math.random() - 0.1) * 120,
                    y: 500,
                    delay: twnDelay,
                });
                TweenLite.to(".snow_flake", 4, {
                    delay: twnDelay,
                    onComplete: removeSnow
                });
            }
        }
    }

    twnDelay += 0.01;
    TweenLite.delayedCall(twnDelay, FallingSnow);
}

function removeSnow() {
    document.querySelector(".snow_flake").remove();
}

function pressBtn() {
    var twnDelay = 0;
    $('.hand').show();

    TweenMax.to($('.hand'), 0.5, { y: 200, ease: Power2.easeOut });
    rdyToPress = true;
}

function showEndFrame() {
    var twnDelay = 0;

    if (rdyToPress) {
        rdyToPress = false;
        TweenMax.to($('.press_btn_container'), 0.3, { opacity: 0, ease: Power4.easeOut });
        TweenMax.to($('.shadow_btn'), 0.05, { opacity: 0 });
        TweenMax.delayedCall(0, resetFlash);
        TweenMax.delayedCall(0, flash, [0.1]);
        TweenMax.delayedCall(0.25, function() {
            $('.hand').hide();
            $('.copy4').show();
            $('.logo').show();
            $('.cta_container').show();
        });
    }
}

/*=== this function generate random digits for x cordinate to falling leaves ===*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exitHandler() {
    window.open('http://google.com');
}

// this function will add event listeners to 'listen' for any kind of events 
function addListeners() {
    $('.bg_exit').on('click', function() {
        exitHandler();
        $('.shadow_btn').hide();
    });
    $('.shadow_btn').on('click', function() {
        showEndFrame();
    });

    $('.cta_container').on('click', exitHandler);

    $('.cta_container').on('mouseenter', function() {
        TweenMax.to($('.cta'), 0.5, { opacity: 0 });
    });
    $('.cta_container').on('mouseleave', function() {
        TweenMax.set($('.cta'), { clearProps: 'opacity' });
        TweenMax.from($('.cta'), 0.5, { opacity: 0 });
    });
}

// this function will make display:none; to all elements 
function hideAll(elements) {
    for (var i = 0; i < elements.length; i++) {
        $(elements[i]).hide();
    }
}

// this function will return how many second the banner is playing
function returnTime() {
    time_at_the_end = new Date().getTime();
    total_banner_time = (time_at_the_end - time_at_the_beginig) * 0.001;
    console.log(total_banner_time + ' seconds.');
}

// start preload function when window is loaded
window.onload = preload('assets/');
