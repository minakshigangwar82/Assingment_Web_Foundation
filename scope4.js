// Utility Function
function calculateTotal(prices) {
    if (!Array.isArray(prices)) {
        return "Invalid Input";
    }

    return prices.reduce((sum, price) => sum + price, 0);
}

// Test Cases
console.log("Test Case 1:", calculateTotal([100, 200, 300]));

console.log("Test Case 2:", calculateTotal([50, 50]));

console.log("Test Case 3:", calculateTotal([]));

console.log("Test Case 4:", calculateTotal("100,200"));

console.log("Test Case 5:", calculateTotal([10, 20, 30]));