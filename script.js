function playNote(src){
    let audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
}

let isLettersButtonPress = false;

function addWhiteStyle(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__white_active";
    }
    addWhiteTransformation(document.getElementById(id).style);
}

function addBlueStyle(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__blue_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__blue_active";
    }
    addBlueTransformation(document.getElementById(id).style);
}

document.addEventListener("keydown", function (event) {
    if (event.code === 13) {
        fullScreen();
    }
    else if(event.code === "KeyD"){
        addWhiteStyle("D");
        let audio = new Audio("./assets/audio/c.mp3");
        audio.play();
    } 
    else if (event.code === "KeyF"){
        addWhiteStyle("F");
        let audio = new Audio("./assets/audio/d.mp3");
        audio.play();
    } 
    else if (event.code === "KeyG"){
        addWhiteStyle("G");
        let audio = new Audio("./assets/audio/e.mp3");
        audio.play();
    } 
    else if (event.code === "KeyH"){
        addWhiteStyle("H");
        let audio = new Audio("./assets/audio/f.mp3");
        audio.play();
    } 
    else if (event.code === "KeyJ"){
        addWhiteStyle("J");
        let audio = new Audio("./assets/audio/g.mp3");
        audio.play();
    } 
    else if (event.code === "KeyK"){
        addWhiteStyle("K");
        let audio = new Audio("./assets/audio/a.mp3");
        audio.play();
    } 
    else if (event.code === "KeyL"){
        addWhiteStyle("L");
        let audio = new Audio("./assets/audio/b.mp3");
        audio.play();
    }  
    else if (event.code === "KeyR"){
        addBlueStyle("R");
        let audio = new Audio("./assets/audio/c♯.mp3");
        audio.play();
    }  
    else if (event.code === "KeyT"){
        addBlueStyle("T");
        let audio = new Audio("./assets/audio/d♯.mp3");
        audio.play();
    }  
    else if (event.code === "KeyU"){
        addBlueStyle("U");
        let audio = new Audio("./assets/audio/f♯.mp3");
        audio.play();
    }  
    else if (event.code === "KeyI"){
        addBlueStyle("I");
        let audio = new Audio("./assets/audio/g♯.mp3");
        audio.play();
    }  
    else if (event.code === "KeyO"){
        addBlueStyle("O");
        let audio = new Audio("./assets/audio/a♯.mp3");
        audio.play();
    }
});

function deleteWhiteStyle(id){
    deleteWhiteTransformation(document.getElementById(id).style);
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter";
    }
    else{
        document.getElementById(id).className = "piano__white";
    }
}

function deleteBlueStyle(id){
    deleteBlueTransformation(document.getElementById(id).style);
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__blue_letter";
    }
    else{
        document.getElementById(id).className = "piano__blue";
    }
}

document.addEventListener("keyup", function (event) {
    if(event.code === "KeyD"){
        deleteWhiteStyle("D");
    } 
    else if (event.code === "KeyF"){
        deleteWhiteStyle("F");
    } 
    else if (event.code === "KeyG"){
        deleteWhiteStyle("G");
    } 
    else if (event.code === "KeyH"){
        deleteWhiteStyle("H");
    } 
    else if (event.code === "KeyJ"){
        deleteWhiteStyle("J");
    } 
    else if (event.code === "KeyK"){
        deleteWhiteStyle("K");
    } 
    else if (event.code === "KeyL"){
        deleteWhiteStyle("L");
    }  
    else if (event.code === "KeyR"){
        deleteBlueStyle("R");
    }  
    else if (event.code === "KeyT"){
        deleteBlueStyle("T");
    }  
    else if (event.code === "KeyU"){
        deleteBlueStyle("U");
    }  
    else if (event.code === "KeyI"){
        deleteBlueStyle("I");
    }  
    else if (event.code === "KeyO"){
        deleteBlueStyle("O");
    }
});

function addWhiteTransformation(elem){
    elem.backgroundColor = "#f1f1ef";
    elem.transform = "scale(0.98)";
}

function deleteWhiteTransformation(elem){
    elem.backgroundColor = null;
    elem.transform = null;
}

function addBlueTransformation(elem){
    elem.color = "#5097ff"
    elem.transform = "scale(0.98)";
}

function deleteBlueTransformation(elem){
    elem.backgroundColor = null;
    elem.transform = null;
}

document.getElementById("fullscreen").addEventListener("click", function() {
    fullScreen();
});

function requestFullScreen(element){
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
}

function exitFullScreen(){
    if (document.fullscreenElement)
        return document.exitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
}

