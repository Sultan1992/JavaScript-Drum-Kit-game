
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
//detacting button press
for (var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener("click", function ()
    {
     //switch letter on click
        var buttonInnerHtml = this.innerHTML
        makeSounds(buttonInnerHtml);
        
});    
}
//for key press
document.addEventListener("keypress",function(event){
    makeSounds(event.key);
})
//
function makeSounds(key)
{
    switch (key)
        {
            case 'S':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'L':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'U':
                    var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'T':
                    var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case 'A':
                    var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'N':
                    var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 'F':
                    var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            default:
        }
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

//take away from this project
//DOM ELEMENTS IN JAVASCRIPTS 
//adding event lister 
//using higher order function such as calling function inside other functions 
//constructor functions 
//javasript objects and proprties
//arrays 