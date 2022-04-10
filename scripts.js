//Welcome Message
var user= 'Steve';
var salutaion= 'Hello';
var greeting = salutaion + user + '! Here are the latest Atom reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Product Price
var price= 20,
    studentDiscouunting = .10,
    studentPrice = price - (price * studentDiscouunting),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);