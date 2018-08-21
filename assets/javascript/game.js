// variable to hold randonly generated number by computer 
var targetNum;


//------ function to choose and reset random number chosen by computer------//
function resetTargetNum() {
    // Generete a random number 
    targetNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    // update the html document 
    $("#targetNumHeading").text("arsalan");
}

//------- initializing the page -------------//  
document.body.onload = function () {
    resetTargetNum();
} // End of page loading 

// event handler
$(document).ready(function () {

});