var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
alert("Hola, Queremos saber que mes NO estas de cumpleaños!!");
var mesCumple = prompt("Ingrese mes de cumpleaños");
var resultado = [];
for (var i = 0; i < meses.length; i++) {
	if (meses[i].toLowerCase() != mesCumple.toLowerCase()) {
		resultado.push(meses[i]);
	}
}
alert(resultado);

