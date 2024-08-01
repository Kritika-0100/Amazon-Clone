let cart = [];

function addToCart(productName, productPrice) {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  if (storedCart) {
    cart = storedCart;
  }

  const product = {
    name: productName,
    price: productPrice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + ' added to cart!');
  window.location.href = 'Amazoncart.html'; // redirect to cart page
}

function displayCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalPriceDiv = document.getElementById('total-price');
  const storedCart = JSON.parse(localStorage.getItem('cart'));

  if (storedCart) {
    cart = storedCart;
  } else {
    cart = [];
  }

  let total = 0;
  cartItemsDiv.innerHTML = '';

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Cart is empty.</p>';
  } else {
    cart.forEach((item, index) => {
      total += item.price;
      cartItemsDiv.innerHTML += `
        <div class="cart-item">
          <p>${item.name} - ₹ ${item.price}</p>
          <button class="remove" onclick="removeFromCart(${index})">Remove</button> <br>
        </div>
      `;
    });
  }

  totalPriceDiv.innerHTML = `<p class="price">Total Price: ₹ ${total}</p>`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

if (document.location.pathname.endsWith('Amazoncart.html')) {
  displayCart();
}