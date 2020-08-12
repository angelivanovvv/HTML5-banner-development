var loops = 3;
var duration;
var sparkles;
var replayed = false;


function mainInit() {
    duration = new Date().getTime();
    addListeners();

    $('.container').show();
    seq01();
}

function seq01() {
    var twnDelay = 0;

    if (loops !== null) {
        loops -= 1;
    }

    $('.frame-1').show();
    $('.frame-2').show();

    TweenMax.delayedCall(twnDelay, function() {
        if (!replayed) particles('frame-3', '.sparkles-container', particlesFrame1);
    });
    twnDelay += 1.5;
    TweenMax.to('.frame-1', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from('.frame-2', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });

    twnDelay += 2.0;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;
    $('.cta').show();
    $('.legal').show();
    $('.frame-3').show();

    TweenMax.to('.frame-2', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from(['.frame-3', '.cta', '.legal'], 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });

    TweenMax.delayedCall(twnDelay, function() {
        if (!replayed) particles('frame-3', '.sparkles-container3', particlesFrame3);
    });
    twnDelay += 2.0;
    TweenMax.delayedCall(twnDelay, seq03);
}

function seq03() {
    var twnDelay = 0;
    $('.frame-4').show();

    TweenMax.to('.frame-3', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from('.frame-4', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
    TweenMax.delayedCall(twnDelay, function() {
        if (!replayed) particles('frame-4', '.sparkles-container4', particlesFrame4);
    });
    if (loops > 0) {
        twnDelay += 2.5;
        TweenMax.delayedCall(twnDelay, replay);
    } else {
        twnDelay += 1;
        TweenMax.to('.sparkles-container3', 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
        twnDelay += 1;
        TweenMax.delayedCall(twnDelay, function() {
            clearSparkles('.sparkles-container');
            clearSparkles('.sparkles-container3');
            clearSparkles('.sparkles-container4');
        });
    }
}

function showEndFrame() {
    TweenMax.killAll();
    TweenMax.set(['.frame-1', '.frame-2', '.frame-3', '.frame-4', '.cta', '.legal'], { clearProps: 'all' });
    $('.frame-1').hide();
    $('.frame-2').hide();
    $('.frame-3').hide();
    $('.frame-4').show();
    $('.cta').show();
    $('.legal').show();
}

function particles(frame, container, array) {
    var twnDelay = 0;

    for (var i = 0; i < array.length; i++) {

        sparkles = document.createElement('img');
        $(sparkles).addClass('sparkles');
        $(sparkles).attr('src', 'img/star_' + getRandomImage(1, 3) + '.png');
        $(container).append(sparkles);

        if (frame === 'frame-1') {
            TweenMax.set($(sparkles), {
                x: array[i][0],
                y: array[i][1],
                opacity: getRandomN(0.2, 0.8),
                scale: getRandomN(0.4, 0.5)
            });
        } else {
            TweenMax.set($(sparkles), {
                x: array[i][0],
                y: array[i][1],
                scale: getRandomN(0.4, 0.5)
            });
        }
        TweenMax.fromTo($(sparkles), 1, {
            ease: Back.easeInOut.config(3),
            delay: getRandomN(0.2, 1.5)
        }, {
            opacity: 0,
            scale: 0,
            ease: Back.easeInOut.config(3),
            delay: getRandomN(0.2, 1.5),
            repeat: -1,
            yoyo: true,
        });
    }
}

function clearSparkles(container) {
    $(container).empty();
}

function getRandomImage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomN(min, max) {
    return Math.random() * (max - min) + min;
}

function replay() {
    twnDelay = 0;
    TweenMax.to(['.frame-4', '.cta', '.legal'], 1, { alpha: 0, ease: Power2.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.to('.frame-1', 1, { alpha: 1, ease: Power2.easeInOut, delay: twnDelay });
    twnDelay += 1;
    TweenMax.delayedCall(twnDelay, function() {
        TweenMax.set(['.frame-2', '.frame-3', '.frame-4', '#sparkles-f3', '#sparkles-f4', '.cta', '.legal'], { clearProps: 'opacity' });
        replayed = true;
        $('.frame-2').hide();
        $('.frame-3').hide();
        $('.frame-4').hide();
        $('.cta').hide();
        $('.legal').hide();
        seq01();
    });
}

function addListeners() {
    $('.exit-btn').on('click', showEndFrame);
}

function setInitialStates() {
    hideAll(['.frame-1',
        '.frame-2',
        '.frame-3',
        '.frame-4',
        '.cta',
        '.legal'
    ]);
}

function hideAll(a) {
    for (var i = 0; i < a.length; i++) {
        $(a[i]).hide();
    }
}

function returnDuration() {
    duration = ((new Date().getTime()) - duration) * 0.001;
    console.log(duration + ' seconds');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).on('load', function() {
    setInitialStates();
    mainInit();
});


var particlesFrame1 = [
    [39, 210],
    [-2, 195],
    [15, 191],
    [-9, 210],
    [31, 229],
    [15, 221],
    [62, 234],
    [149, 221],
    [155, 229],
    [181, 234],
    [201, 229],
    [226, 234],
    [266, 199],
    [278, 206],
    [258, 191],
    [278, 180],
    [267, 147],
    [283, 109],
    [282, 59],
    [274, 44],
    [262, 34],
    [250, 14],
    [236, -1],
    [258, -8],
    [217, -12],
    [196, -8],
    [154, -12],
    [170, -12],
    [143, -1],
    [-9, -1],
    [15, 22],
    [23, -1],
    [-1, 37]
];

var particlesFrame3 = [
    [55, -12],
    [79, -2],
    [101, -11],
    [106, 7],
    [129, 4],
    [143, -2],
    [159, 28],
    [159, 3],
    [177, -2],
    [253, 97],
    [168, 19],
    [253, 97],
    [164, 68],
    [175, 34],
    [219, 37],
    [207, 52],
    [212, 67],
    [296, 58],
    [200, 79],
    [213, 86],
    [193, 92],
    [205, 101],
    [193, 210],
    [170, 133],
    [201, 124],
    [221, 148],
    [187, 157],
    [186, 180],
    [175, 189],
    [166, 177],
    [165, 157],
    [161, 191],
    [154, 180],
    [150, 195],
    [134, 195],
    [117, 206],
    [102, 195],
    [86, 210],
    [55, 210],
    [30, 219],
    [-9, 176],
    [-2, 142],
    [3, 157],
    [15, 178],
    [19, 157],
    [31, 187],
    [39, 210]
];

var particlesFrame4 = [
    [55, -12],
    [78, -11],
    [71, 4],
    [101, -11],
    [94, -1],
    [107, -1],
    [30, -11],
    [143, 18],
    [7, -2],
    [181, 113],
    [166, 92],
    [155, 64],
    [182, 98],
    [139, 43],
    [185, 128],
    [170, 133],
    [39, 95],
    [-9, 18],
    [155, 165],
    [161, 148],
    [191, 7],
    [198, 79],
    [139, 169],
    [143, 184],
    [134, 195],
    [117, 206],
    [129, 187],
    [86, 210],
    [62, 220],
    [-9, 176],
    [-17, 157],
    [14, 210],
    [7, 184],
    [-2, 199],
    [28, 202],
    [44, 225]
];
