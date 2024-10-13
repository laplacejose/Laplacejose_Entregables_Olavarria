"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(ccapacidadCarga, ccamion, ctitular) {
        this.capacidadCarga = ccapacidadCarga;
        this.camion = ccamion;
        this.titular = ctitular;
    }
    //metodos set
    Camion.prototype.setcapacidadCarga = function (scapacidadCarga) {
        this.capacidadCarga = scapacidadCarga;
    };
    Camion.prototype.setautos = function (scamion) {
        this.camion = scamion;
    };
    Camion.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Camion.prototype.getcapacidaCarga = function () {
        return this.capacidadCarga;
    };
    Camion.prototype.getcamion = function () {
        return this.camion;
    };
    Camion.prototype.gettitular = function () {
        return this.titular;
    };
    return Camion;
}());
exports.Camion = Camion;
