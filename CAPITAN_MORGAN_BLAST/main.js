function preload(preloadPath, preloadImages) {
    var lastLoadedImage = 0;
        loadNext();
  function loadNext() {
    if (lastLoadedImage >= preloadImages.length) {
        mainInit();      
    } else {
        var img = new Image();
        img.src = preloadPath + preloadImages[lastLoadedImage];
        img.onload = loadNext;
        // console.log("preload: "+img.src);
    }
    lastLoadedImage++;
  }
}
//Set the initial states of all divs here
function setInitialStates(){
  hideAll(['.background',
    '.background_black',
    '.legal',
    '.skeleton',
    '.bomb',
    '.rock1',
    '.rock2',
    '.rock3',
    '.rock4',
    '.rock5',
    '.bomb_shadow',
    '.dust_bomb_1',
    '.dust_bomb_2',
    '.dust_bomb_3',
    '.right_shot_container',
    '.drops_right_shot',
    '.shadow_right_shot',
    '.dust_right_shot',
    '.left_shot_container',
    '.drops_left_shot',
    '.shadow_left_shot',
    '.dust_left_shot',
    '.middle_shot_container',
    '.drops_middle_shot',
    '.shadow_middle_shot',
    '.dust_middle_shot',
    '.copy_bomb',
    '.fire_copy_bomb',
    '.dust_fire',
    '.copy1_fire1',
    '.copy1_fire2',
    '.copy1_fire3',
    '.copy1_fire4',
    '.copy1_fire5',

    ]);
}
function mainInit() {
    $('#container').show();
    setInitialStates();
    seq01();
}

var input = document.getElementById('input');
var inputCTX = input.getContext('2d');

var output = document.getElementById('output');
var outputCTX = output.getContext('2d');

var bufferData;

var copy1 = new Image();
copy1.src = 'assets/copy1.png';

var flame1 = new Image();
flame1.src = 'assets/copy1-flame1.png';

var flame2 = new Image();
flame2.src = 'assets/copy1-flame2.png';

// function move background random
function moveBg(element, positionX, positionY) {
    TweenMax.fromTo($(element), 0.7,
    {x:positionX, y:positionY,},
    {x:0, y:0, ease: Elastic.easeOut.config(0.9, 0.2)});
}

// drow canvas text
function draw(element, positionX, positionY) {
   
    inputCTX.drawImage(element, positionX, positionY);

    bufferData = inputCTX.getImageData(0, 0, 195, 96);

    outputCTX.putImageData(bufferData, 0, 0);
    outputCTX.globalCompositeOperation = "source-in";
    outputCTX.drawImage(copy1, 0, 0);
}

