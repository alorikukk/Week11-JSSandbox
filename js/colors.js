const myButton = document.querySelector ('button');
const myBox = document.querySelector ('.box');
var colors = ["red", "green", "blue", "yellow"];
var colorIndex = 0;
var randomIndex = 0;

myButton.addEventListener ('click', changeColor);

function changeColor() {
    while (randomIndex == colorIndex){
       randomIndex = Math.floor(Math.random() * colors.length);
    }
    colorIndex = randomIndex;
    myBox.style.backgroundColor = colors[colorIndex];

}