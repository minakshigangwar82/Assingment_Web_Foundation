let cart = {
    price: 500,
    quantity: 2,

    total: function() {
        return this.price * this.quantity;
    },

    validate: function() {
        return this.quantity > 0;
    }
};

console.log("Total:", cart.total());
console.log("Valid:", cart.validate());