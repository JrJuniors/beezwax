/*
Dominic Lutz
Joshua Peoples
12/6/2019
Professor Kinuthia
ISYS 288 - 001

JavaScript document that validates the information entered into the form,
and uses a mailto: link to open the user's email application and autofills
the given information into the new email.
*/

document.getElementById("btn").addEventListener("click", submit);
function submit(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var selects = document.getElementById("selects").value;
	var radios;
	if(document.getElementById("radios").checked){
		radios = "yes";
	}
	else{
		radios = "no";
	}
	if (name == ""){
		alert("Name must be entered!");
		document.getElementById("name").style.backgroundColor = "blanchedalmond"; 
		return false;
	}
	else{
		document.getElementById("name").style.backgroundColor = "white"; 
	}
	
	if (email == "" || email.startsWith("@") || email.endsWith("@") || !(email.includes("@"))){
		alert("Valid email must be entered!");
		document.getElementById("email").style.backgroundColor = "blanchedalmond"; 
		return false;
	}
	else{
		document.getElementById("email").style.backgroundColor = "white"; 
	}
 
	if (message == ""){
		alert("Message must be entered!");
		document.getElementById("message").style.backgroundColor = "blanchedalmond"; 
		return false;
	}
	else{
		document.getElementById("message").style.backgroundColor = "white"; 
	}
	
	if (selects == "select"){
		alert("Please pick your favorite Bee!");
		document.getElementById("selects").style.backgroundColor = "blanchedalmond"; 
		return false;
	}
	else{
		document.getElementById("selects").style.backgroundColor = "white"; 
	}
	window.open("mailto:beez.beezwax@gmail.com?subject=Reply%20To%20" + email + "&body=Feedback:%20" + radios + "%0d%0aFavorite Bee:%20" + selects + "%0d%0aMessage:%20" + message);
}
 
