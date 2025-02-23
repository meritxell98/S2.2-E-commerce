// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;


// Exercise 1
function buy(id) {
    
    let product = products.find(p => p.id === id);

    let itemInCart = cart.find(item => item.id === id);

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
}

// Exercise 2
function cleanCart() {
    cart.splice(0,cart.length)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    for (let j = 0; j < cart.length; j++) {
        total += cart[j].price;
    }

    console.log()
}
// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let index = 0; index < cart.length; index++) {
        
        if (cart[index].id == 1 && cart[index].quantity >= 3) {
            cart[index].subtotalWithDiscount = cart[index].price * 0.20
            return
            
        }

        if (cart[index].id == 3 && cart[index].quantity >= 10) {
            cart[index].subtotalWithDiscount = cart[index].price * 0.30
            return
        }

        else{
            cart[index].subtotalWithDiscount = 0
        }
    }

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let cartList = document.getElementById('cart_list');
    let totalPriceElement = document.getElementById("total_price");
    cartList.innerHTML = ""; // Neteja el contingut previ
    
    let total = 0;
    
    applyPromotionsCart();

    console.log(cart)
    cart.forEach(item => {
        
        let itemTotal = (item.price * item.quantity) - item.subtotalWithDiscount;
        total += itemTotal;

        let row = `
            <tr>
                <th scope="row">${item.name}</th>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
        cartList.innerHTML += row;
    });

    totalPriceElement.textContent = total.toFixed(2);

document.getElementById("cartModal").addEventListener("shown.bs.modal", printCart);
    
}
// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity - 1;
        }

        if (cart[i].quantity = 0) {
            cart.splice(cart[i], 1)
        }
    }
}

function open_modal() {
    printCart();
}