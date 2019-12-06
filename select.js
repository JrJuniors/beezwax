/*
Dominic Lutz
Joshua Peoples
12/6/2019
Professor Kinuthia
ISYS 288 - 001

JavaScript document that populates the select input element
*/

var values = [ "select", "honey", "bumble", "leafcutter/mason", "digger/carpenter", "mining"];
var texts = ["Select Bee:", "Honey Bee", "Bumble Bee", "Leafcutter/Mason Bee", "Digger/Carpenter Bee", "Mining Bee"];

var beeList = document.getElementById("selects");
var i;
for(i = 0; i < values.length; i++) {
	var bee = new Option(texts[i], i);
	bee.value = values[i];
	beeList.options.add(bee);
}
