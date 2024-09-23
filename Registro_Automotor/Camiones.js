"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiones = void 0;
var Camiones = /** @class */ (function () {
    function Camiones(ccapacidadCarga, ccamion, ctitular) {
        this.capacidadCarga = ccapacidadCarga;
        this.camion = ccamion;
        this.titular = ctitular;
    }
    //metodos set
    Camiones.prototype.setcapacidadCarga = function (scapacidadCarga) {
        this.capacidadCarga = scapacidadCarga;
    };
    Camiones.prototype.setautos = function (scamion) {
        this.camion = scamion;
    };
    Camiones.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Camiones.prototype.getcapacidaCarga = function () {
        return this.capacidadCarga;
    };
    Camiones.prototype.getcamion = function () {
        return this.camion;
    };
    Camiones.prototype.gettitular = function () {
        return this.titular;
    };
    return Camiones;
}());
exports.Camiones = Camiones;
