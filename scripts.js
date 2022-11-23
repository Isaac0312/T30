function hola_mundo(){
        window.alert("Hola mundo!\nQue facil es incluir 'comillas simples'\n y \"comillas dobles\"");
}

function mostrar_mensaje(){
    var cl = document.getElementById("aux");
    cl.innerHTML = "Soy el primer script";
}

function no_javascript(){
    var es_ie = navigator.userAgent.indexOf("msie") < -1;
    if(es_ie){
        alert("El navegador que se esta utilizando no permite javascript")
    }
}

function meses(){
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    meses.forEach(mes => console.log(mes));
}

function ejercicio4(){
    var valores = [true,5,false,"hola","adios",2];

    var primero = valores[3];
    var segundo = valores[4];
    if(primero.length > segundo.length){
        console.log("Es mas grande hola");
    } else {
        console.log("Es mas grande adios");
    }

    var primero = valores[1];
    var segundo = valores[5];

    console.log("Suma =",primero+segundo);
    console.log("Resta =",primero-segundo);
    console.log("Multiplicación =",primero*segundo);
    console.log("División =",primero/segundo);
    console.log("Potencia =",Math.pow(primero,segundo));

    var primero = valores[0];
    var segundo = valores[2];
    console.log("Valor true al contrario ",!primero);
    console.log("Valor false al contrario",!segundo);
}

function ejercicio5(){
    var numero1= 5;
    var numero2= 8;
    if(numero1 < numero2){
        console.log("numero1 no es mayor que numero2");
    }
    if(numero2 > 0){
        console.log("numero2 es positivo");
    }

    if(-(numero1) < 0){
        console.log("numero1 es negativo o distinto de cero");
    }

    if((numero1++) < 8){
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor que numero2");
    }
}

function ejercicio6(){
    const button = document.querySelector('button');
    var letras=[`T`,`R`,`W`,`A`,`G`,`M`,'Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];


    button.onclick = function() {
        let dni_numeros = prompt('Indica el DNI');
        let dni_letra = prompt('Indica la letra');

        if(dni_numeros < 0 || dni_numeros > 99999999){
            alert("Numero de DNI incorrecto");
            return;
        } else {
            let resultat = dni_numeros % 23;
            let letra_final = letras[resultat];
            if(dni_letra==letra_final){
                alert("Es la misma letra");
            } else {
                alert("No es la misma letra");
            }
        }
      }
}

function ejercicio7(){
    const button = document.querySelector('button');
    button.onclick = function() {
        let numero = prompt('Indica el numero');
        let total = 1; 
        for (i=1; i<=numero; i++) {
            total = total * i; 
        }
        console.log(total);
        document.write("Resultado final: ",total);
    }
}

function ejercicio8(n){
    if((n % 2) == 0){
        document.write("Numero par");
    } else {
        document.write("Numero impar");
    }
}

function ejercicio9(mensaje){
      var result = checkType(mensaje);
 
      if (result == '0') {
          console.log('minusculas');
      }  else if (result == '1') {
          console.log('MAYUSCULAS');
      } else if (result == '2') {
          console.log('minusculas - MAYUSCULAS');
     } else {
        console.log("Mezcla de minusculas y mayusculas");
     }
}

function checkType(mensaje) {
    mensaje = mensaje.toString().trim();
    const regxs = {
      "lower": /^[a-z0-9 ]+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    }
   
    if (regxs.lower.test(mensaje)) {
    return '0';
    }
   
    if (regxs.upper.test(mensaje)){
    return '1';
    }
    if (regxs.upperLower.test(mensaje)){
    return '2';
    }
    return -1;
  }

  function ejercicio10(str){
    var re = /[^A-Za-z0-9]/g;
    var aux=true;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          aux = false;
      }
    }
    if(aux==false){
        document.write("No es palindromo");
    } else {
        document.write("Es palindromo");
    }
   }