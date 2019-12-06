document.getElementById("btn").addEventListener("click", submit);
function submit(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var radios = document.getElementById("radios").value;
	var selects = document.getElementById("selects").value;
	  
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
 
