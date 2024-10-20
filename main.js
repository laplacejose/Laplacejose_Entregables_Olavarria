"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Titular_1 = require("./Titular");
/*import {Vehiculo}   from "./Vehiculos";*/
var Autos_1 = require("./Autos");
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var Registro_Automotor_1 = require("./Registro_Automotor");
//Listado de titulares
var Titular1 = new Titular_1.Titular("Juan", 25333888);
var Titular2 = new Titular_1.Titular("juana", 26000552);
var Titular3 = new Titular_1.Titular("Miguel", 27333888);
var Titular4 = new Titular_1.Titular("Carlos", 28000552);
var Titular5 = new Titular_1.Titular("Ramon", 23333888);
var Titular6 = new Titular_1.Titular("Alexis", 25500552);
var Titular7 = new Titular_1.Titular("Pedro", 22233888);
var Titular8 = new Titular_1.Titular("Diego", 26600552);
//Listado de Vehiculos o Patentes 
//    AUTOS
/*const vehiculo1:Vehiculo=new Vehiculo("dft333","ford",2015,2555555,"fdt4445")
const vehiculo2:Vehiculo=new Vehiculo("aid333","Toyota",2015,9977555,"ttt995")
const vehiculo3:Vehiculo=new Vehiculo("dft333","Renault",2015,2555555,"rrt4445")
const vehiculo4:Vehiculo=new Vehiculo("aid333","Fiat",2015,9977555,"fft995")
const vehiculo5:Vehiculo=new Vehiculo("dft333","Chevrolet",2015,2555555,"cch4445")
const vehiculo6:Vehiculo=new Vehiculo("aid333","Honda",2015,9977555,"hho995")
//    MOTOS
const vehiculo7:Vehiculo= new Vehiculo("dft666","Mondial",2016,2678955,"hdt3335");
const vehiculo8:Vehiculo= new Vehiculo("dft666","Mondial",2016,2678955,"hdt3335");
const vehiculo9:Vehiculo= new Vehiculo("dft666","Mondial",2016,2678955,"hdt3335");
//    CAMIONES
const vehiculo10:Vehiculo=new Vehiculo("aid333","ford cargo",2015,9977555,"hdt995")
const vehiculo11:Vehiculo=new Vehiculo("atd883","Mercedez benz",2010,2777555,"hdt4345")
const vehiculo12:Vehiculo=new Vehiculo("ahd663","Mercedez benz",2017,2555555,"hdt3345")
*/
// Crear OBJETOS AUTOS a partir de datos VEHICULO Y TITULAR ...INSTANCIAR
var Auto1 = new Autos_1.Auto("Sedan", "dft333", "ford", 2015, 2555555, "fdt4445", Titular1);
var Auto2 = new Autos_1.Auto("Utilitario", "aid333", "Toyota", 2015, 9977555, "ttt995", Titular2);
var Auto3 = new Autos_1.Auto("Suv", "dft333", "Renault", 2015, 2555555, "rrt4445", Titular3);
var Auto4 = new Autos_1.Auto("Familiar", "aid333", "Fiat", 2015, 9977555, "fft995", Titular4);
var Auto5 = new Autos_1.Auto("Berlina", "dft333", "Chevrolet", 2015, 2555555, "cch4445", Titular6);
var Auto6 = new Autos_1.Auto("Todoterreno", "aid333", "Honda", 2015, 9977555, "hho995", Titular6);
// Crear OBJETOS MOTOS a partir de datos VEHICULO Y TITULAR ...INSTANCIAR
var Moto1 = new Motos_1.Moto(125, "dft666", "Mondial", 2016, 2678955, "hdt3335", Titular5);
var Moto2 = new Motos_1.Moto(250, "dft666", "Mondial", 2016, 2678955, "hdt3335", Titular5);
var Moto3 = new Motos_1.Moto(500, "dft666", "Mondial", 2016, 2678955, "hdt3335", Titular4);
// Crear OBJETOS MOTOS a partir de datos VEHICULO Y TITULAR ...INSTANCIAR
var camion1 = new Camiones_1.Camion(40, "aid333", "ford cargo", 2015, 9977555, "hdt995", Titular2);
var camion2 = new Camiones_1.Camion(45, "atd883", "Mercedez benz", 2010, 2777555, "hdt4345", Titular2);
var camion3 = new Camiones_1.Camion(50, "ahd663", "Mercedez benz", 2017, 2555555, "hdt3345", Titular4);
//Crear el primer registro automotor
var registroOlavarria1 = new Registro_Automotor_1.Registro_Automotor(1);
console.log("El numero de registro es");
console.log(Registro_Automotor_1.Registro_Automotor);
//carga de Autos en registroOlavarria1
registroOlavarria1.cargarRegistroAutos(Auto1);
registroOlavarria1.cargarRegistroAutos(Auto2);
registroOlavarria1.cargarRegistroAutos(Auto3);
registroOlavarria1.cargarRegistroAutos(Auto4);
registroOlavarria1.cargarRegistroAutos(Auto5);
registroOlavarria1.cargarRegistroAutos(Auto6);
console.log("Mostrar el registro de autos cargado");
//carga de Motos en registroOlavarria1
registroOlavarria1.cargarRegistroMotos(Moto1);
registroOlavarria1.cargarRegistroMotos(Moto2);
registroOlavarria1.cargarRegistroMotos(Moto3);
console.log("Mostrar el registro de Motos cargado");
//carga de Camiones en registroOlavarria1
registroOlavarria1.cargarRegistroCamiones(camion1);
registroOlavarria1.cargarRegistroCamiones(camion2);
registroOlavarria1.cargarRegistroCamiones(camion3);
console.log("Mostrar el registro de Camiones cargado");
//consultar informacion den distintos tatos del registro_Automotor
console.log("cilindrada= ".concat((Moto3.getcilindrada()))); //consultar cilindrada de Moto3
console.log(Auto4.gettitular()); //consulta de titular de Auto4
// cambio de titular en Auto4
/*registroOlavarria1.cargarRegistroAutos(Auto4);
registroOlavarria1.cargarRegistroAutos*/
var NuevoTitular = new Titular_1.Titular("Lucas", 25669836);
Auto4.settitular(NuevoTitular);
console.log(Auto4.gettitular()); //consulta nuevo titular de Auto4
