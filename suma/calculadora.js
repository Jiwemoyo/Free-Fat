
	var cal = new Number();
	document.write("Cuantas calorias consumiste",'<BR/>');
	cal = Number(prompt());
	if (cal>=20 && cal<=120) {
		document.write("Tienes que hacer el ejercicio 1",'<BR/>');
	} else {
		if (cal>=121 && cal<=312) {
			document.write("Tienes que hacer el ejercicio 2",'<BR/>');
		} else {
			if (cal>=313 && cal<=380) {
				document.write("Tienes que hacer el ejercicio 3",'<BR/>');
			} else {
				if (cal>=381 && cal<=800) {
					document.write("Tienes que hacer el ejercicio 4",'<BR/>');
				} else {
					if (cal>=801) {
						document.write("Tienes que hacer el ejercicio 5",'<BR/>');
					} else {
						document.write("No se puede ingresar valores negativos",'<BR/>');
					}
				}
			}
		}
	}

