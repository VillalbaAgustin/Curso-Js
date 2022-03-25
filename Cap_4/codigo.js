/* let cadena = "bc ";
let cadena2 = " Hola ";
let cadena3 = 1235; */

/* resultado = cadena.concat(" Hola ", cadena2); */
/* resultado = cadena.startsWith(cadena2); */
/* resultado = cadena.endsWith(cadena2); */
/* resultado = cadena.includes(cadena2); */
/* resultado = cadena.indexOf(cadena2); */
/* resultado = cadena.lastIndexOf(cadena2); */
/* resultado = cadena.padStart(4,"a"); */
/* resultado = cadena.padEnd(4,"de"); */
/* resultado = cadena.repeat(3); */
/* resultado = cadena2.split(" "); */
/* resultado = cadena2.substring(0,4); */
/* resultado = cadena2.toLowerCase(); */
/* resultado = cadena2.toUpperCase(); */
/* resultado = cadena3.toString(); */
/* resultado = cadena2.toString(); */
/* resultado = cadena2.trimEnd(); */
/* resultado = cadena2.trimStart(); */

/* document.write(resultado.length); */
/* document.write(resultado.trim()); */
/* document.write(resultado);
document.write(resultado.length); */

/* Historia de Cofla 4 */

/* Calculadora;
class Calculadora {
    constructor() {}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    div(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp) {
        return num ** exp;
    }
    raizCuadrada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert('Que operación deseas realizar');
let operacion = prompt(
    '1:suma,  2:resta, 3:división, 4:multiplicación, 5:potencia, 6:RaizCuadrada, 7:RaizCubica'
);

if (operacion == 1) {
    let nro1 = prompt('Primer número para sumar');
    let nro2 = prompt('Segundo número para sumar');
    let resultado = calculadora.sumar(nro1, nro2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 2) {
    let nro1 = prompt('Primer número para restar');
    let nro2 = prompt('Segundo número para restar');
    let resultado = calculadora.restar(nro1, nro2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 3) {
    let nro1 = prompt('Primer número para dividir');
    let nro2 = prompt('Segundo número para dividir');
    let resultado = calculadora.div(nro1, nro2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 4) {
    let nro1 = prompt('Primer número para multiplicar');
    let nro2 = prompt('Segundo número para multiplicar');
    let resultado = calculadora.multiplicar(nro1, nro2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 5) {
    let nro1 = prompt('Número a potenciar');
    let nro2 = prompt('Exponente');
    let resultado = calculadora.potenciar(nro1, nro2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 6) {
    let nro1 = prompt('Conocer la raiz cuadrada de:');
    let resultado = calculadora.raizCuadrada(nro1);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 7) {
    let nro1 = prompt('Conocer la raiz cúbica de:');
    let resultado = calculadora.raizCubica(nro1);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert('No se encontro la operacion');
} */

/* B */

/* const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
        programacion: ["Dalto","Pedro","Pepito","Cofla","Maria"],
        logica: ["Hernandez","Pedro","Pepito","Cofla","Maria"],
        quimica: ["Rodiguez","Pedro","Pepito","Cofla","Maria"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else{
        return materia;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es:  ${profesor}<br>
        Los alumnbos son: ${alumnos}<br><br><br>`);
    }
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

const cantidadDeClases = (alumno)=>{
    let cantidadTotal = 0;
    for (info in informacion[2]){
        if (informacion[2][info].includes(alumno)){

        }
    }
} */

class Materia {
    constructor(nombre, profesor, alumnos) {
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.nombre = nombre;
    }
}

const fisica = new Materia('Fisica', 'Montesino', ['F', 'chato', 'Pepe']);
const matematica = new Materia('Matematica', 'Ariolas', [
    'agus',
    'chato',
    'cofla',
]);
const quimica = new Materia('Quimica', 'Tuma', ['cofla', 'chato']);

function mostrarProfesor(materia, mostrarAlumno = true) {
    document.writeln(`Materia: ${materia.nombre}<br>`);
    document.writeln(`Profesor: ${materia.profesor}<br>`);
    if (mostrarAlumno) {
        document.writeln(`Alumnes: ${materia.alumnos}<br><br>`);
    }
}

mostrarProfesor(fisica);
mostrarProfesor(matematica);
mostrarProfesor(quimica);

function clasesCofla() {
    const materias = [fisica, matematica, quimica];
    console.table(materias);

    const materiasCofla = [];
    materias.forEach((materia) => {
        console.table(materia);
        if (materia.alumnos.includes('cofla')) {
            materiasCofla.push(materia);
        }
    });

    document.write(
        `<h2>Cofla asiste a ${materiasCofla.length} materias</h2><br>`
    );

    document.write(`<h3>Materia a las que asiste Cofla:</h3><br>`);

    materiasCofla.forEach((materia) => {
        mostrarProfesor(materia, false);
    });
}

clasesCofla();
