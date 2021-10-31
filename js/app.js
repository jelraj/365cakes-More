// (function() {
//   const cartInfo = document.getElementById("cart-info");
//   const cart = document.getElementById("cart");

//   cartInfo.addEventlistener("click", function(){
//     cart.classList.toggle("show-cart");
//   });
// })();

document.getElementById("cart-info").addEventListener("click", function(){
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
})
