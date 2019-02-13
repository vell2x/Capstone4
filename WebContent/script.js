/**
 * 
 */

var items = [];
var prices = [];
var printThis = [];

function addToCart(name, price) {
	items.push(name);
	prices.push(price);
	
}

function printCart() {
	var i;
	var total;
	
	for (i = 0; i < items.length; i++) { 
		console.log(items[i] + " " + prices[i]) + "<br>";
		printThis[i] = items[i].concat(" ", prices[i]);
		total = total + prices[i];
	}
	console.log(total);
	document.getElementById("Cart").innerHTML = printThhis.join("<br>");
}