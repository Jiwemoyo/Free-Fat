// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function calorias() {
	var cal = new Number();
	let calorias = document.getElementById("cal").value
	//document.write("Cuantas calorias consumiste",'<BR/>');
	cal = document.getElementById("cal").value
	if (cal>=20 && cal<=120) {
		document.getElementById("haz").innerHTML="Tienes que hacer el ejercicio 1"
		//document.write("Tienes que hacer el ejercicio 1",'<BR/>');
	} else {
		if (cal>=121 && cal<=312) {
			document.getElementById("haz").innerHTML="Tienes que hacer el ejercicio 2"
			//document.write("Tienes que hacer el ejercicio 2",'<BR/>');
		} else {
			if (cal>=313 && cal<=380) {
				document.getElementById("haz").innerHTML="Tienes que hacer el ejercicio 3"
				//document.write("Tienes que hacer el ejercicio 3",'<BR/>');
			} else {
				if (cal>=381 && cal<=800) {
					document.getElementById("haz").innerHTML="Tienes que hacer el ejercicio 4"
					//document.write("Tienes que hacer el ejercicio 4",'<BR/>');
				} else {
					if (cal>=801) {
						document.getElementById("haz").innerHTML="Tienes que hacer el ejercicio 5"
						//document.write("Tienes que hacer el ejercicio 5",'<BR/>');
					} else {
						document.getElementById("haz").innerHTML="No se aceptan valores negativos"
						//document.write("No se puede ingresar valores negativos",'<BR/>');
					}
				}
			}
		}
	}
}

