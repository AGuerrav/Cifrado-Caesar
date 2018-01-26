function principal2(option) {
  do {
    var Answ = prompt('Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar');
		  if (Answ !== '') {
      if (Answ === '1') {
        cipher();
      } else if (Answ === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida');
      }
    }
  } while (Answ === '' || (Answ !== '1' && Answ !== '2'));
}
function cipher() {
  do { //  es para que no se salte ese paso
    var cipherPhrase = prompt('Ingresa una frase'); //  cuadro de dialogo para ingresar una frase
    if (cipherPhrase !== '') /* && (typeof numTc !== 'string') )*/{ //  si la frase es distinta a vacio
      cipher(cipherPhrase);
    } else {
      alert('error, debes ingresar un frase');
    }
  }
  while (cipherPhrase === ''); // si la frase esta vacia vuelve a preguntar
  function cipher(cipherPhrase) { // y decipher (revisar luego nombres de variables)
    var upperCiphPhrase = cipherPhrase.toUpperCase();// sin return porque no necesito que me la muestre
    // var arrayFrase = array.from(upperCiphPhrase); charcode at no funciona con array
    var cipherArray = []; // la ponemos fuera del for ya que sino se va limpiando en cada vuelta del recorrido
    for (var i = 0; i < upperCiphPhrase.length; i++) {
      // console.log(i);
      var onAscci = upperCiphPhrase.charCodeAt(i); // para sacar el numero ascii correspondiente al numero de los elementos
      // console.log(onAscci);
      var algorithm = ((onAscci - 65 + 33) % 26 + 65) ; // nos da el numero ascci de la letra desplazada
      // console.log(desplazamiento);
      var cipherMsg = String.fromCharCode(algorithm); // pasamos los numeros ascii a sus letras correspondientes
      // console.log(newLetra);
      cipherArray.push(cipherMsg); //  ingresamos cada letra al array para tener todas las letras en un array y luego convertirla a cadena
      // console.log(finalArray);
      var cypherStr = cipherArray.join(''); // array a string porque es solicitadoque se presente de sta forma
      // console.log(strCifrado);
    }
    // return strCifrado;
    return alert('Su mensaje es ' + cypherStr); // porque tengo que hacerle doble enter??
  }
}
function decipher() {
  do { // es para que no se salte ese paso
    var decipherPhrase = prompt('Ingresa una frase'); // cuadro de dialogo para ingresar una frase
    if (decipherPhrase !== '') /* && (typeof frase2 !== 'string') )*/{ // si la frase es distinta a vacio
      decipher(decipherPhrase);
    } else {
      alert('error, debes ingresar un frase');
    }
  }
  while (decipherPhrase === ''); // si la frase esta vacia vuelve a preguntar
  function decipher(decipherPhrase) {
    var upperDeciphPhrase = decipherPhrase.toUpperCase(); // pasamos la frase a descifrar a mayusculas para unificar
    var arrayDecipher = []; // para ingresar todos los valores una vez que tengamos nuestra 'cadena' de caracteres
    for (var i = 0; i < upperDeciphPhrase.length; i++) { // para recorrer mi frase ya en mayuscula y trabajar con lo entregado
      // console.log(upperDeciphPhrase[i]);
      var codeAscii = upperDeciphPhrase.charCodeAt(i); // sacamos el codigo ascii de la letra para utilizarlo en nuestro codigo
      var formDecipher = (codeAscii + 65 - 33) % 26 + 65; //  la cambiamos a -n ya que ahora necesitamos su desplazamiento inverso
      var asciiToStr = String.fromCharCode(formDecipher); // obtenemos la letra correspondiente a el numero ascii obtenido
      // ahora usamos nuestro array vacio para ingresar los valores obtenidos en forma de array
      arrayDecipher.push(asciiToStr); //  ['A','B','C',]
      console.log(arrayDecipher);
      var strFromArray = arrayDecipher.join(''); // ABC
    }
    return alert('Su mensaje es ' + strFromArray);
  }
}
principal2();
