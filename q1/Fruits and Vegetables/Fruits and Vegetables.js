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
  if(id == "apple"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "orange"){
    let price = 9.99;
    add(price, id);
  }
  if(id == "Bananas"){
    let price = 15.90;
    add(price, id);
  }
  if(id == "pineapple"){
    let price = 14.90;
    add(price, id);
  }
  if(id == "lemon"){
    let price = 12.99;
    add(price, id);
  }
  if(id == "carrot"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "cucumber"){
    let price = 18.99;
    add(price, id);
  }
  if(id == "redpepper"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "greenpepper"){
    let price = 17.99;
    add(price, id);
  }
  if(id == "broccoli"){
    let price = 8.95;
    add(price, id);
  }
  if(id == "lime"){
    let price = 4.69;
    add(price, id);
  }
  if(id == "mango"){
    let price = 10.95;
    add(price, id);
  }
  if(id == "coconut"){
    let price = 21.99;
    add(price, id);
  }
  if(id == "plum"){
    let price = 9.90;
    add(price, id);
  }
  if(id == "peach"){
    let price = 7.99;
    add(price, id);
  }
  if(id == "cflower"){
    let price = 11.50;
    add(price, id);
  }
  if(id == "spinach"){
    let price = 17.25;
    add(price, id);
  }
  if(id == "potato"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "onion"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "garlic"){
    let price = 24.90;
    add(price, id);
  }
  if(id == "pear"){
    let price = 19.99;
    add(price, id);
  }
  if(id == "pom"){
    let price = 11.99;
    add(price, id);
  }
  if(id == "tomato"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "kiwi"){
    let price = 14.99;
    add(price, id);
  }
  if(id == "squash"){
    let price = 18.99;
    add(price, id);
  }
}
