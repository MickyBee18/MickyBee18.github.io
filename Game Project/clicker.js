var cookies = 0;
var bakers = 0;
var bakerCost = 24;

var oven = document.getElementById("YumYumClick");
var cookiecounter = document.getElementById("cookieCounter");
var bakery = document.getElementById("GetSomeBakers");
var bakerCounter = document.getElementById("BakerCounter");

oven.onclick = function() {
cookies +=12;
cookieCounter.innerHTML = cookies;
}

bakery.onclick = function() {
  if (cookies >= bakerCost) {
    cookies -= bakerCost;
    bakerCost *= 1.2;
    bakers++;
    cookieCounter.innerHTML = Math.round (cookies);
    bakerCounter.innerHTML = bakers;
    bakery.innerHTML = "Bakers - Cost: " + Math.round(bakerCost);
  }
}

setInterval (function () {
  cookies
})