function seq01() {
    var twnDelay = 0;

    /*SHOW ELEMENTS*/
    $('.background').show();
    $('.background_black').show();
    $('.legal').show();
    $('.bomb').show();
    $('.rock1').show();
    $('.rock2').show();
    $('.rock3').show();
    $('.rock4').show();
    $('.rock5').show();
    $('.bomb_shadow').show();
    
    /*** SET DIMENTIONS ***/ 
    TweenMax.set($('.legal'), {x:13, y:585});
    TweenMax.set($('.bomb'), {x:9, y:288});
    TweenMax.set($('.rock1'), {x:-40, y:440, opacity:0, scale:0});
    TweenMax.set($('.rock2'), {x:70, y:423, opacity:0, scale:0});
    TweenMax.set($('.rock3'), {x:159, y:399, opacity:0, scale:0});
    TweenMax.set($('.rock4'), {x:18, y:482, rotation:-35, opacity:0, scale:0});
    TweenMax.set($('.rock5'), {x:181, y:476, rotation:20, opacity:0, scale:0});
    TweenMax.set($('.bomb_shadow'), {x:2, y:464, opacity:0});
    TweenMax.set($('.dust_bomb_1'), {x:24, y:403});
    TweenMax.set($('.dust_bomb_2'), {x:-45, y:325});
    TweenMax.set($('.dust_bomb_3'), {x:100, y:318});
    
    twnDelay += 1.0;
    TweenMax.from($('.bomb'), 0.3, {opacity:0.5, y:-200,force3D:true, ease: Expo.easeIn, delay:twnDelay, 
        onComplete:(function(){ 

            /***SHOW DUST BOMB ***/ 
            $('.dust_bomb_1').show();
            $('.dust_bomb_2').show();
            $('.dust_bomb_3').show();

            /*** MOVE BG ***/ 
            moveBg('.background', -5, -15);
            moveBg('.background_black', 0, 10);

            TweenMax.fromTo($('.rock1'), 0.01, {y:435, opacity:0, scale:0.5}, {y:440, opacity:1, scale:1, force3D:true, transformOrigin:'right bottom', ease: Expo.easeIn});
            TweenMax.fromTo($('.rock2'), 0.01, {y:418, opacity:0,scale:0.5}, {y:423, opacity:1, scale:1, force3D:true, transformOrigin:'left bottom', ease: Expo.easeIn});
            TweenMax.fromTo($('.rock3'), 0.1, {y:390, opacity:0,scale:0.5}, {y:399, opacity:1, scale:1, force3D:true, transformOrigin:'left bottom', ease: Back.easeOut.config(1.5)});
            TweenMax.to($('.bomb_shadow'), 0.05,{opacity:1, force3D:true, ease: Expo.easeIn});
            TweenMax.fromTo($('.dust_bomb_1'), 2.0, {x:24, y:403}, {x:14, y:276, rotation:20, scale:2.0, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut}); 
            TweenMax.fromTo($('.dust_bomb_2'), 2.0, {x:-45, y:325}, {x:-65, y:200, rotation:20, scale:2.0, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut});   
            TweenMax.fromTo($('.dust_bomb_3'), 2.0, {x:100, y:318}, {x:120, y:276, rotation:20, scale:2.0, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut});
        })
    });
    
    twnDelay+=0.3;
    TweenMax.fromTo($('.rock4'), 0.25, {x:50, y:460, opacity:0.5}, { x:18, y:482, rotation:-35, force3D:true, transformOrigin:'left middle', opacity:1, scale:1, ease: Elastic.easeOut.config(1, 1), delay:twnDelay});
    TweenMax.fromTo($('.rock5'), 0.25, {x:50, y:460, opacity:0.5}, { x:181, y:476, rotation:20, force3D:true, transformOrigin:'left middle', opacity:1, scale:1, ease: Elastic.easeOut.config(1, 1), delay:twnDelay});

    twnDelay += 1.0;

    TweenMax.delayedCall(twnDelay, seq02);
}
function seq02() {

    var twnDelay = 0;
    
    /*SHOW ELEMENTS*/
    $('.right_shot_container').show();
    $('.left_shot_container').show(); 
    $('.middle_shot_container').show();
   
    /*** SET DIMENTIONS ***/ 
    TweenMax.set($('.shot_1'), {x:1, y:1});
    TweenMax.set($('.shot_2'), {x:3, y:-2});
    TweenMax.set($('.shot_3'), {x:4, y:0});
    
    /*** SET DIMENTIONS - RIGHT SHOT ***/ 
    TweenMax.set($('.right_shot_container'), {x:241, y:455});
    TweenMax.set($('.drops_right_shot'), {x:246, y:408});
    TweenMax.set($('.shadow_right_shot'), {x:241, y:507, opacity:0});
    TweenMax.set($('.dust_right_shot'), {x:208, y:452, scale:0.5});

    /*** SET DIMENTIONS - LEFT SHOT ***/ 
    TweenMax.set($('.left_shot_container'), {x:196, y:455});
    TweenMax.set($('.drops_left_shot'), {x:198, y:462});
    TweenMax.set($('.shadow_left_shot'), {x:136, y:510});
    TweenMax.set($('.dust_left_shot'), {x:151, y:452, scale:0.5});

    /*** SET DIMENTIONS - MIDDLE SHOT ***/ 
    TweenMax.set($('.middle_shot_container'), {x:214, y:461});
    TweenMax.set($('.drops_middle_shot'), {x:223, y:473});
    TweenMax.set($('.shadow_middle_shot'), {x:198, y:504});
    TweenMax.set($('.dust_middle_shot'), {x:179, y:471, scale:0.5});

    TweenMax.from($('.right_shot_container'), 0.4, {opacity:0.5, y:-200, force3D:true, ease: Expo.easeIn, delay:twnDelay, 
        onComplete:(function(){ 
            $('.drops_right_shot').show();
            $('.shadow_right_shot').show();
            $('.dust_right_shot').show();
            moveBg('.background', -5, -5);
            moveBg('.background_black', 0, 5);
            TweenMax.to($('.shadow_right_shot'), 0.05,{opacity:1, ease: Expo.easeIn});
            TweenMax.to($('.shot_3_right'), 1.2, {y:2, force3D:true, ease: Elastic.easeOut.config(2.0, 0.3)});
            TweenMax.fromTo($('.drops_right_shot'), 0.5,{y:415}, {y:452, force3D:true, ease: Back.easeIn.config(1)});
            TweenMax.fromTo($('.dust_right_shot'), 2.0, {x:208, y:452}, {x:210, y:403, rotation:20, scale:0.8, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut});
        })
    });

    twnDelay+=0.6;
    TweenMax.from($('.left_shot_container'), 0.4, {opacity:0.5, y:-200, force3D:true, ease: Expo.easeIn, delay:twnDelay, 
        onComplete:(function(){ 
            $('.drops_left_shot').show();
            $('.shadow_left_shot').show();
            $('.dust_left_shot').show();
            moveBg('.background', -5, -7);
            moveBg('.background_black', 0, 9);
            TweenMax.to($('.shadow_left_shot'), 0.05,{opacity:1, force3D:true, ease: Expo.easeIn});
            TweenMax.to($('.shot_3_left'), 1.2, {y:2, force3D:true, ease: Elastic.easeOut.config(2.0, 0.3)});
            TweenMax.fromTo($('.drops_left_shot'), 0.4,{y:415}, {y:452, force3D:true, ease: Back.easeIn.config(1)});
            TweenMax.fromTo($('.dust_left_shot'), 2.0, {x:151, y:452}, {x:153, y:403, rotation:20, scale:0.8, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut});
        })
    });

    twnDelay+=0.2;
    TweenMax.from($('.middle_shot_container'), 0.4, {opacity:0.5, y:-200, force3D:true, ease: Expo.easeIn, delay:twnDelay, 
        onComplete:(function(){ 
            $('.drops_middle_shot').show();
            $('.shadow_middle_shot').show();
            $('.dust_middle_shot').show();
            moveBg('.background', -5, -9);
            moveBg('.background_black', 0, 9);
            TweenMax.to($('.shadow_middle_shot'), 0.05,{opacity:1, force3D:true, ease: Expo.easeIn});
            TweenMax.to($('.shot_3_middle'), 1.2, {y:2, force3D:true, ease: Elastic.easeOut.config(2.0, 0.3)});
            TweenMax.fromTo($('.drops_middle_shot'), 0.4,{y:425}, {y:465, force3D:true, ease: Back.easeIn.config(1)});
            TweenMax.fromTo($('.dust_middle_shot'), 2.0, {x:179, y:471}, {x:182, y:403, rotation:20, scale:0.8, force3D:true, opacity:0, transformOrigin:'50% 50%', ease: Power2.easeOut});
        })
    });

    twnDelay += 0.5;
    TweenMax.delayedCall(twnDelay, seq03);
}
function seq03() {
    var twnDelay=0;

    /*SHOW ELEMENTS*/
    $('.copy1_fire1').show();
    $('.copy1_fire2').show();
    $('.copy1_fire3').show();
    $('.copy1_fire4').show();
    $('.copy1_fire5').show();
    $('.skeleton').show();
    $('.copy_bomb').show();
    $('.fire_copy_bomb').show();
    $('.dust_fire').show();

     /*** SET DIMENTIONS ***/ 
    TweenMax.set($('.copy1'), {x:82, y:40});
    TweenMax.set($('.copy1_fire1'), {x:56, y:0});
    TweenMax.set($('.copy1_fire2'), {x:168, y:0});
    TweenMax.set($('.copy1_fire3'), {x:105, y:9});
    TweenMax.set($('.copy1_fire4'), {x:54, y:54});
    TweenMax.set($('.copy1_fire5'), {x:180, y:65});
    TweenMax.set($('.skeleton'), {x:242, y:101});
    TweenMax.set($('.copy_bomb'), {x:209, y:518});
    TweenMax.set($('.fire_copy_bomb'), {x:190, y:466});
    TweenMax.set($('.dust_fire'), {x:190, y:466, scale:0.5});


    twnDelay += 1.0;
    TweenMax.fromTo($('.copy1_fire1'), 0.2,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
    
    twnDelay += 0.1;
    TweenMax.to($('.copy1_fire1'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.delayedCall(twnDelay, function(){
        draw(flame1, -26, -40);
    });

    twnDelay += 0.2;
    TweenMax.fromTo($('.copy1_fire2'), 0.2,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
    
    twnDelay += 0.1;
    TweenMax.to($('.copy1_fire2'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.delayedCall(twnDelay, function(){
        draw(flame1, 86, -40);
    });

    twnDelay += 0.2;
    TweenMax.fromTo($('.copy1_fire4'), 0.2,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
    
    twnDelay += 0.1;
    TweenMax.to($('.copy1_fire4'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.delayedCall(twnDelay, function(){
        draw(flame1, -40, 20);
    });

    twnDelay += 0.2;
    TweenMax.fromTo($('.copy1_fire5'), 0.2,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
    
    twnDelay += 0.1;
    TweenMax.to($('.copy1_fire5'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.delayedCall(twnDelay, function(){
        draw(flame1, 98, 25);
    });

    twnDelay += 0.2;
    TweenMax.fromTo($('.copy1_fire3'), 0.2,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
    
    twnDelay += 0.1;
    TweenMax.to($('.copy1_fire3'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.delayedCall(twnDelay, function(){
        draw(flame2, 23, -25);
    });

    twnDelay+=0.5;
    TweenMax.from($('.skeleton'), 0.5, {scale:0.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
         
    twnDelay += 1.0;
    TweenMax.fromTo($('.fire_copy_bomb'), 0.3,{scale:0}, {scale:1.0, force3D:true, ease: Expo.easeOut, delay:twnDelay});
   
    twnDelay += 0.2;
    TweenMax.to($('.fire_copy_bomb'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.from($('.copy_bomb'), 0.2, {scale:0.0, force3D:true, ease: Power2.easeInOut, delay:twnDelay});
    TweenMax.fromTo($('.dust_fire'), 1.0, {x:180, y:476, opacity:0}, {x:186, y:403, rotation:20, scale:1.0, force3D:true, opacity:1, transformOrigin:'50% 50%', ease: Power2.easeOut, delay:twnDelay});
    
    twnDelay+=0.4;
    TweenMax.to($('.dust_fire'), 0.5,{opacity:0, force3D:true, ease: Power2.easeOut, delay:twnDelay});
}

//A simple helper function to do display:none to multiple items
function hideAll(whichOnes){
  for (var q = 0; q < whichOnes.length; q++){
    $(whichOnes[q]).hide();
  }
}
//This resets everything in the container div to its original state as mandated by the css file
function resetAll(){
  TweenMax.set($(".container").find('*'), {clearProps:"all"});
}
// log function that displays the exact time of every event
function reportRuntime() {
    var elapsed = new Date() - start;
    console.log(elapsed / 1000 + "seconds");
}   
window.onload = preload('assets/',
    ['bg.jpg', 
    'legal.png',
    'skeleton.png',
    'bomb.png',
    'bg2.jpg', 
    'rock1.png',
    'rock2.png',
    'rock3.png',
    'rock4.png',
    'rock5.png',
    'bomb-shadow.png',
    'dust.png',
    'drops.png',
    'right-shot-1.png',
    'right-shot-2.png',
    'right-shot-3.png',
    'right-shot-shadow.png',
    'left-shot-1.png',
    'left-shot-2.png',
    'left-shot-3.png',
    'left-shot-shadow.png',
    'middle-shot-1.png',
    'middle-shot-2.png',
    'middle-shot-3.png',
    'middle-shot-shadow.png',
    'copy-bomb.png',
    'flame.png',
    'copy1-flame1.png',
    'copy1-flame2.png',
]);
