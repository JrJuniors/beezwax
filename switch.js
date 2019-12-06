/*
Dominic Lutz
Joshua Peoples
12/6/2019
Professor Kinuthia
ISYS 288 - 001

JavaScript document that listens to the radio buttons and automatically switches 
the wasp picture to whichever one is selected 
*/

rad1 = document.getElementById("wasp1");
rad2 = document.getElementById("wasp2");
rad3 = document.getElementById("wasp3");
rad4 = document.getElementById("wasp4");
rad5 = document.getElementById("wasp5");

rad1.addEventListener("click", s);
rad2.addEventListener("click", s);
rad3.addEventListener("click", s);
rad4.addEventListener("click", s);
rad5.addEventListener("click", s);

function s(){

	rads = document.getElementsByName('wasp');
	var i;
	var waspName;
	for(i = 0; i < rads.length; i++) {
		if(rads[i].checked) {
			waspName = rads[i].value;
			break;
		}
	}
	var waspImg = document.getElementById("waspImg");
	switch (waspName) {
		case "baldFacedHornet":
			waspImg.src = "images/wasps/baldFacedHornet.jpg";
			break;
		case "northernPaperWasp":
			waspImg.src = "images/wasps/northernPaperWasp.jpg";
			break;
		case "mudDauber":
			waspImg.src = "images/wasps/mudDauber.jpg";
			break;
		case "threadWaistedWasp":
			waspImg.src = "images/wasps/threadWaistedWasp.jpg";
			break;
		case "groundDiggerWasp":
			waspImg.src = "images/wasps/groundDiggerWasp.jpg";
			break;
	}
	
}
