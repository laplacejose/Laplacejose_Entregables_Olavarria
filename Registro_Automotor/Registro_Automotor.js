"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Titular_1 = require("./Titular");
var Vehiculos_1 = require("./Vehiculos");
var Autos_1 = require("./Autos");
var Motos_1 = require("./Motos");
var Registro_Automotor = /** @class */ (function () {
    function Registro_Automotor() {
    }
    return Registro_Automotor;
}());
var Titular1 = new Titular_1.Titular("Juan", 25333888);
var vehiculo1 = new Vehiculos_1.Vehiculos("dft333", "ford", 2015, 2555555, "hdt4445");
var Auto1 = new Autos_1.Autos("Sedan", vehiculo1, Titular1);
var vehiculo2 = new Vehiculos_1.Vehiculos("dft666", "Mondial", 2016, 2678955, "hdt3335");
var Moto1 = new Motos_1.Motos(125, vehiculo2, Titular1);
console.log("Datos de Moto :");
console.log(Moto1);
console.log("Datos de Auto : ");
console.log(Auto1);
