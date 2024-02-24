//Event Listeners
document.getElementById("addShoes").addEventListener("click", addShoes);
document.getElementById("addShirt").addEventListener("click", addShirt);
document.getElementById("addBall").addEventListener("click", addBall);

document.getElementById("place-order").addEventListener("click", placeOrder);
document.getElementById("clear-order").addEventListener("click", clearOrder);

document.getElementById("addShoes").addEventListener("click", calcTotalCost);
document.getElementById("addShirt").addEventListener("click", calcTotalCost);
document.getElementById("addBall").addEventListener("click", calcTotalCost);

document.getElementById("order-history-button").addEventListener("click", displayOrderHistory);
document.getElementById("hide-history-button").addEventListener("click", hideOrderHistory);

document.getElementById("go-bowling").addEventListener("click", goBowling);

//variables
let shoesQuantity = 0;
let shirtQuantity = 0;
let ballQuantity = 0;

let shoesPrice = 0;
let shirtPrice = 0;
let ballPrice = 0;

let totalPrice = 0;

let orders = [];

const bowlingDiv = document.getElementById("bowling-image-div");
bowlingDiv.style.display = "none";


//functions
//generate random number for customer order number
function genOrderNumber(){
  let orderNumber = Math.floor(Math.random() * 1000) + 1000;
  return orderNumber;
}

//adding items to the order
function addShoes(){
  if (document.getElementById("result-message").innerText) {
    document.getElementById("result-message").innerText = "";
  }
  console.log("Shoes have been added!");
  ++shoesQuantity;
  shoesPrice = shoesQuantity * 14.99;
  totalPrice += shoesPrice;
  document.getElementById("shoes-cart-name").innerText = "Bowling shoes";
  document.getElementById("shoes-cart-quantity").innerText = shoesQuantity;
  document.getElementById("shoes-cart-price").innerText = shoesPrice.toFixed(2);
  document.getElementById("cart-tr-shoes").style.visibility = "visible";
}

function addShirt(){
  if (document.getElementById("result-message").innerText) {
    document.getElementById("result-message").innerText = "";
  }
  console.log("A shirt has been added!");
  ++shirtQuantity;
  shirtPrice = shirtQuantity * 9.99;
  totalPrice += shirtPrice;
  document.getElementById("shirt-cart-name").innerText = "Bowling Shirt";
  document.getElementById("shirt-cart-quantity").innerText = shirtQuantity;
  document.getElementById("shirt-cart-price").innerText = shirtPrice.toFixed(2);
  document.getElementById("cart-tr-shirt").style.visibility = "visible";
}

function addBall(){
  if (document.getElementById("result-message").innerText) {
    document.getElementById("result-message").innerText = "";
  }
  console.log("A ball has been added!");
  ++ballQuantity;
  ballPrice = ballQuantity * 24.99;
  totalPrice += ballPrice;
  document.getElementById("ball-cart-name").innerText = "Bowling Ball";
  document.getElementById("ball-cart-quantity").innerText = ballQuantity;
  document.getElementById("ball-cart-price").innerText = ballPrice.toFixed(2);
  document.getElementById("cart-tr-ball").style.visibility = "visible";
}

function calcTotalCost(){
  let shoesPrice = Number(document.getElementById("shoes-cart-price").innerText);
  let shirtPrice = Number(document.getElementById("shirt-cart-price").innerText);
  let ballPrice = Number(document.getElementById("ball-cart-price").innerText);
  totalPrice = (shoesPrice + shirtPrice + ballPrice);
  console.log(totalPrice.toFixed(2));
  document.getElementById("total-cost-number").innerText = totalPrice.toFixed(2);
  return;
}

