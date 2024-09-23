"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autos = void 0;
var Autos = /** @class */ (function () {
    function Autos(ctipo, cautos, ctitular) {
        this.Tipo = ctipo;
        this.autos = cautos;
        this.titular = ctitular;
    }
    //metodos set
    Autos.prototype.settipo = function (stipo) {
        this.Tipo = stipo;
    };
    Autos.prototype.setautos = function (sautos) {
        this.autos = sautos;
    };
    Autos.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Autos.prototype.gettipo = function () {
        return this.Tipo;
    };
    Autos.prototype.getautos = function () {
        return this.autos;
    };
    Autos.prototype.gettitular = function () {
        return this.titular;
    };
    return Autos;
}());
exports.Autos = Autos;
