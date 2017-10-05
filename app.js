function principal2(option){

	do{

		var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");

		if(respuesta != ""){

			if(respuesta == "1") {

				Cifrar();

			} else if (respuesta == "2") {

				Descifrar();

			} else {

				alert("Ingrese una opción válida");

			}

		}

	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));

}



function Cifrar(){

  do { //es para que no se salte ese paso
    var frase= prompt("Ingresa una frase"); //cuadro de dialogo para ingresar una frase

    if (frase !=="") /*&& (typeof numTc !== "string") )*/{ //si la frase es distinta a vacio
      cipher (frase);
    }else {
      alert("error, debes ingresar un frase");
    }
    }
    while (frase === ""); //si la frase esta vacia vuelve a preguntar


  function cipher (frase){ //y decipher (revisar luego nombres de variables)
    var mayusFrase= frase.toUpperCase();//sin return porque no necesito que me la muestre
                                          //var arrayFrase = array.from(mayusFrase); charcode at no funciona con array
    var arrayCifrado = []; //la ponemos fuera del for ya que sino se va limpiando en cada vuelta del recorrido
    for (var i= 0; i < mayusFrase.length; i++ ){
      //console.log(i);
      var posicionAscii = mayusFrase.charCodeAt(i); //para sacar el numero ascii correspondiente al numero de los elementos
        //console.log(posicionAscii);
      var desplazamiento = ((posicionAscii - 65 + 33 ) %26 +65) ; //nos da el numero ascci de la letra desplazada
            //console.log(desplazamiento);
      var msgCifrado =  String.fromCharCode(desplazamiento); //pasamos los numeros ascii a sus letras correspondientes
                //console.log(newLetra);
          arrayCifrado.push(msgCifrado); // ingresamos cada letra al array para tener todas las letras en un array y luego convertirla a cadena
                  //console.log(finalArray);
          var strCifrado = arrayCifrado.join(""); //array a string porque es solicitadoque se presente de sta forma
                    //console.log(strCifrado);


    }
    //return strCifrado;
    return alert("Su mensaje es "+ strCifrado); //porque tengo que hacerle doble enter??
  }
  cipher (frase);

}



function Descifrar(){

  do { //es para que no se salte ese paso
    var str2= prompt("Ingresa una frase"); //cuadro de dialogo para ingresar una frase

    if (str2 !=="") /*&& (typeof frase2 !== "string") )*/{ //si la frase es distinta a vacio
      decipher (str2);
    }else {
      alert("error, debes ingresar un frase");
    }
    }
    while (str2 === ""); //si la frase esta vacia vuelve a preguntar

  function decipher (str2){
      var upperStr2= str2.toUpperCase(); //pasamos la frase a descifrar a mayusculas para unificar
      var arrayDecipher = []; //para ingresar todos los valores una vez que tengamos nuestra "cadena" de caracteres
      for (var i = 0; i < upperStr2.length; i++) { //para recorrer mi frase ya en mayuscula y trabajar con lo entregado
        //console.log(mayusFrase2[i]);
        var codeAscii= upperStr2.charCodeAt(i); //sacamos el codigo ascii de la letra para utilizarlo en nuestro codigo
        var formDecipher = (codeAscii - 65 - 33) %26 +65; // la cambiamos a -n ya que ahora necesitamos su desplazamiento inverso
        var asciiToStr = String.fromCharCode(formDecipher); //obtenemos la letra correspondiente a el numero ascii obtenido
        //ahora usamos nuestro array vacio para ingresar los valores obtenidos en forma de array
          arrayDecipher.push(asciiToStr); // ["A","B","C",]
          console.log(arrayDecipher);
          var strFromArray = arrayDecipher.join(""); //ABC
        }
  return alert("Su mensaje es "+ strFromArray);
  }
  decipher (str2);


}



principal2();
