"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehiculos_1 = require("./Vehiculos");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(ccilindrada, cpatente, cmarca, cmodelo, cnumeroMotor, cchasis, ctitular) {
        var _this = _super.call(this, cpatente, cmarca, cmodelo, cnumeroMotor, cchasis) || this;
        _this.Cilindrada = ccilindrada;
        _this.titular = ctitular;
        return _this;
    }
    //metodos set
    Moto.prototype.setcilindrada = function (scilindrada) {
        this.Cilindrada = scilindrada;
    };
    Moto.prototype.settitular = function (stitular) {
        this.titular = stitular;
    };
    //metodos get
    Moto.prototype.getcilindrada = function () {
        return this.Cilindrada;
    };
    Moto.prototype.gettitular = function () {
        return this.titular;
    };
    return Moto;
}(Vehiculos_1.Vehiculo));
exports.Moto = Moto;
