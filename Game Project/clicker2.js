var chocolate = 0;
var chocolateButton = document.getElementById("chocolateButton");
var chocolateDisplay = document.getElementById("chocDisplay");

chocolateButton.onclick = function() {
  chocolate = chocolate + 10;
  chocDisplay.innerHTML = chocolate + " Chocolate Bars";
}
var candyCane = 0;
var caneButton = document.getElementById("caneButton");
var caneDisplay = document.getElementById("caneDisplay");

caneButton.onclick = function() {
  candyCane = candyCane + 5;
  caneDisplay.innerHTML = candyCane + " Candy Canes";
}
var cake = 0;
var cakeButton = document.getElementById("cakeButton");
var cakeDisplay = document.getElementById("cakeDisplay");

cakeButton.onclick = function() {
  cake = cake + 2;
  cakeDisplay.innerHTML = cake + " Cakes";
}
var bake = 0;
var bakeButton = document.getElementById("bakeButton");
var bakeDisplay = document.getElementById("bakeDisplay");

bakeButton.onclick = function() {
  if (cake >= 10)
    cake -= 10;
    bake ++;
    cakeDisplay.innerHTML = Math.round (cake) + " Cakes";
    bakeDisplay.innerHTML = Math.round (bake) + " Bakers";
}, 50;

setInterval(function() {
  cake += bake / 20;
  bakeDisplay.innerHTML = Math.round (bake) + " Bakers";
  cakeDisplay.innerHTML = Math.round (cake) + " Cakes";
}, 100);
