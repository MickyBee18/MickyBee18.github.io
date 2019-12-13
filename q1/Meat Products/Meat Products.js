var arr = document.getElementsByTagName('button');

window.onload = function() {
  for(var i = 0; i < arr.length; i++) {
    let btn = arr[i].id;
    arr[i].onclick = function() {
      addToCart(btn);
    }
  }
}

function add(price, name) {
  let cart = "";
  if("cart" in sessionStorage)
    cart = sessionStorage.getItem("cart");
  cart += " Price: " + price + " Name: " + name;
  sessionStorage.setItem("cart", cart);
}

//u have to copy this multimultimegamulti times
function addToCart(id) {
  if(id == "beef"){
    let price = 19.99;
    add(price, id);
  }
  if(id == "eye"){
    let price = 17.25;
    add(price, id);
  }
  if(id == "rib"){
    let price = 28.75;
    add(price, id);
  }
  if(id == "liver"){
    let price = 38.80;
    add(price, id);
  }
  if(id == "ton"){
    let price = 9.50;
    add(price, id);
  }
  if(id == "chicc"){
    let price = 19.99;
    add(price, id);
  }
  if(id == "cwing"){
    let price = 8.99;
    add(price, id);
  }
  if(id == "cdrum"){
    let price = 8.80;
    add(price, id);
  }
  if(id == "cbre"){
    let price = 11.99;
    add(price, id);
  }
  if(id == "cfee"){
    let price = 11.50;
    add(price, id);
  }
  if(id == "tuna"){
    let price = 45.80;
    add(price, id);
  }
  if(id == "salmo"){
    let price = 34.50;
    add(price, id);
  }
  if(id == "mack"){
    let price = 20.00;
    add(price, id);
  }
  if(id == "ancho"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "cavia"){
    let price = 44.80;
    add(price, id);
  }
  if(id == "css"){
    let price = 14.50;
    add(price, id);
  }
  if(id == "chss"){
    let price = 6.80;
    add(price, id);
  }
  if(id == "baco"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "tham"){
    let price = 18.90;
    add(price, id);
  }
  if(id == "lamcho"){
    let price = 24.50;
    add(price, id);
  }
