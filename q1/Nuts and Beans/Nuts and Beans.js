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
  if(id == "al"){
    let price = 19.99;
    add(price, id);
  }
  if(id == "wal"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "cash"){
    let price = 23.99;
    add(price, id);
  }
  if(id == "hazel"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "pea"){
    let price = 1.50;
    add(price, id);
  }
  if(id == "bb"){
    let price = 14.90;
    add(price, id);
  }
  if(id == "gb"){
    let price = 24.99;
    add(price, id);
  }
  if(id == "rb"){
    let price = 20.90;
    add(price, id);
  }
  if(id == "wb"){
    let price = 18.50;
    add(price, id);
  }
  if(id == "brb"){
    let price = 19.99;
    add(price, id);
  }
  if(id == "cp"){
    let price = 2.50;
    add(price, id);
  }
  if(id == "pista"){
    let price = 2.99;
    add(price, id);
  }
  if(id == "chesu"){
    let price = 4.99;
    add(price, id);
  }
  if(id == "peca"){
    let price = 24.99;
    add(price, id);
  }
  if(id == "pn"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "sss"){
    let price = 23.42;
    add(price, id);
  }
  if(id == "pks"){
    let price = 29.99;
    add(price, id);
  }
  if(id == "flax"){
    let price = 35.00;
    add(price, id);
  }
  if(id == "chia"){
    let price = 20.95;
    add(price, id);
  }
  if(id == "sesame"){
    let price = 13.99;
    add(price, id);
  }
}