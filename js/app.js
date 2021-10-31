// (function() {
//   const cartInfo = document.getElementById("cart-info");
//   const cart = document.getElementById("cart");

//   cartInfo.addEventlistener("click", function(){
//     cart.classList.toggle("show-cart");
//   });
// })();
const menu = [
  {
    id: 1,
    title: "sweet item",
    category: "sweets",
    price: 10000,
    img: "img/sweets-1.jpeg",
  },
  {
    id: 2,
    title: "cupcake item",
    category: "cup cakes",
    price: 10000,
    img: "img/cupcake-1.jpeg",
  },
  {
    id: 3,
    title: "cake item",
    category: "cakes",
    price: 10000,
    img: "img/cake-1.jpeg",
  },
  {
    id: 4,
    title: "doughnut item",
    category: "doughnuts",
    price: 20.99,
    img: "img/doughnut-1.jpeg",
  },
  {
    id: 5,
    title: "sweet item",
    category: "sweets",
    price: 10000,
    img: "img/sweets-2.jpeg",
  },
  {
    id: 6,
    title: "cupcake item",
    category: "cup cakes",
    price: 10000,
    img: "img/cupcake-2.jpeg",
  },
  {
    id: 7,
    title: "cake item",
    category: "cakes",
    price: 10000,
    img: "img/cake-2.jpeg",
  },
  {
    id: 8,
    title: "doughnut item",
    category: "doughnuts",
    price: 20.99,
    img: "img/doughnut-2.jpeg",
  },
  {
    id: 9,
    title: "sweet item",
    category: "sweets",
    price: 10000,
    img: "img/sweets-3.jpeg",
  },
  {
    id: 10,
    title: "cupcake item",
    category: "cup cakes",
    price: 10000,
    img: "img/cupcake-3.jpeg",
  },
  {
    id: 11,
    title: "cake item",
    category: "cakes",
    price: 10000,
    img: "img/cake-3.jpeg",
  },
  {
    id: 12,
    title: "doughnut item",
    category: "doughnuts",
    price: 10000,
    img: "img/doughnut-3.jpeg"
  },
];

//get parent element
const storeCenter = document.querySelector(".store-items");
const btnContainer = document.querySelector(".btn-container");
//display all items when page loads
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);
  displayMenuButtons();
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    // console.log(item);

    return `
    <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
        <div class="card single-item mx-4">
          <div class="img-container">
            <img src=${item.img} class="card-img-top store-img" alt="${item.title}">
            <span class="store-item-icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </div>
          <div class="card-body">
            <div class="card-text d-flex justify-content-between text-capitalize">
              <h5 id="store-item-name">${item.title}</h5>
              <h5 class="store-item-value">#<strong id="store item-price" class="font-weight-bold">${item.price}</strong></h5>
            </div>
          </div>
        </div>
      </div>
    `
  });
  displayMenu = displayMenu.join("");
  storeCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return ` <button type="button" class="filter-btn btn btn-black text-uppercase" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });

}


document.getElementById("cart-info").addEventListener("click", function(){
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
})
