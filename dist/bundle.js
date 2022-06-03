(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual) {
    var deducciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Impuesto);

    this._montoBrutoAnual = function () {
      return montoBrutoAnual;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual();
    },
    set: function set(nuevo_montoBrutoAnual) {
      return this._montoBrutoAnual = function () {
        return nuevo_montoBrutoAnual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones();
    },
    set: function set(nueva_deducciOn) {
      return this._deducciones = function () {
        return nueva_deducciOn;
      };
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = function () {
      return nombre;
    };

    this._impuesto = function () {
      return impuesto;
    };
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    },
    set: function set(nuevo_Nombre) {
      return this._nombre = function () {
        return nuevo_Nombre;
      };
    }
  }, {
    key: "CAlculo_Impuesto",
    value: function CAlculo_Impuesto(monto_BrutoAnual, dEducciones) {
      return (monto_BrutoAnual - dEducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
},{}],3:[function(require,module,exports){
"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Start
//
alert("Hola!, Buen d\xEDa!! por favor\nabrir 'Inspecionar', luego abrir la \"Consola\",\nlos ejercicios se muestran en la misma."); //
//  *******  CREAR  IMPUESTOS  *******  //

var Impc1 = new _Impuestos["default"](12780000);
var Impc2 = new _Impuestos["default"](6590000);
var Impc3 = new _Impuestos["default"](3135500);
console.log("Crear Impuestos (Objetos):");
console.log("impuesto del cliente 1: Impc1(".concat(Impc1.montoBrutoAnual, ")"));
console.log("impuesto del cliente 2: Impc2(".concat(Impc2.montoBrutoAnual, ")"));
console.log("impuesto del cliente 3: Impc3(".concat(Impc3.montoBrutoAnual, ")"));
console.log("\n*************************************************\n\n"); //
//  *******  GETTERs  *******  //
//

console.log("GET deducciones:");
console.log("deducciones (valor por defecto):");
console.log("deducciones cliente 1: ".concat(Impc1.deducciones));
console.log("deducciones cliente 2: ".concat(Impc2.deducciones));
console.log("deducciones cliente 3: ".concat(Impc3.deducciones)); //  *******  SETTEAR  DEDUCCIONES  *******  //

console.log("\n*************************************************\n\n");
console.log("SET deducciones:");
console.log("deducci\xF3n cliente 1 es: ".concat(Impc1.deducciones = 3850000));
console.log("deducci\xF3n cliente 2 es: ".concat(Impc2.deducciones = 1500300));
console.log("deducci\xF3n cliente 3 es: ".concat(Impc3.deducciones = 981314)); //

console.log("\n*************************************************\n\n"); //  *******  MOSTRAR  UN  OBJETO  *******  //

console.log("El objeto Impuesto cliente 1: ");
console.log(Impc1);
console.log("Tiene monto Bruto Anual de : ".concat(Impc1.montoBrutoAnual, ",\n    y    deducciones de :     ").concat(Impc1.deducciones, ".")); //
//  *******  CREAR  CLIENTES  *******  //
//

console.log("\n*************************************************\n\n"); //

console.log("Crear Clientes:\n\n");
var Cliente1 = new _cliente["default"]("Juan", Impc1);
var Cliente2 = new _cliente["default"]("John", Impc2);
var Cliente3 = new _cliente["default"]("Jack", Impc3); //

console.log("".concat(Cliente1.nombre, ":"));
console.log(Cliente1);
console.log("".concat(Cliente2.nombre, ":"));
console.log(Cliente2);
console.log("".concat(Cliente3.nombre, ":"));
console.log(Cliente3); //

console.log("\n*************************************************\n\n"); //
//  *******  CALCULO  DE  IMPUESTOS  *******  //
//

var Impuestos_Cliente1 = Cliente1.CAlculo_Impuesto(Impc1.montoBrutoAnual, Impc1.deducciones);
var Impuestos_Cliente2 = Cliente2.CAlculo_Impuesto(Impc2.montoBrutoAnual, Impc2.deducciones);
var Impuestos_Cliente3 = Cliente3.CAlculo_Impuesto(Impc3.montoBrutoAnual, Impc3.deducciones); //

console.log("Los Impuestos del cliente 1 son: ".concat(Impuestos_Cliente1));
console.log("Los Impuestos del cliente 2 son: ".concat(Impuestos_Cliente2));
console.log("Los Impuestos del cliente 3 son: ".concat(Impuestos_Cliente3)); //
// end.
},{"./Impuestos.js":1,"./cliente.js":2}]},{},[3]);
