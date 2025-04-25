// Change text content dynamically
document.getElementById("shopTitle").textContent = "Welcome to Fair-deal Packaging";

// Modify CSS styles via JavaScript
document.body.style.backgroundColor = "#f9f9f9";

// Handle product list
const productList = document.getElementById("productList");
const addProductBtn = document.getElementById("addProductBtn");
const removeProductBtn = document.getElementById("removeProductBtn");

let productCount = 2;

addProductBtn.addEventListener("click", () => {
    productCount++;
    const li = document.createElement("li");
    li.textContent = `Product ${String.fromCharCode(64 + productCount)} - $${productCount * 10}`;
    productList.appendChild(li);
});

removeProductBtn.addEventListener("click", () => {
    if (productList.lastElementChild) {
        productList.removeChild(productList.lastElementChild);
        productCount--;
    }
});
