
"use strict"
import {Titular }   from "./Titular";
/*import {Vehiculo}   from "./Vehiculos";*/
import {Auto }   from "./Autos";
import {Moto}   from "./Motos";
import {Camion }   from "./Camiones";
import {Registro_Automotor }   from "./Registro_Automotor";
//Listado de titulares
const Titular1:Titular=new Titular("Juan",25333888);
const Titular2:Titular=new Titular("juana",26000552);
const Titular3:Titular=new Titular("Miguel",27333888);
const Titular4:Titular=new Titular("Carlos",28000552);
const Titular5:Titular=new Titular("Ramon",23333888);
const Titular6:Titular=new Titular("Alexis",25500552);
const Titular7:Titular=new Titular("Pedro",22233888);
const Titular8:Titular=new Titular("Diego",26600552);

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
const Auto1:Auto= new Auto("Sedan","dft333","ford",2015,2555555,"fdt4445",Titular1);
const Auto2:Auto= new Auto("Utilitario","aid333","Toyota",2015,9977555,"ttt995",Titular2);
const Auto3:Auto= new Auto("Suv","dft333","Renault",2015,2555555,"rrt4445",Titular3);
const Auto4:Auto= new Auto("Familiar","aid333","Fiat",2015,9977555,"fft995",Titular4);
const Auto5:Auto= new Auto("Berlina","dft333","Chevrolet",2015,2555555,"cch4445",Titular6);
const Auto6:Auto= new Auto("Todoterreno","aid333","Honda",2015,9977555,"hho995",Titular6);

// Crear OBJETOS MOTOS a partir de datos VEHICULO Y TITULAR ...INSTANCIAR

const Moto1:Moto= new Moto(125,"dft666","Mondial",2016,2678955,"hdt3335",Titular5);
const Moto2:Moto= new Moto(250,"dft666","Mondial",2016,2678955,"hdt3335",Titular5);
const Moto3:Moto= new Moto(500,"dft666","Mondial",2016,2678955,"hdt3335",Titular4);

// Crear OBJETOS MOTOS a partir de datos VEHICULO Y TITULAR ...INSTANCIAR

const camion1:Camion= new Camion(40,"aid333","ford cargo",2015,9977555,"hdt995",Titular2);
const camion2:Camion= new Camion(45,"atd883","Mercedez benz",2010,2777555,"hdt4345",Titular2);
const camion3:Camion= new Camion(50,"ahd663","Mercedez benz",2017,2555555,"hdt3345",Titular4);

//Crear el primer registro automotor
let registroOlavarria1:Registro_Automotor=new Registro_Automotor(1);
console.log("El numero de registro es");
  console.log(Registro_Automotor);

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

console.log(`cilindrada= ${(Moto3.getcilindrada())}`);//consultar cilindrada de Moto3
console.log(Auto4.gettitular());//consulta de titular de Auto4
// cambio de titular en Auto4

/*registroOlavarria1.cargarRegistroAutos(Auto4);
registroOlavarria1.cargarRegistroAutos*/
let NuevoTitular:Titular= new Titular ("Lucas",25669836,);
Auto4.settitular(NuevoTitular);
console.log(Auto4.gettitular());//consulta nuevo titular de Auto4

//borrar un Auto del registroOlavarria1
















