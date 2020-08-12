//Set these to the banner dimentions
var BANNER_WIDTH = 728;
var BANNER_HEIGHT = 90;

//This is used to report timing
var stopWatch;

//Set the initial states of all divs here
function setInitialStates() {
    hideAll([".map_image2", ".bg2", ".bg3", ".bg4", ".bg5", ".bg6", ".logo", ".txt1", ".txt2", ".txt3", ".txt4", ".txt5", ".txt6", ".txt7", ".txt8", ".picto1", ".picto2", ".picto3", ".picto4", ".picto5", ".picto6", ".picto7", ".logo2", ".small-txt", ".ctaContainer"]);
}

//This gets called when the ad is finished loading
function mainInit() {
    addListeners();
    setInitialStates();

    // show the ad and start animation
    $(".container").show();
    seq01();
}

//The first function in our sequence of animations
function seq01() {
    var twnDelay = 0;

    stopWatch = new Date().getTime();
    $(".logo").show();
    $(".txt1").show();
    $(".picto1").show();

    TweenMax.from($(".logo"), 0.5, { alpha: 0, ease: Power1.easeIn, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt1"), 0.5, { scale: 0, transformOrigin: "30% 60%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });
    twnDelay += 1;
    TweenMax.from($(".picto1"), 0.7, { alpha: 0, transformOrigin: "50% 50%", rotation: -180, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 2;
    TweenMax.delayedCall(twnDelay, seq02);
}

function seq02() {
    var twnDelay = 0;

    $(".logo2").show();
    $(".txt2").show();
    $(".bg2").show();

    twnDelay += 0.5;
    TweenMax.from($(".bg2"), 0.7, { alpha: 0, ease: Power1.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt2"), 0.4, { scale: 0, transformOrigin: "20% 0%", ease: Back.easeOut.config(0.8), delay: twnDelay, force3D: false });

    twnDelay += 2;
    TweenMax.delayedCall(twnDelay, seq03);
}

function seq03() {
    var twnDelay = 0;

    $(".txt3").show();
    $(".picto2").show();
    $(".picto3").show();
    $(".bg3").show();

    twnDelay += 0.5;
    TweenMax.from($(".bg3"), 0.7, { alpha: 0, ease: Power1.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt3"), 0.4, { scale: 0, transformOrigin: "80% 0%", ease: Back.easeOut.config(0.8), delay: twnDelay, force3D: false });
    twnDelay += 0.5;
    TweenMax.from($(".picto2"), 0.7, { alpha: 0, transformOrigin: "50% 50%", rotation: -180, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".picto3"), 0.7, { alpha: 0, transformOrigin: "50% 50%", rotation: -180, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 1;
    TweenMax.delayedCall(twnDelay, seq04);
}

function seq04() {
    var twnDelay = 0;

    $(".txt4").show();
    $(".picto4").show();
    $(".picto5").show();
    $(".bg4").show();

    twnDelay += 0.5;
    TweenMax.from($(".bg4"), 0.7, { alpha: 0, ease: Power1.easeInOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt4"), 0.5, { scale: 0, transformOrigin: "80% 0%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });
    twnDelay += 0.5;
    TweenMax.from($(".picto4"), 0.7, { alpha: 0, transformOrigin: "50% 50%", rotation: -180, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".picto5"), 0.7, { alpha: 0, transformOrigin: "50% 50%", rotation: -180, ease: Power1.easeOut, delay: twnDelay });

    twnDelay += 1;
    TweenMax.delayedCall(twnDelay, seq05);
}

function seq05() {
    var twnDelay = 0;

    $(".bg5").show();
    $(".txt5").show();
    $(".txt6").show();
    $(".txt7").show();

    TweenMax.from($(".bg5"), 1, { alpha: 0, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt5"), 0.5, { scale: 0, transformOrigin: "70% 90%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });
    twnDelay += 0.5;
    TweenMax.from($(".txt6"), 0.5, { scale: 0, transformOrigin: "70% 90%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });
    twnDelay += 0.5;
    TweenMax.from($(".txt7"), 0.5, { scale: 0, transformOrigin: "70% 90%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });

    twnDelay += 1;
    TweenMax.delayedCall(twnDelay, seq06);
}

function seq06() {
    var twnDelay = 0;

    TweenLite.set($(".picto7"), { rotation: 0 });
    $(".bg6").show();
    $(".txt8").show();
    $(".picto7").show();
    $(".ctaContainer").show();
    $(".arrow").show();
    $(".small-txt").show();

    TweenMax.to($([".txt5", ".txt6", ".txt7"]), 0.5, { alpha: 0, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".bg6"), 1, { alpha: 0, ease: Power1.easeOut, delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($(".txt8"), 0.5, { scale: 0, transformOrigin: "70% 90%", ease: Back.easeOut.config(1), delay: twnDelay, force3D: false });
    twnDelay += 0.2;
    TweenMax.from($(".picto7"), 0.7, { alpha: 0, transformOrigin: "center", rotation: -180, ease: Power1.easeOut, delay: twnDelay });
    TweenLite.from($(".ctaContainer"), 0.5, { alpha: 0, delay: twnDelay, ease: Power1.easeOut });
    TweenLite.from($(".small-txt"), 0.5, { alpha: 0, delay: twnDelay, ease: Power1.easeOut });
    twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, animCTA);

    twnDelay += 1;
    TweenMax.delayedCall(twnDelay, returnTimer);
}

function animCTA() {
    var twnDelay = 0;

    TweenMax.from('.cta-halo-1', 1.2, { x: -177, ease: Power1.easeInOut, delay: twnDelay, repeat: 1, repeatDelay: 0.3 });
}

//A simple helper function to do display:none to multiple items
function hideAll(whichOnes) {
    for (q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}

//This funciton should be called when someone clicks on the unit or any cta
function clickThrough() {
    console.log("clickThrough");
}

//Replay the ad
function replay() {
    TweenMax.killTweensOf($(".container").find('*'));
    resetAll();
    setInitialStates();
    seq01();
}

//This resets everything in the container div to its original state as mandated by the css file
function resetAll() {
    TweenMax.set($(".container").find('*'), { clearProps: "all" });
}

//This is where we add any rollovers or clicks
function addListeners() {
    //ClickScreen
    $(".clickScreen").click(function() {
        clickThrough();
    });

    //cta
    $(".ctaContainer").click(function() {
        clickThrough();
    });

    $(".ctaContainer").on("mouseover",
        function() {
            TweenMax.to($(".arrow"), 0.3, { x: 5, ease: Quad.easeInOut, force3D: false });
        }
    );
    $(".ctaContainer").on("mouseout",
        function() {
            TweenMax.to($(".arrow"), 0.3, { x: 0, ease: Quad.easeInOut });
        }
    );

    //replay button
    $(".replayBtn").click(function() {
        replay();
    });
    $(".replayBtn").on("mouseover",
        function() {
            TweenMax.to($(".replayBtn"), 0.5, { rotation: -360, transformOrigin: "50% 57%", overwrite: true });
        }
    );
    $(".replayBtn").on("mouseout",
        function() {
            TweenMax.set($(".replayBtn"), { rotation: 0, overwrite: true });
        }
    );
}
//This will echo how many seconds have passed
function returnTimer() {
    stopWatch = ((new Date().getTime()) - stopWatch) * 0.001;
    console.log(stopWatch + " seconds");
}
