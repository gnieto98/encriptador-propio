let mensaje = ".",
	x = "";

function lecturaEncriptar() {
	mensaje = document.getElementById("textin").value; //toma el texto del text area
	document.getElementById("muneco").style.display = "none"; //borra la imagen de espera
	encriptar(mensaje);
}

function lecturaDesencriptar() {
	mensaje = document.getElementById("textin").value; //toma el texto del text area
	document.getElementById("muneco").style.display = "none"; //borra la imagen de espera
	decriptar(mensaje);
}

function encriptar(x) {
	x = x.replaceAll("e", "enter");
	x = x.replaceAll("i", "imes");
	x = x.replaceAll("a", "ai");
	x = x.replaceAll("o", "ober");
	x = x.replaceAll("u", "ufat");
	document.getElementById("output").innerHTML = x; //pone el mensaje del lado del resultado
}
function decriptar(x) {
	x = x.replaceAll("enter", "e");
	x = x.replaceAll("imes", "i");
	x = x.replaceAll("ai", "a");
	x = x.replaceAll("ober", "o");
	x = x.replaceAll("ufat", "u");
	document.getElementById("output").innerHTML = x; //pone el mensaje del lado del resultado
}
