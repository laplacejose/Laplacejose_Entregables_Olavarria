"use strict"
import {Titular }   from "./Titular";
import {Vehiculos}   from "./Vehiculos";
import {Autos }   from "./Autos";
import {Motos }   from "./Motos";
import {Camiones }   from "./Camiones";

class Registro_Automotor{

/*private Autos:*/
private Titular:Titular;
private Vehiculos:Vehiculos
private Autos:Autos;
private Motos:Motos;
private Camiones:Camiones;


}

const Titular1:Titular=new Titular("Juan",25333888);
const vehiculo1:Vehiculos=new Vehiculos("dft333","ford",2015,2555555,"hdt4445")
const Auto1:Autos= new Autos("Sedan",vehiculo1,Titular1);

const vehiculo2:Vehiculos= new Vehiculos("dft666","Mondial",2016,2678955,"hdt3335");
const Moto1:Motos= new Motos(125,vehiculo2,Titular1);



console.log(`Datos de Moto :`);
console.log(Moto1);
console.log(`Datos de Auto : `);
console.log(Auto1);

