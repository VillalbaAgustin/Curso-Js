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




function saludar() {
    let respuesta = prompt("Hola como estas?")
    if (respuesta == "bien"){
    alert("asheee");
    }
    else if (respuesta == "mal"){
        alert("pucha, tomate una coca")
    }
}

saludar();