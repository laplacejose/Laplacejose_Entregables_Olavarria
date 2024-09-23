"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
var Vehiculos = /** @class */ (function () {
    function Vehiculos(cpatente, cmarca, cmodelo, cnumeroMotor, cchasis) {
        this.patente = cpatente;
        this.marca = cmarca;
        this.modelo = cmodelo;
        this.numeroMotor = cnumeroMotor;
        this.chasis = cchasis;
    }
    //metodos set
    Vehiculos.prototype.setnumeroPatente = function (spatente) {
        this.patente = spatente;
    };
    Vehiculos.prototype.setmarca = function (smarca) {
        this.marca = smarca;
    };
    Vehiculos.prototype.setmodelo = function (smodelo) {
        this.modelo = smodelo;
    };
    Vehiculos.prototype.setnumeroMotor = function (snumeroMotor) {
        this.numeroMotor = snumeroMotor;
    };
    Vehiculos.prototype.setchasis = function (schasis) {
        this.chasis = schasis;
    };
    //metodos get
    Vehiculos.prototype.getpatente = function () {
        return this.patente;
    };
    Vehiculos.prototype.getmarca = function () {
        return this.marca;
    };
    Vehiculos.prototype.getmodelo = function () {
        return this.numeroMotor;
    };
    Vehiculos.prototype.getnumeroMotor = function () {
        return this.numeroMotor;
    };
    Vehiculos.prototype.getChasis = function () {
        return this.chasis;
    };
    return Vehiculos;
}());
exports.Vehiculos = Vehiculos;
