// Facundo Tarelli DIV D 
/*Enunciado: al presionar el botón 'mostrar',
Debemos lograr tomar un dato por ID.value
y luego mostrarlo por 'alert()'

/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado = txtIdNombre.value;
	nombreIngresado = document.getElementById('txtIdNombre').value;

	alert("Su nombre es: " + nombreIngresado);
 
}