function fullScreen(){
    var element = document.getElementById('project'); 
    if(element.requestFullscreen || element.msRequestFullscreen ||
        element.mozRequestFullScreen || element.webkitRequestFullscreen) {
            requestFullScreen(element);
    }
    if(document.fullscreenElement || document.msExitFullscreen ||
        document.mozCancelFullScreen || document.webkitExitFullscreen) {
            exitFullScreen();
    }
}

let isMouseDown = false;

document.getElementById("piano").onmousedown = function() {
    isMouseDown = true;
}

document.body.onmouseup = function() {
    isMouseDown = false;
}

function onMouseDownWhite(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__white_active";
    }
    addWhiteTransformation(document.getElementById(id).style);
}

function onMouseUpWhite(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter";
    }
    else{
        document.getElementById(id).className = "piano__white";
    }
    deleteWhiteTransformation(document.getElementById(id).style);
}

function onMouseDownBlue(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__white_active";
    }
    addBlueTransformation(document.getElementById(id).style);
}

function onMouseUpBlue(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter";
    }
    else{
        document.getElementById(id).className = "piano__white";
    }
    deleteBlueTransformation(document.getElementById(id).style);
}

document.getElementById("D").onmousedown = function(event) {
    onMouseDownWhite("D");
    playNote('./assets/audio/c.mp3');
}

document.getElementById("D").onmouseup = function() {
    onMouseUpWhite("D");
}

document.getElementById("F").onmousedown = function(event) {
    onMouseDownWhite("F");
    playNote('./assets/audio/d.mp3');
}

document.getElementById("F").onmouseup = function() {
    onMouseUpWhite("F");
}

document.getElementById("G").onmousedown = function(event) {
    onMouseDownWhite("G");
    playNote('./assets/audio/e.mp3');
}

document.getElementById("G").onmouseup = function() {
    onMouseUpWhite("G");
}

document.getElementById("H").onmousedown = function(event) {
    onMouseDownWhite("H");
    playNote('./assets/audio/f.mp3');
}

document.getElementById("H").onmouseup = function() {
    onMouseUpWhite("H");
}

document.getElementById("J").onmousedown = function(event) {
    onMouseDownWhite("J");
    playNote('./assets/audio/g.mp3');
}

document.getElementById("J").onmouseup = function() {
    onMouseUpWhite("J");
}

document.getElementById("K").onmousedown = function(event) {
    onMouseDownWhite("K");
    playNote('./assets/audio/a.mp3');
}

document.getElementById("K").onmouseup = function() {
    onMouseUpWhite("K");
}

document.getElementById("L").onmousedown = function(event) {
    onMouseDownWhite("L");
    playNote('./assets/audio/b.mp3');
}

document.getElementById("L").onmouseup = function() {
    onMouseUpWhite("L");
}


function onMouseOverWhite(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__white_active";
    }
    addWhiteTransformation(document.getElementById(id).style);
}

function onMouseOutWhite(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__white_letter";
    }
    else{
        document.getElementById(id).className = "piano__white";
    }
    deleteWhiteTransformation(document.getElementById(id).style);
}

function onMouseOverBlue(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__blue_letter_active";
    }
    else{
        document.getElementById(id).className = "piano__blue_active";
    }
    addBlueTransformation(document.getElementById(id).style);
}

function onMouseOutBlue(id){
    if(isLettersButtonPress){
        document.getElementById(id).className = "piano__blue_letter";
    }
    else{
        document.getElementById(id).className = "piano__blue";
    }
    deleteBlueTransformation(document.getElementById(id).style);
}

document.getElementById("D").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("D");
        playNote('./assets/audio/c.mp3');
    }
}

document.getElementById("D").onmouseout = function() {
    onMouseOutWhite("D");
}

document.getElementById("F").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("F");
        playNote('./assets/audio/d.mp3');
    }
}

document.getElementById("F").onmouseout = function() {
    onMouseOutWhite("F");
}

document.getElementById("G").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("G");
        playNote('./assets/audio/e.mp3');
    }
}

document.getElementById("G").onmouseout = function() {
    onMouseOutWhite("G");
}

document.getElementById("H").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("H");
        playNote('./assets/audio/f.mp3');
    }
}

document.getElementById("H").onmouseout = function() {
    onMouseOutWhite("H");
}

document.getElementById("J").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("J");
        playNote('./assets/audio/g.mp3');
    }
}

document.getElementById("J").onmouseout = function() {
    onMouseOutWhite("J");
}

document.getElementById("K").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("K");
        playNote('./assets/audio/a.mp3');
    }
}

