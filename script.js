//your JS code here. If required.
function updateDateTime(){
	const now = new Date();
	const currentTimeDate = now.toLocaleString();
	document.getElementById('timer').textContent = currentTimeDate;
	
}

setInterval(updateDateTime, 1000);
