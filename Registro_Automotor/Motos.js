"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motos = void 0;
var Motos = /** @class */ (function () {
    function Motos(ccilindrada, cmotos, ctitular) {
        this.Cilindrada = ccilindrada;
        this.motos = cmotos;
        this.titular = ctitular;
    }
    //metodos set
    Motos.prototype.setcilindrada = function (scilindrada) {
        this.Cilindrada = scilindrada;
    };
    Motos.prototype.setautos = function (smotos) {
        this.motos = smotos;
    };
    Motos.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Motos.prototype.getcilindrada = function () {
        return this.Cilindrada;
    };
    Motos.prototype.getmotos = function () {
        return this.motos;
    };
    Motos.prototype.gettitular = function () {
        return this.titular;
    };
    return Motos;
}());
exports.Motos = Motos;
