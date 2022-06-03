"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Start
//
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