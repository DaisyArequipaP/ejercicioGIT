let nombre = prompt("Ingrese el nombre y apellido del alumno");
let materia = prompt("Ingrese el nombre de la materia");
let x1 = parseInt(prompt("Ingrese la primera nota en un rango del 0 al 10"));
while (x1<0 || x1>10){
    x1 = parseInt(prompt("Ingrese la primera nota en un rango del 0 al 10"));
}
let x2 = parseInt(prompt("Ingrese la segunda nota en un rango del 0 al 10"));
while (x2<0 || x2>10){
    x2 = parseInt(prompt("Ingrese la segunda nota en un rango del 0 al 10"));
}
let x3 = parseInt(prompt("Ingrese la tercera nota en un rango del 0 al 10"));
while (x3<0 || x3>10 ){
    x3 = parseInt(prompt("Ingrese la tercera nota en un rango del 0 al 10"));
}
let y1 = x1 + x2 + x3;
let denominador = 3;
let y2 = y1 / denominador;
if (y2 >= 7){
    alert(nombre+", ¡felicidades! Has aprobado con un promedio de:  " + y2)
}else{
    alert(nombre+", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es de:  " + y2)
}