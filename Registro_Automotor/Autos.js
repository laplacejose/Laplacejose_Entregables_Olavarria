"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(ctipo, cautos, ctitular) {
        this.Tipo = ctipo;
        this.autos = cautos;
        this.titular = ctitular;
    }
    //metodos set
    Auto.prototype.settipo = function (stipo) {
        this.Tipo = stipo;
    };
    Auto.prototype.setautos = function (sautos) {
        this.autos = sautos;
    };
    Auto.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Auto.prototype.gettipo = function () {
        return this.Tipo;
    };
    Auto.prototype.getautos = function () {
        return this.autos;
    };
    Auto.prototype.gettitular = function () {
        return this.titular;
    };
    return Auto;
}());
exports.Auto = Auto;
