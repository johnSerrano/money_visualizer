function visualize() {
	var size = document.getElementById("money").value;
	if (isNaN(size)) {
		return;
	}
	if (size < 0.01) {
		return;
	}
	var pennies = (Math.floor(size*100))

	var imgs = document.getElementById("money_image");

	while (imgs.hasChildNodes()) {
		imgs.removeChild(imgs.lastChild);
	}
	
	while (pennies >= 1000) {
		var img = document.createElement("img");
                img.src = "currency/thousand_pennies.jpg";
                imgs.appendChild(img);
		imgs.appendChild(document.createElement("br"));
		pennies -= 1000;
	}

	var count = 0;
	while (pennies >= 50) {
		var img = document.createElement("img");
		img.src = "currency/pennies_roll.jpg";
		imgs.appendChild(img);
		if (count % 2 == 1 && count != 0) {
			imgs.appendChild(document.createElement("br"));
		}
		pennies -= 50;
		count++;
	} 
	
	for (var i = 0; i < (pennies); i++) {
		var img = document.createElement("img");
		img.src = "currency/penny.png";
		imgs.appendChild(img);
		if (i % 10 == 9) {
			var newline = document.createElement("br");
			imgs.appendChild(newline);
		}
		if (i % 100 == 99) {
			var newline = document.createElement("br");
			imgs.appendChild(newline);
		}
	}
}
