
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var letter = this.textContent;
    playSoundFromLetter(letter);
    buttonAnimation(letter);
});
}

document.addEventListener("keydown", function(event){
    var letter = event.key;
    playSoundFromLetter(letter);
    buttonAnimation(letter);
})

function playSoundFromLetter(letter){
    console.log(letter);
switch (letter) {
    case "w":
        var drum1 = new Audio("sounds/tom-1.mp3");
        drum1.play();
        break;
    case "a":
        var drum2 = new Audio("sounds/tom-2.mp3");
        drum2.play();
    break;
    case "s":
        var drum3 = new Audio("sounds/tom-3.mp3");
        drum3.play();
    break;
    case "d":
        var drum4 = new Audio("sounds/tom-4.mp3");
        drum4.play();
    break;
    case "j":
        var drum5 = new Audio("sounds/snare.mp3");
        drum5.play();
    break;
    case "k":
        var drum6 = new Audio("sounds/crash.mp3");
        drum6.play();
    break;
    case "l":
        var drum7 = new Audio("sounds/kick-bass.mp3");
        drum7.play();
    break;
    default:
        break;
}
}

function buttonAnimation(letter){
    var activeButton = document.querySelector("."+ letter);
        activeButton.classList.toggle("pressed");
        setTimeout(() => {  activeButton.classList.toggle("pressed"); }, 150);
    }

/*function calculator(num1, num2, operator){
   return operator(num1, num2);
}

function add(num1, num2){
    return num1+num2;
}

function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
function subtract(num1, num2){
    return num1-num2;
}
*/


