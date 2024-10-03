"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaAutos = void 0;
var Registro_Automotor = /** @class */ (function () {
    function Registro_Automotor(registroAutos, registroMotos, registroCamiones) {
        this.registroAutos = [];
        this.registroMotos = [];
        this.registroCamiones = [];
        this.registroAutos = registroAutos;
        this.registroMotos = registroMotos;
        this.registroCamiones = registroCamiones;
    }
    //Metodos seters..
    Registro_Automotor.prototype.cargarRegistroAutos = function (ListaAutos) {
        this.registroAutos = ListaAutos;
        console.log(this.registroAutos);
    };
    Registro_Automotor.prototype.cargarRegistroMotos = function () {
        this.registroMotos = [];
    };
    Registro_Automotor.prototype.cargarRegistroCamiones = function () {
        this.registroMotos = [];
    };
    // Metodos geters....
    Registro_Automotor.prototype.mostrarRegistroAutos = function () {
        return this.registroAutos = [];
    };
    Registro_Automotor.prototype.mostrarRegistroMotos = function () {
        return this.registroMotos = [];
    };
    Registro_Automotor.prototype.mostrarRegistroCamiones = function () {
        return this.registroCamiones = [];
    };
    return Registro_Automotor;
}());
exports.ListaAutos = [
    { Tipo: 'sedan', Vehiculo: { patente: "aid333", marca: "ford", modelo: 2015, numeroMotor: 9977555, chasis: "hdt995" }, Titular: { nombre: "juan", dni: 26000552 } },
    { Tipo: 'utilitario', Vehiculo: { patente: "atd883", marca: "ford", modelo: 2010, numeroMotor: 2777555, chasis: "hdt4345" }, Titular: { nombre: "Pedro", dni: 23880552 } },
    { Tipo: 'suv', Vehiculo: { patente: "ahd663", marca: "ford", modelo: 2017, numeroMotor: 2555555, chasis: "hdt3345" }, Titular: { nombre: "Lucas", dni: 22066552 } },
    { Tipo: 'sport', Vehiculo: { patente: "ttd553", marca: "ford", modelo: 2019, numeroMotor: 2556600, chasis: "hdt0045" }, Titular: { nombre: "Maria", dni: 21550552 } }
];
console.log(exports.ListaAutos);
/*
const Titular1:Titular=new Titular("Juan",25333888);
const vehiculo1:Vehiculo=new Vehiculo("dft333","ford",2015,2555555,"hdt4445")
const Auto1:Auto= new Auto("Sedan",vehiculo1,Titular1);

const vehiculo2:Vehiculo= new Vehiculo("dft666","Mondial",2016,2678955,"hdt3335");
const Moto1:Moto= new Moto(125,vehiculo2,Titular1);



console.log(`Datos de Moto :`);
console.log(Moto1);
console.log(`Datos de Auto : `);
console.log(Auto1);
*/
