"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro_Automotor = void 0;
var Registro_Automotor = /** @class */ (function () {
    function Registro_Automotor(cnumeroRegistro) {
        this.numeroRegistro = cnumeroRegistro; // se crea con su numero de registro.Aqui se inicializan variables.
        this.registroAutos = []; //inicializa con lista vacia.
        this.registroMotos = []; //inicializa con lista vacia.
        this.registroCamiones = []; //inicializa con lista vacia.
    }
    //Metodos seters..
    Registro_Automotor.prototype.cargarnumeroRegistro = function (numReg) {
        this.numeroRegistro = numReg;
    };
    Registro_Automotor.prototype.cargarRegistroAutos = function (dataAuto) {
        this.registroAutos.push(dataAuto);
    };
    Registro_Automotor.prototype.cargarRegistroMotos = function (dataMoto) {
        this.registroMotos.push(dataMoto);
    };
    Registro_Automotor.prototype.cargarRegistroCamiones = function (dataCamion) {
        this.registroCamiones.push(dataCamion);
    };
    // Metodos geters....
    Registro_Automotor.prototype.mostrarnumeroRegistro = function () {
        return this.numeroRegistro;
    };
    Registro_Automotor.prototype.mostrarRegistroAutos = function () {
        return this.registroAutos;
    };
    Registro_Automotor.prototype.mostrarRegistroMotos = function () {
        return this.registroMotos;
    };
    Registro_Automotor.prototype.mostrarRegistroCamiones = function () {
        return this.registroCamiones;
    };
    return Registro_Automotor;
}());
exports.Registro_Automotor = Registro_Automotor;
