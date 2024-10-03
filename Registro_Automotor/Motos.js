"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(ccilindrada, cmotos, ctitular) {
        this.Cilindrada = ccilindrada;
        this.motos = cmotos;
        this.titular = ctitular;
    }
    //metodos set
    Moto.prototype.setcilindrada = function (scilindrada) {
        this.Cilindrada = scilindrada;
    };
    Moto.prototype.setautos = function (smotos) {
        this.motos = smotos;
    };
    Moto.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Moto.prototype.getcilindrada = function () {
        return this.Cilindrada;
    };
    Moto.prototype.getmotos = function () {
        return this.motos;
    };
    Moto.prototype.gettitular = function () {
        return this.titular;
    };
    return Moto;
}());
exports.Moto = Moto;
