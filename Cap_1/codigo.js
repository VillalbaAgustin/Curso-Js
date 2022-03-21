/* recipiente = "papel";

alert (recipiente) */

/* String = "cadena de texto"
Number = 19
Boolean = false */

/* const nombre = "no cambia nunca"
alert (nombre) */

/* let nombre = prompt ("Decime tu nombre");

alert ("Hola " + nombre) */


/* let numero = 10;

numero +=5

document.write(numero) */

/* let numero = 23;
let numero2 = 13;

document.write(numero == numero2) */




/* let nombre = prompt ("Decime tu nombre");

if (nombre == "agustin villalba"){
    alert("bienvenido Sr Villalba")
}

else if (nombre == "chato"){
    alert ("vamo a juga")
}

else if (!(nombre === "")) {
    alert (`Bienvenido ${nombre}`)
}

else {
    alert("quien te conoce hdp")
} */

/* cofla1 */

let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt (dineroCofla);
dineroRoberto = parseInt (dineroRoberto);
dineroPedro = parseInt (dineroPedro);
/* Coflaaaaaa */
if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla, Comprate el Helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, Comprate el Helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, Comprate el Helix");
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, Comprate el Heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, Comprate el Helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9){
    alert("Cofla, Comprate Helado con confites o 1/4 de Helado");
    alert("y te sobran" + (dineroCofla - 2.9));
}

else{
    alert("Cofla, Lo sineto, sos pobre f ");
    alert("y te sobran" + (dineroCofla ));
}


/* Robertoooo */

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto, Comprate el Helado de agua");
    alert("y te sobran" + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, Comprate el Helado de crema");
    alert("y te sobran" + (dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, Comprate el Helix");
    alert("y te sobran" + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, Comprate el Heladovich");
    alert("y te sobran" + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, Comprate el Helardo");
    alert("y te sobran" + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9){
    alert("Roberto, Comprate Helado con confites o 1/4 de Helado");
    alert("y te sobran" + (dineroRoberto - 2.9));
}

else{
    alert("Roberto, Lo sineto, sos pobre f ");
    alert("y te sobran" + (dineroRoberto));
}


/* Peeeedroooooo */

if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro, Comprate el Helado de agua");
    alert("y te sobran" + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro, Comprate el Helado de crema");
    alert("y te sobran" + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro, Comprate el Helix");
    alert("y te sobran" + (dineroPedro - 1.6));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, Comprate el Heladovich");
    alert("y te sobran" + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, Comprate el Helardo");
    alert("y te sobran" + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9){
    alert("Pedro, Comprate Helado con confites o 1/4 de Helado");
    alert("y te sobran" + (dineroPedro - 2.9));
}

else{
    alert("Pedro, Lo sineto, sos pobre f ");
    alert("y te sobran" + (dineroPedro));
}