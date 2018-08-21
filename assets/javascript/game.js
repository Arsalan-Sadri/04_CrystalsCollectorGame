//--------------------- GLOABAL VARIABLES------//
// variable to hold randonly generated number by computer 
var targetNum;


//------ function to choose and reset random number chosen by computer------//
function resetTargetNum() {
    // Generete a random number 
    targetNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // update the html document 
    $("#targetNumHeading").text(targetNum);
}

//------- initializing the page -------------//  
document.body.onload = function () {
    resetTargetNum();
}

// event handler
$(document).ready(function () {

});