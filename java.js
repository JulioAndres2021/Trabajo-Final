document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', Confirmarenviar); 
  });
     
   //Inhabilita campo PROVINCIA
    function inhabilitarprovincia()
    {
        var x=document.getElementById("provincias");
        x.disabled=true
    }
    //Habilita campo PROVINCIA
       function habilitarprovincia()
       {
           var x=document.getElementById("provincias");
            x.disabled=false
            
       }
       //Inhabilita campo PAIS
       function inhabilitarpais()
    {
        var x=document.getElementById("pais");
        x.disabled=true
    }
    //Habilita campo PAIS
       function habilitarpais()
       {
           var x=document.getElementById("pais");
            x.disabled=false
            
       }  
      //funcion para aceptar solo letras 
function sololetras(e)
{
    var key = e.keycode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var especiales = [8,37,39,46];
    var tecla_especial = false
    for (var i in especiales)
    {
        if (key == especiales[i]) 
        {
           tecla_especial = false;
           break;

        }
    }

    if(letras.indexOf(tecla) == -1 && ! tecla_especial)
    return  false;
}
// funcion para aceptar solo numeros
function soloNumeros(e)
{
    var key = e.keycode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var numeros = "0123456789";
    var especiales = [8,37,39,46];
    var tecla_especial = false
    for (var i in especiales)
    {
        if (key == especiales[i])
        {
           tecla_especial = false;
           break;
        }
    }

        if(numeros.indexOf(tecla) == -1 && ! tecla_especial)
        return  false;
}
//Me fijo si el email ingresado es correcto
function validate()
{        
                     var email = document.getElementById("email").value;
                       if (email == null || email.length == 0)
                       {
                         alert("Introduzca un email");
                         document.getElementById(foco("email")).focus(); //hago el foco sobre el campo vacio
                         return false;
                        }
                       else if (!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email)))
                       {
                         alert("La dirección de email es incorrecta");
                         Poneenrojo() //Pongo el contenido en color ROJO
                         document.getElementById(foco("email")).focus(); //hago el foco sobre el campo vacio
        
                         }
         
}
//creo la funcion para poner en rojo el campo texto
function Poneenrojo()
{
    document.getElementById("email").style.color = "red";
}
//creo la funcion para poner en negro el campo texto
function Poneennegro()
{
    document.getElementById("email").style.color = "black";
}
//function validarcampo(){
//    var campo = $('#id_del_input').val();
//     if(campo === ''){
//      alert("El campo esta vacío");
//      return false;
//    }else{
//     }
//}

//creo la funcion foco para el elemento declarado en los imput
function foco(idElemento)
{
    document.getElementById(idElemento).focus();
}
//creo la funcion para validar si en los textos REQUERIDOS estan vacios   
function Validacampos()
{
                          //evento.preventDefault();
                          var nombre,apellido,dni,email; //asigno las variables
                          var foconombre
                          foconombre = document.getElementById("nombre").focus();
                          //asigno el valor que contiene
                          nombre = document.getElementById("nombre").value;
                          apellido = document.getElementById("apellido").value;
                          dni = document.getElementById("dni").value;
                          email = document.getElementById("email").value;
                             //me fijo si los campos estan vacios
                             if(nombre === "") { //si nombre es igual a cero texto
                              alert("El campo NOMBRE está vacio"); //doy una alerta
                              document.getElementById(foco("nombre")).focus(); //hago el foco sobre el campo vacio
                                   return false;            //me quedo en el formulario
                                }
                              else if(apellido === "") { //si apellido es igual a cero texto
                               alert("El campo APELLIDO está vacio");//doy una alerta
                               document.getElementById(foco("apellido")).focus(); //hago el foco sobre el campo vacio
                                   return false            //me quedo en el formulario
                                 }
                              else if(dni === "") { //si dni es igual a cero texto
                                alert("El campo DNI está vacio");//doy una alerta
                                document.getElementById(foco("dni")).focus(); //hago el foco sobre el campo vacio
                                    return false            //me quedo en el formulario
                                 }  
                             else if(email === "") { //si email es igual a cero texto
                                alert("El campo EMAIL está vacio");//doy una alerta
                                document.getElementById(foco("email")).focus(); //hago el foco sobre el campo vacio
                                    return false            //me quedo en el formulario
                                } 
                                 //valido la CIUDAD
                                else if (document.getElementById("ciudades").selectedIndex==0) //verifico si el index esta en cero
                                {
                                 alert("Elija una ciudad para continuar")
                                 document.getElementById(foco("ciudades")).focus(); //hago el foco sobre el campo vacio
                                  return 0;
                                 }
                                 //valido la PROVINCIA
                                else if (document.getElementById("provincias").selectedIndex==0) //verifico si el index esta en cero
                                {
                                 alert("Elija una Provincia para continuar")
                                 document.getElementById(foco("provincias")).focus(); //hago el foco sobre el campo vacio
                                  return 0;
                                 }
                                 else{

                                    alert('El formulario se ha enviado correctamente') ; 
                                    
                                    //return true;
                                   
                                }
                                 

}

