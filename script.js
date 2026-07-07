// =======================
// SMARTZMART SCRIPT
// =======================

// Get Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Coupon state (session only, resets on reload — matches "Try: SMART10" hint on cart page)
let discountPercent = 0;

// ---------------------------------------------------
// Toast notification (replaces old blocking alert())
// ---------------------------------------------------
function showToast(message){

    let toast = document.getElementById("smToast");

    if(!toast){
        toast = document.createElement("div");
        toast.id = "smToast";
        toast.className = "sm-toast";
        document.body.appendChild(toast);
    }

    toast.innerHTML = "✅ " + message;
    toast.classList.add("show");

    clearTimeout(window._smToastTimer);
    window._smToastTimer = setTimeout(()=>{
        toast.classList.remove("show");
    }, 2200);
}

// Update Cart Badge
function updateCartCount() {

const badge = document.getElementById("cartCount");

if(badge){

const totalQty = cart.reduce((sum,item)=>sum+item.qty,0);

badge.innerText = totalQty;

// small pop animation whenever the badge updates
badge.classList.remove("badge-pop");
void badge.offsetWidth; // restart animation
badge.classList.add("badge-pop");

}

}

// Save Cart
function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

}

// Add Product
function addToCart(id){

const product = products.find(p=>p.id==id);

if(!product) return;

const exist = cart.find(item=>item.id==id);

if(exist){

exist.qty++;

}else{

cart.push({

...product,

qty:1

});

}

saveCart();

showToast(product.name+" added to cart");

}

// Remove Product
function removeProduct(id){

cart = cart.filter(item=>item.id!=id);

saveCart();

loadCart();

}

// Increase Quantity
function increaseQty(id){

cart.forEach(item=>{

if(item.id==id){

item.qty++;

}

});

saveCart();

loadCart();

}

// Decrease Quantity
function decreaseQty(id){

cart.forEach(item=>{

if(item.id==id && item.qty>1){

item.qty--;

}

});

saveCart();

loadCart();

}

// Apply Coupon (SMART10 = 10% off)
function applyCoupon(){

const input = document.getElementById("couponInput");

const msg = document.getElementById("couponMsg");

if(!input) return;

const code = input.value.trim().toUpperCase();

if(code === "SMART10"){

discountPercent = 10;

if(msg){
    msg.innerHTML = "🎉 SMART10 applied — 10% off your order!";
    msg.className = "text-success mt-3 fw-semibold";
}

}else{

discountPercent = 0;

if(msg){
    msg.innerHTML = "❌ Invalid coupon code. Try SMART10.";
    msg.className = "text-danger mt-3 fw-semibold";
}

}

loadCart();

}

// Load Cart Page
function loadCart(){

const body=document.getElementById("cartBody");

const totalEl=document.getElementById("cartTotal");

const subtotalEl=document.getElementById("cartSubtotal");

const discountEl=document.getElementById("cartDiscount");

const discountRow=document.getElementById("discountRow");

const discountHr=document.getElementById("discountHr");

if(!body) return;

body.innerHTML="";

let subtotal=0;

if(cart.length==0){

body.innerHTML=`

<tr>

<td colspan="6" class="text-center p-5">

<h3>Your Cart is Empty 🛒</h3>

<a href="index.html" class="btn btn-warning mt-3">

Continue Shopping

</a>

</td>

</tr>

`;

if(subtotalEl) subtotalEl.innerHTML="₹0";

if(totalEl) totalEl.innerHTML="₹0";

if(discountRow) discountRow.style.display="none";

if(discountHr) discountHr.style.display="none";

return;

}

cart.forEach(item=>{

subtotal += item.price*item.qty;

body.innerHTML +=`

<tr class="cart-row">

<td>

<img src="${item.image}"
width="70">

</td>

<td>${item.name}</td>

<td>₹${item.price.toLocaleString()}</td>

<td>

<button class="btn btn-sm btn-danger"

onclick="decreaseQty(${item.id})">

-

</button>

<span class="mx-2">

${item.qty}

</span>

<button class="btn btn-sm btn-success"

onclick="increaseQty(${item.id})">

+

</button>

</td>

<td>

₹${(item.price*item.qty).toLocaleString()}

</td>

<td>

<button

class="btn btn-danger"

onclick="removeProduct(${item.id})">

Remove

</button>

</td>

</tr>

`;

});

const discountAmount = Math.round(subtotal * (discountPercent/100));

const grandTotal = Math.round(subtotal - discountAmount);

if(subtotalEl) subtotalEl.innerHTML = "₹"+subtotal.toLocaleString();

if(discountPercent > 0){

if(discountRow) discountRow.style.display="flex";

if(discountHr) discountHr.style.display="block";

if(discountEl) discountEl.innerHTML = "− ₹"+discountAmount.toLocaleString();

}else{

if(discountRow) discountRow.style.display="none";

if(discountHr) discountHr.style.display="none";

}

if(totalEl) totalEl.innerHTML="₹"+grandTotal.toLocaleString();

}

// Search
function searchProducts(){

const input=document.getElementById("searchInput");

if(!input) return;

const value=input.value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

let anyVisible = false;

cards.forEach(card=>{

const name=card.innerText.toLowerCase();

const match = name.includes(value);

const col = card.closest(".col-lg-3, .col-md-6, .col-lg-4") || card.parentElement;

if(match) anyVisible = true;

col.style.display = match ? "" : "none";

});

let noResultsEl = document.getElementById("noResultsMsg");

const grid = document.querySelector("#products .row, .row.g-4");

if(value && !anyVisible && grid){

if(!noResultsEl){

noResultsEl = document.createElement("div");

noResultsEl.id = "noResultsMsg";

noResultsEl.className = "text-center w-100 py-5";

noResultsEl.innerHTML = "<h4>😕 No products found</h4><p class='text-muted'>Try a different keyword.</p>";

grid.appendChild(noResultsEl);

}

}else if(noResultsEl){

noResultsEl.remove();

}

}

// ---------------------------------------------------
// Scroll reveal animation for product cards
// (adds a class only — markup/structure untouched)
// ---------------------------------------------------
function initScrollReveal(){

const items = document.querySelectorAll(".product-card, .card");

if(!items.length) return;

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("sm-reveal-in");

observer.unobserve(entry.target);

}

});

},{threshold:0.1});

items.forEach(item=>{

item.classList.add("sm-reveal");

observer.observe(item);

});

}

// Start
updateCartCount();

loadCart();

document.addEventListener("DOMContentLoaded", initScrollReveal);
