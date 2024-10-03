"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(cpatente, cmarca, cmodelo, cnumeroMotor, cchasis) {
        this.patente = cpatente;
        this.marca = cmarca;
        this.modelo = cmodelo;
        this.numeroMotor = cnumeroMotor;
        this.chasis = cchasis;
    }
    //metodos set
    Vehiculo.prototype.setnumeroPatente = function (spatente) {
        this.patente = spatente;
    };
    Vehiculo.prototype.setmarca = function (smarca) {
        this.marca = smarca;
    };
    Vehiculo.prototype.setmodelo = function (smodelo) {
        this.modelo = smodelo;
    };
    Vehiculo.prototype.setnumeroMotor = function (snumeroMotor) {
        this.numeroMotor = snumeroMotor;
    };
    Vehiculo.prototype.setchasis = function (schasis) {
        this.chasis = schasis;
    };
    //metodos get
    Vehiculo.prototype.getpatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getmarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getmodelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getnumeroMotor = function () {
        return this.numeroMotor;
    };
    Vehiculo.prototype.getChasis = function () {
        return this.chasis;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
