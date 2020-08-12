(function(){ 
    'use strict';

function preload(preloadPath, preloadImages) {
    var lastLoadedImage = 0;
        loadNext();
  function loadNext() {
    if (lastLoadedImage >= preloadImages.length) {
        mainInit();      
      // console.log('loaded');
    } else {
        var img = new Image();
        img.src = preloadPath + preloadImages[lastLoadedImage];
        img.onload = loadNext;
        console.log("preload: "+img.src);
    }
    lastLoadedImage++;
  }
}
//Set the initial states of all divs here
function setInitialStates(){
  hideAll(['.bg_exit',
    '.bg_first_plane',
    '.bg_second_plane',
    '.woman_big',
    '.cta',
    '.cta_gradient',
    '.btn_txt_white',
    '.btn_txt_black',
    '.copy1',
    '.copy2',
    '.copy3',
    '.copy4',
    '.copy5',
    '.copy6',
    '.run',
    '.free',
    '.copy7',
    '.copy8',
    '.copy9',
    '.trolley',
    '.bg_end'
    ]);
}
function mainInit() {
    $('#container').show();
    addListeners();
    setInitialStates();
    seq01();
}
function seq01() {
    var twnDelay = 0;

    /*SHOW ELEMENTS*/
    $('.bg_exit').show();
    $('.bg_first_plane').show();
    $('.bg_second_plane').show();
    $('.woman_big').show();
    $('.copy1').show();
    $('.cta').show();
    $('.btn_txt_white').show();
    $('.btn_txt_black').show();
    $('.cta').show();
    $('.cta_gradient').show();

    /*** SET DIMENTIONS ***/ 
    TweenLite.set($('.bg_first_plane'), {x:-19, y:129});
    TweenLite.set($('.bg_second_plane'), {x:-188, y:-130, scale:0.6});
    TweenLite.set($('.logo'), {x:4, y:4});
    TweenLite.set($('.woman_big'), {x:112, y:-37, scale:0.5});
    TweenLite.set($('.copy1'), {x:19, y:44});
    TweenLite.set($('.cta'), {x:179, y:203});
    TweenLite.set($('.btn_txt_white'), {x:22, y:13});
    TweenLite.set($('.btn_txt_black'), {x:22, y:13});
    TweenLite.set($('.bg_fill'), {width:0, height:32, x:2, y:2});
    TweenLite.set($('.cta_gradient'), {x:120, y:205});

    twnDelay += 0.5;
    TweenLite.to($('.bg_exit'), 0.4, {opacity:0, ease: Power1.easeInOut, delay:twnDelay});
    
    twnDelay += 0.5;
    TweenLite.to($('.bg_first_plane'), 2.0, {x:-130, y: 250, scale:1.8, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.bg_second_plane'), 2.0, {x:-177, scale:0.8, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.woman_big'), 2.0, {x:80, y: 15,scale:1.0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.from($('.copy1'), 2.0, {x:-150, opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.from($('.cta'), 2.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.from($('.cta_gradient'), 2.5, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, seq02);
}
function seq02() {
    var twnDelay = 0;

    /*SHOW ELEMENTS*/
    $('.copy2').show();
    $('.copy3').show();
    $('.copy4').show();
    $('.copy5').show();
    $('.copy6').show();

    /*** SET DIMENTIONS ***/ 
    TweenLite.set($('.copy2'), {x:19, y:62});
    TweenLite.set($('.copy3'), {x:119, y:62});
    TweenLite.set($('.copy4'), {x:12, y:191});
    TweenLite.set($('.copy5'), {x:12, y:209});
    TweenLite.set($('.copy6'), {x:12, y:222});

    /*** BG MOVE ***/ 
    TweenLite.to($('.bg_second_plane'), 8.0, {x:-157,ease: Power0.easeNone, delay:twnDelay});
    TweenLite.to($('.woman_big'), 8.0, {x:60, ease: Power0.easeNone, delay:twnDelay}); 

    TweenLite.from($('.copy2'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.from($('.copy3'), 1.5, {x:95, opacity:0, ease: Power3.easeInOut, delay:twnDelay});
   
    twnDelay += 1.0;
    TweenLite.from($('.copy4'), 1.0, {x:-100, opacity:0, ease: Power4.easeInOut, delay:twnDelay});
   
    twnDelay += 0.5;
    TweenLite.from($('.copy5'), 1.0, {opacity:0, ease: Power4.easeInOut, delay:twnDelay});
    
    twnDelay += 0.4;
    TweenLite.from($('.copy6'), 1.0, {x:-100, opacity:0, ease: Power4.easeInOut, delay:twnDelay});

    twnDelay += 1.5;
    TweenLite.delayedCall(twnDelay, seq03);
}
function seq03() {
    var twnDelay = 0;

    /*SHOW ELEMENTS*/
    $('.run').show();
    $('.free').show();
    $('.copy7').show();
    $('.copy8').show();
    $('.copy9').show();

    /*** SET DIMENTIONS ***/ 
    TweenLite.set($('.run'), {width:176, height:21, x:19, y:44});
    TweenLite.set($('.R'), {x:0, y:0});
    TweenLite.set($('.U'), {x:50, y:0});
    TweenLite.set($('.N'), {x:100, y:0});
    TweenLite.set($('.free'), {width:176, height:21, x:19, y:74});
    TweenLite.set($('.F'), {x:0, y:0});
    TweenLite.set($('.R1'), {x:50, y:0});
    TweenLite.set($('.E1'), {x:100, y:0});
    TweenLite.set($('.E2'), {x:150, y:0});
    TweenLite.set($('.copy7'), {x:19, y:103});
    TweenLite.set($('.copy8'), {x:97, y:103});
    TweenLite.set($('.copy9'), {x:153, y:103});

    /*** HIDE ELEMENTS ***/ 
    TweenLite.to($('.copy1'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.copy2'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.copy3'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});

    twnDelay += 0.5;
    TweenLite.from($('.run'), 1.2,{ opacity:0, width:0, height:21, ease: Power4.easeOut, delay:twnDelay});
    
    twnDelay +=0.3;
    TweenLite.from($('.R'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});
    TweenLite.from($('.U'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});
    TweenLite.from($('.N'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});

    twnDelay +=0.3;
    TweenLite.from($('.free'), 1.2,{opacity:0, width:0, height:21, ease: Power4.easeOut, delay:twnDelay});
    
    twnDelay +=0.3;
    TweenLite.from($('.F'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});
    TweenLite.from($('.R1'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});
    TweenLite.from($('.E1'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});
    TweenLite.from($('.E2'), 1.0,{opacity:0, x:-15, ease: Power4.easeOut, delay:twnDelay});

    twnDelay+=0.45;
    TweenLite.from($('.copy7'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    twnDelay+=0.55;
    TweenLite.from($('.copy8'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    twnDelay+=0.65;
    TweenLite.from($('.copy9'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});

    TweenLite.delayedCall(twnDelay, seq04);
}
function seq04() {
    var twnDelay =0;

    /*SHOW ELEMENTS*/
    $('.trolley').show();
    $('.bg_end').show();

     /*** SET DIMENTIONS ***/ 
    TweenLite.set($('.trolley'), {x:68, y:74});

    twnDelay+=1.5;
    TweenLite.to($('.bg_first_plane'), 2.0, {x:-62, y:115, scale:1.0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.woman_big'), 2.0, {x:57, y:-50, scale:0.5, ease: Power3.easeInOut, delay:twnDelay});
    
    twnDelay+=2.5;
    TweenLite.to($('.bg_end'), 1.0, {opacity:0.3, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.from($('.trolley'), 1.0,{opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.woman_big'), 1.0, {opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.run'), 1.0,{ opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.free'), 1.0,{opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.copy7'), 1.0,{opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.copy8'), 1.0,{opacity:0, ease: Power3.easeInOut, delay:twnDelay});
    TweenLite.to($('.copy9'), 1.0,{opacity:0, ease: Power3.easeInOut, delay:twnDelay});

}
function addListeners() {
    var cta = document.querySelector('.cta');
    cta.addEventListener('mouseover', colorBtn);
    cta.addEventListener('mouseleave', normalBtn);
}
function colorBtn() {
    TweenLite.to($('.bg_fill'), 0.3,{width:107, height:32, ease: Sine.easeInOut});
    TweenLite.to($('.cta_gradient'), 0.4, {opacity:0.8, x:130, ease: Power3.easeInOut});
    TweenLite.to($('.btn_txt_white'), 0.3,{opacity:0, ease: Sine.easeInOut});
    TweenLite.to($('.btn_txt_black'), 0.3,{opacity:1, ease: Sine.easeInOut});
}
function normalBtn() {
    TweenLite.to($('.cta_gradient'), 0.4, {opacity:1, x:120, ease: Power3.easeInOut});
    TweenLite.to($('.bg_fill'), 0.3,{width:0, height:32, ease: Sine.easeInOut});
    TweenLite.to($('.btn_txt_white'), 0.3,{opacity:1, ease: Sine.easeInOut});
}
//A simple helper function to do display:none to multiple items
function hideAll(whichOnes){
  for (var q = 0; q < whichOnes.length; q++){
    $(whichOnes[q]).hide();
  }
}
//This resets everything in the container div to its original state as mandated by the css file
function resetAll(){
  TweenLite.set($(".container").find('*'), {clearProps:"all"});
}
// log function that displays the exact time of every event
function reportRuntime() {
    var elapsed = new Date() - start;
    console.log(elapsed / 1000 + "seconds");
}   
window.onload = preload('assets/',
    ['bg_first_plane.png',
    'bg_second_plane.jpg', 
    'logo.png', 
    'woman_big.png', 
    'cta_gradient.png',
    'cta_bg_stroke.png',
    'cta_explorenow_white.png',
    'cta_explorenow_black.png', 
    'cta_bg_fill.png',
    'introducing.png',
    'bugaboo.png',
    'runner.png',
    'the.png',
    'joggin.png', 
    'extension.png',
    'bg_run.png',
    'txt_run_R.png',
    'txt_run_U.png',
    'txt_run_N.png',
    'bg_free.png',
    'txt_free_F.png',
    'txt_free_R.png',
    'txt_free_E.png',
    'txt_free_E1.png',
    'introducing_2.png',
    'bugaboo_2.png',
    'runner_2.png',
    'bugaboo_trolley.png']);
})();