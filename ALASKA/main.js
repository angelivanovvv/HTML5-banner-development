//This is used to report timing
var stopWatch;

//Set the initial states of all divs here
function setInitialStates() {
    hideAll([".background_1",
        ".background_2",
        ".background_3",
        ".txt-1",
        ".txt-2",
        ".x-elemt",
        ".logo",
        ".txt-2",
        ".txt-3",
        ".txt-4",
        ".replay_btn",
        ".ctaContainer"
    ]);
}

//This gets called when the ad is finished loading
function mainInit() {
    $(".container").show();
    addListeners();
    setInitialStates();
    seq01();
}

// x and y for the main copy
var clickTag = "https://www.google.bg";
var background_1 = { x: 140, y: -175, scale: 1.8 };
var background_2 = { x: 0, y: 0 };
var txt_1 = { x: 26, y: 35 };
var x_elemt = { x: 27, y: 28 };
var logo = { x: 148, y: 210 };
var txt_2 = { x: 27, y: 34 };
var txt_3 = { x: 25, y: 32 };
var txt_4 = { x: 27, y: 33 };

function seq01() {
    var twnDelay = 0;
    stopWatch = new Date().getTime();

    $(".background_1").show();
    $(".txt-1").show();

    TweenLite.set($(".background_1"), background_1);
    TweenLite.set($(".txt-1"), txt_1);

    twnDelay += 0;
    TweenLite.from($(".txt-1"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 2;
    TweenLite.to($(".txt-1"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 0;
    TweenLite.to($(".background_1"), 2.5, { x: -155, y: -57, scale: 0.7, ease: Power0.easeInOut, delay: twnDelay });

    twnDelay += 1.6;
    TweenLite.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;

    $(".x-elemt").show();
    $(".background_2").show();

    TweenLite.set($(".x-elemt"), x_elemt);
    TweenLite.set($(".background_2"), background_2);

    twnDelay += 1;
    TweenLite.from($(".x-elemt"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 1.25;
    TweenLite.to($(".x-elemt"), 0.4, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });
    TweenLite.from($(".background_2"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 1;
    TweenLite.delayedCall(twnDelay, doResolve);
}

function doResolve() {
    var twnDelay = 0;

    $(".ctaContainer").show();
    $(".logo").show();
    $(".txt-2").show();
    $(".txt-3").show();
    $(".txt-4").show();
    $(".replay_btn").show();

    TweenLite.set($(".logo"), logo);
    TweenLite.set($(".txt-2"), txt_2);
    TweenLite.set($(".txt-3"), txt_3);
    TweenLite.set($(".txt-4"), txt_4);

    TweenLite.from($(".logo"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 0.25;
    TweenLite.from($(".txt-2"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 2;
    TweenLite.to($(".txt-2"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenLite.from($(".txt-3"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 3.5;
    TweenLite.to($(".txt-3"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenLite.from($(".txt-4"), 0.5, { alpha: 0, ease: Power0.easeOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenLite.from($(".ctaContainer"), 1, { alpha: 0, ease: Expo.easeOut, delay: twnDelay });

    twnDelay += 0;
    TweenLite.to($(".ctaBg"), 0.3, { width: 128, height: 31, x: -6, y: -2, ease: Quad.easeInOut, force3D: true, delay: twnDelay });

    twnDelay += 0.3;
    TweenLite.to($(".ctaBg"), 0.3, { width: 116, height: 28, x: 0, y: 0, ease: Quad.easeInOut, delay: twnDelay });

    twnDelay += 0.5;
    TweenLite.from($(".replay_btn"), 0.3, { opacity: 0, ease: Quad.easeInOut, delay: twnDelay });

    // twnDelay += 0;
    // TweenLite.delayedCall(twnDelay, returnTimer);

}

//A simple helper function to do display:none to multiple items
function hideAll(whichOnes) {
    for (q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}

//This resets everything in the container div to its original state as mandated by the css file
function resetAll() {
    TweenLite.set($(".container").find('*'), { clearProps: "all" });
}

//Replay the ad
function replay() {
    TweenLite.killTweensOf($(".container").find('*'));
    resetAll();
    setInitialStates();
    seq01();
}

function addListeners() {
    //cta

    $(".bgExit").on("click", function() {
        window.open(window.clickTag);
    })

    $(".ctaContainer").on("click", function() {
        window.open(window.clickTag);
    });

    $(".ctaContainer").on("mouseover", function() {
        TweenLite.to($(".ctaBg"), 0.3, { width: 128, height: 31, x: -6, y: -2, z: 0.01, ease: Quad.easeInOut, force3D: false, rotationZ: 0.01 });
    });
    $(".ctaContainer").on("mouseout", function() {
        TweenLite.to($(".ctaBg"), 0.3, { width: 116, height: 28, x: 0, y: 0, z: 0.01, ease: Quad.easeInOut, force3D: false, rotationZ: 0.01 });
    });

    $(".replay_btn").on('click', replay);

    $(".replay_btn").on("mouseover", function() {
        TweenLite.to($(".replay_btn"), 0.5, { rotation: -360, transformOrigin: "50% 57%", overwrite: true });
    });

    $(".replay_btn").on("mouseout", function() {
        TweenLite.set($(".replay_btn"), { rotation: 0, overwrite: true });
    });
}

//This will echo how many seconds have passed
function returnTimer() {
    stopWatch = ((new Date().getTime()) - stopWatch) * 0.001;
    console.log(stopWatch + " seconds");
}

$(window).on("load", mainInit);
