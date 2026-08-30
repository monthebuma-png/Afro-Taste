
let cart = [];

const cartItems = document.querySelector("#cartItems");
const totalDisplay = document.querySelector("#total");
const cartCount = document.querySelector("#cartCount");


// Add food to cart

document.querySelectorAll(".add-cart").forEach(button => {

  button.addEventListener("click", () => {

    const food = button.parentElement;
    const name = food.querySelector("h3").textContent;
    const price = Number(food.querySelector("strong").textContent);

    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        name: name,
        price: price,
        quantity: 1
      });
    }

    displayCart();
  });

});


// Display cart

function displayCart() {

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {

    total += item.price * item.quantity;
    count += item.quantity;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <span>
        <b>${item.name}</b><br>
        ${item.price} FCFA
      </span>

      <div class="quantity">

        <button onclick="changeQuantity(${index}, -1)">−</button>

        <span>${item.quantity}</span>

        <button onclick="changeQuantity(${index}, 1)">+</button>

      </div>

      <button class="remove" onclick="removeItem(${index})">
        Remove
      </button>
    `;

    cartItems.appendChild(div);
  });

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }

  totalDisplay.textContent = total;
  cartCount.textContent = count;
}


// Change quantity

function changeQuantity(index, amount) {

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  displayCart();
}


// Remove item

function removeItem(index) {

  cart.splice(index, 1);

  displayCart();
}


// Explore Menu

document.querySelector("#exploreBtn").addEventListener("click", () => {

  document.querySelector("#menu").scrollIntoView({
    behavior: "smooth"
  });

});


// Payment

document.querySelector("#checkout").addEventListener("click", () => {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
  }

  alert(
    "Your order is ready for payment.\nTotal: "
    + totalDisplay.textContent
    + " FCFA"
  );

});