//reset values in cart and start over
function clearOrder() {
  console.log("Clearing order");
  document.getElementById("result-message").innerHTML = "<h4> Your order has been cleared! </h4>";
  shoesQuantity = 0;
  shirtQuantity = 0;
  ballQuantity = 0;
  shoesPrice = 0;
  shirtPrice = 0;
  ballPrice = 0;
  totalPrice = 0;
  document.getElementById("shoes-cart-name").innerText = "";
  document.getElementById("shoes-cart-quantity").innerText = "";
  document.getElementById("shoes-cart-price").innerText = "";
  document.getElementById("shirt-cart-name").innerText = "";
  document.getElementById("shirt-cart-quantity").innerText = "";
  document.getElementById("shirt-cart-price").innerText = "";
  document.getElementById("ball-cart-name").innerText = "";
  document.getElementById("ball-cart-quantity").innerText = "";
  document.getElementById("ball-cart-price").innerText = "";
  document.getElementById("total-cost-number").innerText = "";
  document.getElementById("shipping-method").value = "";
  document.getElementById("cart-tr-shoes").style.visibility = "collapse";
  document.getElementById("cart-tr-shirt").style.visibility = "collapse";
  document.getElementById("cart-tr-ball").style.visibility = "collapse";
}

//determine message based on the shipping method
function shipMessage(shipMethod) {
  if (shipMethod === "Ground") {
    return "Your order will arrive in 5-7 business days";
  } else if (shipMethod === "Express") {
    return "Your order will arrive in 2-4 business days";
  } else {
    return "Gary is in a meeting but will deliver your items as soon as possible";
  }
}

//determine image generated based on shipping method
function shipImage(shipMethod) {
  if (shipMethod === "Ground") {
    return "img src='img/ground.png'";
  } else if (shipMethod === "Express") {
    return "img src='img/express.png'";
  } else {
    return "img src='img/gary.png'";
  }
}

function placeOrder() {
  //determine if there is a non-null value in total cost to proceed
  if (document.getElementById("total-cost-number").innerText) {
    let shipMethod = document.getElementById("shipping-method").value;
    //determine if the user has selected a shipping method
    if (shipMethod != "Select") {
      let orderNumber = genOrderNumber();
      console.log("Placing order");
      orders.push({orderNumber: orderNumber, totalCost: ("$" + totalPrice.toFixed(2))});
      document.getElementById("result-message").innerHTML = `<h3> Thank you for your order! </h3> <h4> Your order number is ${orderNumber} </h4> <h4> ${shipMessage(shipMethod)} </h4><div><${shipImage(shipMethod)}></div>`;
      shoesQuantity = 0;
      shirtQuantity = 0;
      ballQuantity = 0;
      shoesPrice = 0;
      shirtPrice = 0;
      ballPrice = 0;
      totalPrice = 0;
      document.getElementById("shoes-cart-name").innerText = "";
      document.getElementById("shoes-cart-quantity").innerText = "";
      document.getElementById("shoes-cart-price").innerText = "";
      document.getElementById("shirt-cart-name").innerText = "";
      document.getElementById("shirt-cart-quantity").innerText = "";
      document.getElementById("shirt-cart-price").innerText = "";
      document.getElementById("ball-cart-name").innerText = "";
      document.getElementById("ball-cart-quantity").innerText = "";
      document.getElementById("ball-cart-price").innerText = "";
      document.getElementById("total-cost-number").innerText = "";
    } else {
      console.log("Need to select shipping method.");
      document.getElementById("result-message").innerHTML = "<h4> Please select a shipping method </h4>";
    }
    } else {
      console.log("Need to add items to order.");
      document.getElementById("result-message").innerHTML = "<h4> Please add items to your order </h4>";
    }
}

function displayOrderHistory() {
  let orderHistory = "";
  if (orders.length == 0) {
    document.getElementById("display-order-history").innerHTML = "<h4> No orders have been placed yet </h4>";
    //message about no order history will go away after 2 seconds
    setTimeout(() => {
      const box = document.getElementById("display-order-history");
      box.innerHTML = "";
    }, 2000);
  } else {
    for (let i = 0; i < orders.length; i++) {
      orderHistory += `<p> Order Number: ${orders[i].orderNumber} - Total Cost: ${orders[i].totalCost} </p>`
    }
    document.getElementById("display-order-history").innerHTML = orderHistory;
  }
}

function hideOrderHistory() {
  document.getElementById("display-order-history").innerHTML = "";
}

//toggles a bowling image
function goBowling() {
  if (bowlingDiv.style.display == "none") {
    bowlingDiv.style.display = "block";
  } else {
    bowlingDiv.style.display = "none";
  }
}