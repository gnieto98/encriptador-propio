let mensaje = "",
	x = "";
let img = document.getElementById("muneco");
console.log(img);

function lecturaEncriptar() {
	mensaje = document.getElementById("textin").value; //toma el texto del text area
	//document.getElementById("muneco").style.display = "none"; //bsorra la imagen de espera
	img.style.display != "none" ? (img.style.display = "none") : null;
	encriptar(mensaje);
}

function lecturaDesencriptar() {
	mensaje = document.getElementById("textin").value; //toma el texto del text area
	//document.getElementById("muneco").style.display = "none"; //borra la imagen de espera
	img.style.display != "none" ? (img.style.display = "none") : null;
	decriptar(mensaje);
}

function encriptar(x) {
	x = x.replaceAll("e", "enter");
	x = x.replaceAll("i", "imes");
	x = x.replaceAll("a", "ai");
	x = x.replaceAll("o", "ober");
	x = x.replaceAll("u", "ufat");
	document.getElementById("salida").innerHTML = x; //pone el mensaje del lado del resultado
}
function decriptar(x) {
	x = x.replaceAll("enter", "e");
	x = x.replaceAll("imes", "i");
	x = x.replaceAll("ai", "a");
	x = x.replaceAll("ober", "o");
	x = x.replaceAll("ufat", "u");
	document.getElementById("salida").innerHTML = x; //pone el mensaje del lado del resultado
}

let texto = "";

function copiar() {
	texto = document.getElementById("salida").textContent; //toma el texto del text area
	navigator.clipboard.writeText(texto); //textContet se puede aplicar tanto arriba donde está ahora, como dentro de esta linea en el parentesis
}
