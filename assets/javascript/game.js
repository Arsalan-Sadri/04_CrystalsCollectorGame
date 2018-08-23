//--------------------- GLOABAL VARIABLES ---------------//
// variable to hold randonly generated number by computer 
var targetNum;


//------ function to reset target number -------//
function resetTargetNum() {
    // Generete a random number 
    targetNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // update the html document 
    $("#targetNumHeading").text(targetNum);
}

//------ function to reset crystals -------//
function resetCrystals() {
    
}
//------ function to initialize the game ---------------//
function gameInit() {
    resetTargetNum();
    resetCrystals();

}


//------- Page loading -------------//  
document.body.onload = function () {
    resetTargetNum();
}

// event handler
$(document).ready(function () {

});