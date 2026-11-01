let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);
    console.log("Item Added:", item);
}

function showList() {
    console.log("Shopping List:");

    shoppingList.forEach(function(item) {
        console.log(item);
    });
}

function removeItem(item) {
    let index = shoppingList.indexOf(item);

    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log("Item Removed:", item);
    } else {
        console.log("Item Not Found");
    }
}

// Add Items
addItem("Milk");
addItem("Bread");
addItem("Rice");

// Show List
showList();

// Remove Item
removeItem("Bread");

// Show Updated List
console.log("Updated Shopping List:");
showList();