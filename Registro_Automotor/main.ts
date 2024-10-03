
"use strict"/*
import {Titular }   from "./Titular";
import {Vehiculo}   from "./Vehiculos";
import {Auto }   from "./Autos";
import {Moto}   from "./Motos";
import {Camion }   from "./Camiones";



const Titular1:Titular=new Titular("Juan",25333888);
const vehiculo1:Vehiculo=new Vehiculo("dft333","ford",2015,2555555,"hdt4445")
const Auto1:Auto= new Auto("Sedan",vehiculo1,Titular1);

const vehiculo2:Vehiculo= new Vehiculo("dft666","Mondial",2016,2678955,"hdt3335");
const Moto1:Moto= new Moto(125,vehiculo2,Titular1);



console.log(`Datos de Moto :`);
console.log(Moto1);
console.log(`Datos de Auto : `);
console.log(Auto1);*/
export const ListaAutos=[
    {Tipo:'sedan',Vehiculo:{patente:"aid333",marca:"ford",modelo:2015,numeroMotor:9977555,chasis:"hdt995"},Titular:{nombre:"juan",dni:26000552}},
    {Tipo:'utilitario',Vehiculo:{patente:"atd883",marca:"ford",modelo:2010,numeroMotor:2777555,chasis:"hdt4345"},Titular:{nombre:"Pedro",dni:23880552}},
    {Tipo:'suv',Vehiculo:{patente:"ahd663",marca:"ford",modelo:2017,numeroMotor:2555555,chasis:"hdt3345"},Titular:{nombre:"Lucas",dni:22066552}},
    {Tipo:'sport',Vehiculo:{patente:"ttd553",marca:"ford",modelo:2019,numeroMotor:2556600,chasis:"hdt0045"},Titular:{nombre:"Maria",dni:21550552}}

]
console.log(ListaAutos);



export const ListaMotos=[
    {cil:125,Vehiculo:{patente:"aid333",marca:"ford",modelo:2015,numeroMotor:9977555,chasis:"hdt995"},Titular:{nombre:"juan",dni:26000552}},
    {cil:150,Vehiculo:{patente:"atd883",marca:"ford",modelo:2010,numeroMotor:2777555,chasis:"hdt4345"},Titular:{nombre:"Pedro",dni:23880552}},
    {cil:250,Vehiculo:{patente:"ahd663",marca:"ford",modelo:2017,numeroMotor:2555555,chasis:"hdt3345"},Titular:{nombre:"Lucas",dni:22066552}},
    {cil:250,Vehiculo:{patente:"ttd553",marca:"ford",modelo:2019,numeroMotor:2556600,chasis:"hdt0045"},Titular:{nombre:"Maria",dni:21550552}}

]
console.log(ListaMotos);



export const ListaCamiones=[
    {Tipo:2000,Vehiculo:{patente:"aid333",marca:"ford",modelo:2015,numeroMotor:9977555,chasis:"hdt995"},Titular:{nombre:"juan",dni:26000552}},
    {Tipo:200,Vehiculo:{patente:"atd883",marca:"ford",modelo:2010,numeroMotor:2777555,chasis:"hdt4345"},Titular:{nombre:"Pedro",dni:23880552}},
    {Tipo:200,Vehiculo:{patente:"ahd663",marca:"ford",modelo:2017,numeroMotor:2555555,chasis:"hdt3345"},Titular:{nombre:"Lucas",dni:22066552}},
    {Tipo:200,Vehiculo:{patente:"ttd553",marca:"ford",modelo:2019,numeroMotor:2556600,chasis:"hdt0045"},Titular:{nombre:"Maria",dni:21550552}}

]
console.log(ListaCamiones);
