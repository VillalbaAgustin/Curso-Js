class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    ladrar(){
        if (this.especie == "perro"){
            document.write("Waw!");
        }
        else{
            document.write(`No puede ladrar ya que es ${this.especie} <br>`);
        }
    }
}

let perro = new animal("perro", 5, "marron");

/* document.write(perro.edad);
document.write("<br>");
document.write(perro.color);
document.write("<br> <br>");
document.write(perro.info);
 */
let gato = new animal("gato", 3, "negro");
/* document.write("<br> <br>");
document.write(gato.info); */

perro.verInfo();
gato.verInfo(); 
gato.ladrar();
perro.ladrar();