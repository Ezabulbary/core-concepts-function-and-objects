// sum 
function twoNumber(number1, number2){
    console.log(number1, number2);
    var added = number1 + number2;
    return added;
}
var firstNumber = 32;
var secondNumber = 42;
var total = twoNumber(32, 42);
console.log('tomar total number', total);

// multiply 
function threeNumbere(num1, num2, num3){
    console.log(num1, num2, num3);
    var multiply = num1 * num2 * num3;
    return multiply;
}

var total = threeNumbere(2, 3, 4);
console.log('tomar total multiply', total);

// subtraction

function bookPrice(java, javascript, php){
    console.log(java, javascript, php);
    var subtraction = java - javascript - php;
    return subtraction;
}

var total = bookPrice(100, 122, 233);
console.log('your subtraction bill', total);