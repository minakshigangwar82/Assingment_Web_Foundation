// Find the largest number in an array
let numbers =[13,35,46,78,]
let largest = Math.max(...numbers);
console.log("Largest number:", largest);

// Reverse a string
let str = "JavaScript";
let reversed = str.split("").reverse().join(""); 
console.log("Reversed string:", reversed);

// Remove duplicate element
let arr =[10,20,40,35,10,20]
let uniqueArray = [...new Set(arr)]; 
console.log("Unique elements:", uniqueArray);