document.getElementById("K").onmouseout = function() {
    onMouseOutWhite("K");
}

document.getElementById("L").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverWhite("L");
        playNote('./assets/audio/b.mp3');
    }
}

document.getElementById("L").onmouseout = function() {
    onMouseOutWhite("L");
}

document.getElementById("R").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverBlue("R");
        playNote('./assets/audio/c♯.mp3');
    }
}

document.getElementById("R").onmouseout = function() {
    onMouseOutBlue("R");
}

document.getElementById("T").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverBlue("T");
        playNote('./assets/audio/d♯.mp3');
    }
}

document.getElementById("T").onmouseout = function() {
    onMouseOutBlue("T");
}

document.getElementById("U").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverBlue("U");
        playNote('./assets/audio/f♯.mp3');
    }
}

document.getElementById("U").onmouseout = function() {
    onMouseOutBlue("U");
}

document.getElementById("I").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverBlue("I");
        playNote('./assets/audio/g♯.mp3');
    }
}

document.getElementById("I").onmouseout = function() {
    onMouseOutBlue("I");
}

document.getElementById("O").onmouseover = function(event) {
    if(isMouseDown){
        onMouseOverBlue("O");
        playNote('./assets/audio/a♯.mp3');
    }
}

document.getElementById("O").onmouseout = function() {
    onMouseOutBlue("O");
}

document.getElementById('buttonNotes').style.backgroundColor = "#5097ff";
document.getElementById('buttonNotes').style.borderColor = "#5097ff";

document.getElementById("buttonNotes").addEventListener("click", function() {
    isLettersButtonPress = false;
    document.getElementById("R").display = "none";
    document.getElementById("R").className = "piano__blue";
    document.getElementById("T").display = "none";
    document.getElementById("T").className = "piano__blue";
    document.getElementById("U").display = "none";
    document.getElementById("U").className = "piano__blue";
    document.getElementById("I").display = "none";
    document.getElementById("I").className = "piano__blue";
    document.getElementById("O").display = "none";
    document.getElementById("O").className = "piano__blue";

    document.getElementById("D").display = "none";
    document.getElementById("D").className = "piano__white";
    document.getElementById("F").display = "none";
    document.getElementById("F").className = "piano__white";
    document.getElementById("G").display = "none";
    document.getElementById("G").className = "piano__white";
    document.getElementById("H").display = "none";
    document.getElementById("H").className = "piano__white";
    document.getElementById("J").display = "none";
    document.getElementById("J").className = "piano__white";
    document.getElementById("K").display = "none";
    document.getElementById("K").className = "piano__white";
    document.getElementById("L").display = "none";
    document.getElementById("L").className = "piano__white";

    document.getElementById('buttonNotes').style.backgroundColor = "#5097ff";
    document.getElementById('buttonNotes').style.borderColor = "#5097ff";
    document.getElementById('buttonLetters').style.backgroundColor = null;
    document.getElementById('buttonLetters').style.borderColor = null;
});

document.getElementById("buttonLetters").addEventListener("click", function() {
    isLettersButtonPress = true;
    document.getElementById("R").display = "none";
    document.getElementById("R").className = "piano__blue_letter";
    document.getElementById("T").display = "none";
    document.getElementById("T").className = "piano__blue_letter";
    document.getElementById("U").display = "none";
    document.getElementById("U").className = "piano__blue_letter";
    document.getElementById("I").display = "none";
    document.getElementById("I").className = "piano__blue_letter";
    document.getElementById("O").display = "none";
    document.getElementById("O").className = "piano__blue_letter";

    document.getElementById("D").display = "none";
    document.getElementById("D").className = "piano__white_letter";
    document.getElementById("F").display = "none";
    document.getElementById("F").className = "piano__white_letter";
    document.getElementById("G").display = "none";
    document.getElementById("G").className = "piano__white_letter";
    document.getElementById("H").display = "none";
    document.getElementById("H").className = "piano__white_letter";
    document.getElementById("J").display = "none";
    document.getElementById("J").className = "piano__white_letter";
    document.getElementById("K").display = "none";
    document.getElementById("K").className = "piano__white_letter";
    document.getElementById("L").display = "none";
    document.getElementById("L").className = "piano__white_letter";

    document.getElementById('buttonLetters').style.backgroundColor = "#5097ff";
    document.getElementById('buttonLetters').style.borderColor = "#5097ff";
    document.getElementById('buttonNotes').style.backgroundColor = null;
    document.getElementById('buttonNotes').style.borderColor = null;
});