/**
 * Funcion que devuelve true o false dependiendo de si la fecha es correcta.
 * Tiene que recibir el dia, mes y año
 */
 function isValidDate(day,month,year)
 {
     var dteDate;
  
     // En javascript, el mes empieza en la posicion 0 y termina en la 11 
     //   siendo 0 el mes de enero
     // Por esta razon, tenemos que restar 1 al mes
     month=month-1;
     // Establecemos un objeto Data con los valore recibidos
     // Los parametros son: año, mes, dia, hora, minuto y segundos
     // getDate(); devuelve el dia como un entero entre 1 y 31
     // getDay(); devuelve un num del 0 al 6 indicando siel dia es lunes,
     //   martes, miercoles ...
     // getHours(); Devuelve la hora
     // getMinutes(); Devuelve los minutos
     // getMonth(); devuelve el mes como un numero de 0 a 11
     // getTime(); Devuelve el tiempo transcurrido en milisegundos desde el 1
     //   de enero de 1970 hasta el momento definido en el objeto date
     // setTime(); Establece una fecha pasandole en milisegundos el valor de esta.
     // getYear(); devuelve el año
     // getFullYear(); devuelve el año
     dteDate=new Date(year,month,day);
  
     //Devuelva true o false...
     return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
 }
  
 /**
  * Funcion para validar una fecha
  * Tiene que recibir:
  *  La fecha en formato ingles yyyy-mm-dd
  * Devuelve:
  *  true-Fecha correcta
  *  false-Fecha Incorrecta
  */
 function validate_fecha(fecha)
 {
     var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
  
     if(fecha.search(patron)==0)
     {
         var values=fecha.split("-");
         if(isValidDate(values[2],values[1],values[0]))
         {
             return true;
         }
     }
     return false;
 }
  
 /**
  * Esta función calcula la edad de una persona y los meses
  * La fecha la tiene que tener el formato yyyy-mm-dd que es
  * metodo que por defecto lo devuelve el <input type="date">
  */
 function calcularEdad()
 {
     var fecha=document.getElementById("fechadenacimiento").value;
     if(validate_fecha(fecha)==true)
     {
         // Si la fecha es correcta, calculamos la edad
         var values=fecha.split("-");
         var dia = values[2];
         var mes = values[1];
         var ano = values[0];
  
         // cogemos los valores actuales
         var fecha_hoy = new Date();
         var ahora_ano = fecha_hoy.getYear();
         var ahora_mes = fecha_hoy.getMonth()+1;
         var ahora_dia = fecha_hoy.getDate();
  
         // realizamos el calculo
         var edad = (ahora_ano + 1900) - ano;
         if ( ahora_mes < mes )
         {
             edad--;
         }
         if ((mes == ahora_mes) && (ahora_dia < dia))
         {
             edad--;
         }
         if (edad > 1900)
         {
             edad -= 1900;
         }
  
         // calculamos los meses
         var meses=0;
         if(ahora_mes>mes)
             meses=ahora_mes-mes;
         if(ahora_mes<mes)
             meses=12-(mes-ahora_mes);
         if(ahora_mes==mes && dia>ahora_dia)
             meses=11;
  
         // calculamos los dias
         var dias=0;
         if(ahora_dia>dia)
             dias=ahora_dia-dia;
         if(ahora_dia<dia)
         {
             ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
             dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
         }
          //, "+meses+" meses y "+dias+" días";
         document.getElementById("edad").innerHTML="Tu edad es: "+edad+" años"; 
     }else{
         document.getElementById("edad").innerHTML="La fecha "+fecha+" es incorrecta";
     }
 }

//Funcion para mostrar la direccion en google maps desde el boton al hacer click
 function mostrarLugar(){
    let item = document.getElementById('location')
    if(item){
      window.open('https://google.cl/maps/place/'+item.value, '_blank');
    }  
    return false; //No ejecutar el evento.
  }
  

//VALIDA CAPTCHA
function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
     }
   var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
   document.getElementById("mainCaptcha").value = code
 }
 
 //comprueba si lo que puso en la caja de texto coincide
 function ValidCaptcha(){
       
     var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
     var string2 = removeSpaces(document.getElementById('txtInput').value);
     if (string1 == string2) {
         //habilita el boton principal
        document.getElementById("btnSend").disabled = false;
       return true;
     
     }
     else{
         //Deshabilita el boton principal
        document.getElementById("btnSend").disabled = true;        
       return false;
       
     }
 }
 function removeSpaces(string){
   return string.split(' ').join('');
 }

 

//FINAL