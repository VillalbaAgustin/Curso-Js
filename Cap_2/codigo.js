/* let frutas = ["pera", "manzana", "banana"];
document.write(frutas[1]); */



/* let pc = {
    nombre : "aguspc",
    procesador : "Ryzen 3600",
    ram : "16 GB",
    almacenamiento : "1 TB",
}

document.write (pc["nombre"]);

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let almacenamiento = pc["almacenamiento"];

let frase = `El nombre de mi pc es: ${nombre} <br>
        El procesador es: ${procesador}<br>
        La memoria ram es: ${ram}<br>
        El almacenamiento es: ${almacenamiento}<br><br><br><br>`;

document.write(frase);

let frase2 = `El nombre de mi pc es: ${pc["almacenamiento"]} <br>`
document.write(frase2); */


/* for (let i = 0; i < 6; ++i){
    document.write(i + "<br>")
} */


/* let frutas = ["pera", "manzana", "banana"];


for (frutera in frutas){
    document.write(frutera + "<br>");

}
document.write("<br>  <br>")
for (frutera of frutas){
    document.write(frutera + "<br>");
} */




/* function saludar() {
    let respuesta = prompt("Hola como estas?")
    if (respuesta == "bien"){
    alert("asheee");
    }
    else if (respuesta == "mal"){
        alert("pucha, tomate una coca")
    }
}

saludar(); */







/* Historia de Cofla 2 */


/* A) Solo deja pasar a los mayores de edad y la primer persona después de las 2 am pasa gratis */

/* let free = false;

    const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    edad = parseInt(edad);
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis Rey");
            free = true;
        }
        else{
            alert(`Son las ${time}:00 hs Tenes que pagar la entrada`)
        }
    }   
    else{
        alert("Sos menor de edad no podes pasar");
    } 
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3); */






/* B) Crear un sistema de alumnos que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
Pasados los 30 días mostrar un listado con la situcion final de todos los alumnos (Nro total de presentes y ausentes).
Se puede tener un máximo de 10% de ausencias por semestre, si se tienen mas aclarar que está reprobado */

/* let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno  " + (i + 1)),0];
    
}


const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
    
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
            Presntes: ${alumnosTotales[alumno][1]}<br>
            Ausencias: ${30 - alumnosTotales[alumno][1]}<br>`;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado += "REPROBADO POR INANSISTENCIAS<br><br>";
    }
    else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}
 */





/* c) Crear una calculadora */

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const div = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operación deseas realizar");
let operacion = prompt("1:suma,  2:resta, 3:división, 4:multiplicación");

if (operacion == 1){
    let nro1 = prompt("Primer número para sumar");
    let nro2 = prompt("Segundo número para sumar");
    resultado = sumar(nro1,nro2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let nro1 = prompt("Primer número para restar");
    let nro2 = prompt("Segundo número para restar");
    resultado = restar(nro1,nro2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let nro1 = prompt("Primer número para dividir");
    let nro2 = prompt("Segundo número para dividir");
    resultado = div(nro1,nro2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let nro1 = prompt("Primer número para multiplicar");
    let nro2 = prompt("Segundo número para multiplicar");
    resultado = multiplicar(nro1,nro2);
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("No se encontro la operacion")
}