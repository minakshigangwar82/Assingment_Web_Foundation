// Merge Settings
function mergeSettings(a, b) {
    let settings = {};

    settings.theme = b.theme || a.theme;
    settings.language = b.language || a.language;
    settings.notifications = a.notifications;

    return settings;
}

let defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

let userSettings = {
    theme: "dark",
    language: "Hindi"
};

let result = mergeSettings(defaultSettings, userSettings);

console.log("Merged Settings:");
console.log(result);


// Calculate Total
function calculateTotal(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }

    return total;
}

let prices = [100, 200, 300, 400];

console.log("Total Amount:", calculateTotal(prices));