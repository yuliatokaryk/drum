var lenButton = (document.querySelectorAll("button").length);

for (var i = 0; i < lenButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonClicked = this.innerHTML;

    makeSound(buttonClicked);

    buttonMove(buttonClicked);
});
}

document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonMove(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "d":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log("buttonClicked");
    }
};

function buttonMove(currentKey) {

    var buttonPress = document.querySelector("." + currentKey);
    buttonPress.classList.add("pressed");

    setTimeout (function(){
        buttonPress.classList.remove("pressed");
    }, 100); 
};