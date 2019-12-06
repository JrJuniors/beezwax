document.getElementById("btnSend").addEventListener("click", submit);

function submit(){
  var name = document.getElementById("name");
  var email = document.getElemenyById("email");
  var message = document.getElementById("message");
  var radio = document.getElementById("radio");
  var select = document.getElementById("select");
  
  if (name.value == "") {
    alert("Name must be filled out!");
    name.style.background-color = "BlanchedAlmond"
    return false;
  }
  
 }
