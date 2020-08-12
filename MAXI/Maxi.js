// window.onload = function() {
//     init();
// };

/* ======== Timer ======== */
var start = new Date();
function reportRuntime() {
     var elapsed = new Date() - start;
     console.log(elapsed / 1000 + "seconds");
}
/* ======== Global Vars ======== */
// default elements
var container,
    bgExit,
    timeoutID;

// custom elements
var background,
    txt1BeAt,
    txt2lose,
    txt3Eat,
    txt4Get,
    txt5Whatever,
    txt6We,
    txt7Set,
    txt8Mygoal,
    arrow;

// loop var
var counter = 0;

/* ======== Preload Ad ======== */
var preloadImages = [
    "img/background.jpg",
    "img/arrow.png",
    "img/logo-gsk.png",
    "img/logo-maxi.png",
    "img/txt-1-be-at.png",
    "img/txt-2-lose.png",
    "img/txt-3-eat.png",
    "img/txt-4-get.png",
    "img/txt-5-whatever.png",
    "img/txt-6-we.png",
    "img/txt-7-set.png",
    "img/txt-8-mygoal.png"
];
function preload() {
    var lastLoadedImage = 0;
    document.querySelector(".container").style.display = "none";

    loadNext();

    function loadNext() {
        if (lastLoadedImage >= preloadImages.length) {
            init();
        } else {
            var img = new Image();
            img.src = preloadImages[lastLoadedImage];
            img.onload = loadNext;
        }
        lastLoadedImage++;
    }
}

/* ======== Show Ad ======== */
function init() {
    // default elements
    container = document.querySelector(".container");
    bgExit = document.querySelector(".bg-exit");

    // custom/animated elements
    background = document.querySelector(".background");
    txt1BeAt = document.querySelector(".txt-1-be-at");
    txt2lose = document.querySelector(".txt-2-lose");
    txt3Eat = document.querySelector(".txt-3-eat");
    txt4Get = document.querySelector(".txt-4-get");
    txt5Whatever = document.querySelector(".txt-5-whatever");
    txt6We = document.querySelector(".txt-6-we");
    txt7Set = document.querySelector(".txt-7-set");
    txt8Mygoal = document.querySelector(".txt-8-mygoal");
    arrow = document.querySelector(".arrow");

    // show ad
    container.style.display = "block";

    // clicktag
    addListeners();

    // animation start
    timeline();
}
/* ======== TIMELINE ======== */
function timeline() {
    counter += 1;

    var animDalay = 0;

    // frame 1
    timeoutID = setTimeout(function() {
        background.className = "background background-anim";
        txt1BeAt.className = "txt-1-be-at fade-in-bounce";
    }, animDalay);

    animDalay += 2500;
    timeoutID = setTimeout(function() {
        txt1BeAt.className = "txt-1-be-at fade-out";
    }, animDalay);

    // frame 2
    animDalay += 500;
    timeoutID = setTimeout(function() {
        txt2lose.className = "txt-2-lose fade-in-bounce";
    }, animDalay);

    animDalay += 300;
    timeoutID = setTimeout(function() {
        txt3Eat.className = "txt-3-eat fade-in-bounce";
    }, animDalay);

    animDalay += 300;
    timeoutID = setTimeout(function() {
        txt4Get.className = "txt-4-get fade-in-bounce";
    }, animDalay);

    animDalay += 2500;
    timeoutID = setTimeout(function() {
        txt2lose.className = "txt-2-lose fade-out";
        txt3Eat.className = "txt-3-eat fade-out";
        txt4Get.className = "txt-4-get fade-out";
    }, animDalay);

    // frame 3
    animDalay += 500;
    timeoutID = setTimeout(function() {
        txt5Whatever.className = "txt-5-whatever fade-in-bounce";
    }, animDalay);

    animDalay += 300;
    timeoutID = setTimeout(function() {
        txt6We.className = "txt-6-we fade-in-bounce";
    }, animDalay);

    animDalay += 2500;
    timeoutID = setTimeout(function() {
        txt5Whatever.className = "txt-5-whatever fade-out";
        txt6We.className = "txt-6-we fade-out";
    }, animDalay);

    // frame 4
    animDalay += 500;
    timeoutID = setTimeout(function() {
        txt7Set.className = "txt-7-set fade-in-bounce";
    }, animDalay);

    animDalay += 300;
    timeoutID = setTimeout(function() {
        txt8Mygoal.className = "txt-8-mygoal fade-in-bounce";
    }, animDalay);

    animDalay += 300;
    timeoutID = setTimeout(function() {
        arrow.className = "arrow fade-in-bounce";
    }, animDalay);

    animDalay += 2000;
    timeoutID = setTimeout(function() {
        arrow.style.opacity = "1";
        arrow.className = "arrow arrow-container-anim";
    }, animDalay);

    console.log("loop: " + counter);
    if (counter < 2) {
        // end of animation
        animDalay += 2800;
        var reportTimeAndResetAnim = function() {
            reportRuntime();
            resetAnimation();
        }
        timeoutID = setTimeout(reportTimeAndResetAnim, animDalay);
    }
}
/* ======== resetAnimation ======== */
function resetAnimation() {
    // null the styles
    background.className = "background";
    txt1BeAt.className = "txt-1-be-at";
    txt2lose.className = "txt-2-lose";
    txt3Eat.className = "txt-3-eat";
    txt4Get.className = "txt-4-get";
    txt5Whatever.className = "txt-5-whatever";
    txt6We.className = "txt-6-we";
    txt7Set.className = "txt-7-set";
    txt8Mygoal.className = "txt-8-mygoal";
    arrow.className = "arrow";

    arrow.style.opacity = "";

    // clear all timeouts
    clearAll();

    // wait 50ms than play the animation again
    setTimeout(function() {timeline();}, 50);
}

/* ======== clearTimeout ======== */
function clearAll() {
    for (timeoutID; timeoutID > 0; timeoutID--) {
        clearTimeout(timeoutID);
        // console.log(timeoutID);
    }
}
/* ======== Event Listeners ======== */
function addListeners() {
    bgExit.addEventListener("click", bgExitHandler, false);
}
/* ======== Function Definitions ======== */
function bgExitHandler() {
    window.open("");
}
