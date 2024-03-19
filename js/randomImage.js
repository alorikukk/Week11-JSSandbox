const myButton = document.querySelector ('button');
const myImg = document.querySelector ('img');
var images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];
var imgIndex = 0;
var randomIndex = 0;

myButton.addEventListener ('click', changeImg);

function changeImg() {
    while (randomIndex == imgIndex){
       randomIndex = Math.floor(Math.random() * images.length);
    }
    imgIndex = randomIndex;
    myImg.src = "images/"+images[imgIndex];

}