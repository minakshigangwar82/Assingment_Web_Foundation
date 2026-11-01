let products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Mobile", category: "Electronics", price: 20000 },
    { name: "Shirt", category: "Clothing", price: 1000 },
    { name: "Shoes", category: "Fashion", price: 2500 }
];

// Show All Products
console.log("All Products:");
console.log(products);

// Filter Electronics
let result = products.filter(p => p.category === "Electronics");
console.log("Electronics:", result);

// Calculate Total
let total = 0;

for (let p of products) {
    total = total + p.price;
}

console.log("Total Price:", total);
console.log("Total Products:", products.length);