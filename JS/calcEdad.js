let contenidoEdad = document.getElementById("input-edad").value;
if (parseInt(contenidoEdad) >= 18 && parseInt(contenidoEdad) <= 65) {
    console.log("Eres mayor de edad");
}else if (parseInt(contenidoEdad) > 65) {
    console.log("Eres adulto");
}else {
    console.log("Eres menor de edad");
}