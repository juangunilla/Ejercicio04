let nombre = prompt("Ingrese su nombre:");

let sexo = prompt("Hola"+" "+nombre +" "+ "¿Que genero se considera? ¿hombre, mujer o no binario?");

if(nombre == null){
    alert("no igreso su nombre, actualize la pagina")
    console.log("no ingreso su nombre, actualize la pagina")

}
if(sexo == "hombre") {
    alert ("Bienvenido" + " " + nombre + " " + "usted es un"+ " " + sexo);
   
}
else if(sexo == "mujer"){
    alert("Bienvenida" + " " + nombre + "" + " usted es una" +" " + sexo);

}
else if(sexo == "no binario"){
    alert("Hola"+ " " + nombre + " " + "usted se considera " + " " + sexo);
}

else{
    alert("Hola"+ " "+ nombre +" " +   "a colocado mal el genero vuelva a intentarlo las opciones son hombre,mujer,no binario")
};

