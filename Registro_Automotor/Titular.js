"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titular = void 0;
var Titular = /** @class */ (function () {
    function Titular(cnombre, cdni) {
        this.nombre = cnombre;
        this.dni = cdni;
    }
    //metodos set
    Titular.prototype.setnombre = function (snombre) {
        if (snombre.trim() != "") { //sin espacios no es un dato vacio
            this.nombre = snombre;
        }
    };
    Titular.prototype.setdni = function (sdni) {
        if (sdni > 5000000) { //comparo con valor de referencial
            this.dni = sdni;
        }
    };
    //metodos get
    Titular.prototype.getnombre = function () {
        return this.nombre;
    };
    Titular.prototype.getdni = function () {
        return this.dni;
    };
    return Titular;
}());
exports.Titular = Titular;
