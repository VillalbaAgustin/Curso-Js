/* class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo() {
        document.write(this.info + '<br>');
    }
 */
/*  ladrar() {
        if (this.especie == 'perro') {
            document.write('Waw!');
        } else {
            document.write(`No puede ladrar ya que es ${this.especie} <br>`);
        }
    } */
/* } */

/* class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color); 
        this.raza = raza;
    }
    ladrar(){
        alert("Waw!");
    }
} */

/* const perro = new Perro("perro", 5, "marron", "caniche");

const gato = new Animal("gato", 3, "negro");

perro.verInfo();
gato.verInfo();
perro.ladrar(); */








/* Historia de Cofla 3 */

/* Problema A */

/* class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert('Celular prendido');
            this.encendido = true;
        } else {
            alert('Celular apagado');
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert('Reiniciando celular');
        } else {
            alert('El celular esta apagado');
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    verEstadoCelu() {
        if (this.encendido == true) {
            document.write('Prendido');
        } else {
            document.write('Apagado </br></br>');
        }
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolución de Pantalla: <b>${this.resolucionDePantalla}</b></br>
        Resolución de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, rdce) {
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert('Estas grabando en camara lenta');
    }
    reconocimientoFacial() {
        alert('Iniciando reconocimiento facial');
    }
    infoAltaGama() {
        return (
            this.mobileInfo() +
            `Resolución de camara Extra: ${this.resolucionDeCamaraExtra}`
        );
    }
}

const celular1 = new Celular('rojo', '150g', '5p', 'Full Hd', '1GB');
const celular2 = new Celular('negro', '150g', '5.4p', 'Hd', '2GB');
const celular3 = new Celular('blanco', '150g', '5.9p', 'Full Hd', '2GB');
const celular4 = new CelularAltaGama(
    'Rojo',
    '130g',
    '4k',
    '50Mp',
    '6GB',
    '100Mp'
);
const celular5 = new CelularAltaGama(
    'Negro',
    '150g',
    '4k',
    '40Mp',
    '4GB',
    '90Mp'
); */

/* document.write(`
${celular1.mobileInfo()}
</br>
${celular2.mobileInfo()}
</br>
${celular3.mobileInfo()}
`);

celular1.mobileInfo();
celular2.mobileInfo();
celular3.mobileInfo(); */

/* celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
celular1.verEstadoCelu();

document.write(`
Celular 1</br>
${celular1.mobileInfo()}
</br>
Celular 2</br>
${celular2.mobileInfo()}
</br>
Celular 3</br>
${celular3.mobileInfo()}
</br>
Celular 4</br> 
${celular4.infoAltaGama()}
</br> </br>
Celular 5</br>
${celular5.infoAltaGama()}
</br>
`); */

/* class App {
    constructor(descarga, puntuacion, peso) {
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert('App encendida');
        } else if (this.iniciada == true && this.instalada == true) {
            alert('La app ya se encuentra abierta');
        }
        else{
            alert("No instalaste la app bobolon");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert('App Cerrada');
        } 
    }
    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert('App instalada correctamente');
        }
    }
    desinstalar() {
        if (this.instalada == true && this.instalada == true) {
            this.instalada = false;
            alert('App desinstalada correctamente');
        }
    }
    appInfo(){
        return `
        Descargas: ${this.descarga}</br>
        Puntuación: ${this.puntuacion}</br>
        Peso: ${this.peso}</br>
        `;
    }
}

const app = new App("1M","4.5","900mb");

app.instalar();
app.abrir();
app.abrir();
app.instalar();
app.abrir();
app.abrir();
app.cerrar();
app.cerrar();
app.desinstalar();
app.abrir();
document.write(`
${app.appInfo()}
`); */