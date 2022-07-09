var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimages = "dice" + randomnumber1 + ".png";
var imagesource = "images/" + randomdiceimages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randominages2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randominages2);
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else {
  document.querySelector("h1").innerHTML = " draw";
}
