

function validar()
{

    //guardo el elemento de buscandolo por id en una variable constante y uso el ".trim" quitar los espacios.
    const nombre = document.getElementById("nombre").value.trim();
    const apellido =document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const obraSocial = document.getElementById("obras_sociales").value.trim();
    const dia = document.getElementById("dia").value.trim();
    const mes = document.getElementById("mes").value.trim();
    const anio = document.getElementById("anio").value.trim();
    const observacion = document.getElementById("observaciones").value.trim();

    
    //verifico que los campos no esten vacios
    //verifico que los campos o sean numeros con la funcion isNaN(nombreVariable)

    //nombre
    if(!(nombre == "") && isNaN(nombre) ){
        document.getElementById("nombre").style.border = "solid green";
    }else{
        document.getElementById("nombre").style.border = "solid red";
    }
    
    //apellido
    if(!(apellido == "") && isNaN(apellido)){
        document.getElementById("apellido").style.border = "solid green";
    }else{
        document.getElementById("apellido").style.border = "solid red";
    }
    
    //email
    //validar que la sintaxis de los correos sean correctas
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!(email == "") && emailRegex.test(email)){
        document.getElementById("email").style.border = "solid green";
    }else{
        document.getElementById("email").style.border = "solid red";
    }

    //obras_sociales
    if(!(obraSocial == "")){
        document.getElementById("obras_sociales").style.border = "solid green";
    }else{
        document.getElementById("obras_sociales").style.border = "solid red";
    }

    //valido que las fechas no esten vacias y que el valor sea mayor a 0
    //dia
    if(dia && dia>0 && dia % 1 ==0){
        document.getElementById("dia").style.border = "solid green";
    }else{
        document.getElementById("dia").style.border = "solid red";
    }

    //mes
    if(mes && mes>0 && mes<=12 && mes % 1 ==0){
        document.getElementById("mes").style.border = "solid green";
    }else{
        document.getElementById("mes").style.border = "solid red";
    }

    //anio
    if(anio && anio>(new Date().getFullYear())-200 && (anio<=new Date().getFullYear())&& anio % 1 ==0){
        document.getElementById("anio").style.border = "solid green";
    }else{
        document.getElementById("anio").style.border = "solid red";
    }

    //validar fechas posibles

    //meses de 31 dias

    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        if(dia <= 31){
            document.getElementById("dia").style.border = "solid green";
        }else{
            document.getElementById("dia").style.border = "solid red";
        }
    }

    //meses de 30 dias
    if(mes == 4 || mes == 6 || mes == 9 || mes == 11 ){
         if(dia <= 30){
            document.getElementById("dia").style.border = "solid green";
        }else{
            document.getElementById("dia").style.border = "solid red";
        }
    }

    //febrero en anio biciesto
    if(mes == 2 && anio%4 == 0){
        if(dia <= 29){
            document.getElementById("dia").style.border = "solid green";
        }else{
            document.getElementById("dia").style.border = "solid red";
        }
    }
    if(mes == 2 && anio%4 != 0){
        if(dia <= 28){
            document.getElementById("dia").style.border = "solid green";
        }else{
            document.getElementById("dia").style.border = "solid red";
        }
    }










    //alerta si todos los campos son correctos verificando que todos tengan un borde verde, lo que significa que son todos correctos

    if(document.getElementById("nombre").style.border == "solid green" 
    && document.getElementById("apellido").style.border == "solid green" 
    && document.getElementById("email").style.border == "solid green" 
    && document.getElementById("obras_sociales").style.border == "solid green" 
    && document.getElementById("dia").style.border == "solid green"
    && document.getElementById("mes").style.border == "solid green"
    && document.getElementById("anio").style.border == "solid green" )
        {
         alert("Formulario Enviado");
    }
   


}

