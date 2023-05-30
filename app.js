const menuItems = document.querySelectorAll(".menuItem");
console.log(menuItems);
const wrapper = document.querySelector(".sliderWrapper");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chooseProduct = products[0];

const chooseProductImg = document.querySelector(".productImage");
const chooseProductPrice = document.querySelector(".productPrice");
const chooseProductTitle = document.querySelector(".productTitle");
const chooseProductColors = document.querySelectorAll(".color");
const chooseProductSizes = document.querySelectorAll(".size");

menuItems.forEach((items, index) => {
  items.addEventListener("click", () => {
    wrapper.style.transform = `translate(${-100 * index}vw) `;
    chooseProduct = products[index];
    chooseProductImg.src = chooseProduct.colors[0].img;
    chooseProductTitle.textContent = chooseProduct.title;
    chooseProductPrice.textContent = "$" + chooseProduct.price;
    chooseProductColors.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});

chooseProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    chooseProductImg.src = chooseProduct.colors[index].img;
  });
});

chooseProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    chooseProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const payment = document.querySelector(".payment");

const buyButton = document.querySelector(".productBuyBtn");
const closeBtn = document.querySelector(".close");

buyButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  payment.style.display = "none";
});
