//Facundo Tarelli DIV D v
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

var nombreIngresado;
var edad;
	//nombreIngresado = txtIdNombre.value;
	nombreIngresado = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;


	alert("usted se llama " + nombreIngresado + " y tiene " + edad + " años" );
	
}

