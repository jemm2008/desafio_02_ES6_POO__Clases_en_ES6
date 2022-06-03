  //Start
import Cliente from "./cliente.js"
import Impuestos from "./Impuestos.js"
//
alert(`Hola!, Buen día!! por favor
abrir 'Inspecionar', luego abrir la "Consola",
los ejercicios se muestran en la misma.`)
//
//  *******  CREAR  IMPUESTOS  *******  //
let Impc1 = new Impuestos (12780000)
let Impc2 = new Impuestos (6590000)
let Impc3 = new Impuestos (3135500)
console.log(`Crear Impuestos (Objetos):`)
console.log(`impuesto del cliente 1: Impc1(${Impc1.montoBrutoAnual})`)
console.log(`impuesto del cliente 2: Impc2(${Impc2.montoBrutoAnual})`)
console.log(`impuesto del cliente 3: Impc3(${Impc3.montoBrutoAnual})`)
console.log(`\n*************************************************\n\n`)
//
  //  *******  GETTERs  *******  //
//
console.log("GET deducciones:")
console.log(`deducciones (valor por defecto):`)
console.log(`deducciones cliente 1: ${Impc1.deducciones}`)
console.log(`deducciones cliente 2: ${Impc2.deducciones}`)
console.log(`deducciones cliente 3: ${Impc3.deducciones}`)
  //  *******  SETTEAR  DEDUCCIONES  *******  //
console.log(`\n*************************************************\n\n`)
console.log("SET deducciones:")
console.log(`deducción cliente 1 es: ${Impc1.deducciones = 3850000}`)
console.log(`deducción cliente 2 es: ${Impc2.deducciones = 1500300}`)
console.log(`deducción cliente 3 es: ${Impc3.deducciones = 981314}`)
//
console.log(`\n*************************************************\n\n`)
  //  *******  MOSTRAR  UN  OBJETO  *******  //
console.log("El objeto Impuesto cliente 1: ")
console.log(Impc1)
console.log(
`Tiene monto Bruto Anual de : ${Impc1.montoBrutoAnual},
    y    deducciones de :     ${Impc1.deducciones}.`)
//
//  *******  CREAR  CLIENTES  *******  //
//
console.log(`\n*************************************************\n\n`)
//
console.log("Crear Clientes:\n\n")
let Cliente1 = new Cliente ("Juan",Impc1)
let Cliente2 = new Cliente ("John",Impc2)
let Cliente3 = new Cliente ("Jack",Impc3)
//
console.log(`${Cliente1.nombre}:`)
console.log(Cliente1)
console.log(`${Cliente2.nombre}:`)
console.log(Cliente2)
console.log(`${Cliente3.nombre}:`)
console.log(Cliente3)
//
console.log(`\n*************************************************\n\n`)
//
  //  *******  CALCULO  DE  IMPUESTOS  *******  //
//
let Impuestos_Cliente1 = Cliente1.CAlculo_Impuesto(Impc1.montoBrutoAnual, Impc1.deducciones)
let Impuestos_Cliente2 = Cliente2.CAlculo_Impuesto(Impc2.montoBrutoAnual, Impc2.deducciones)
let Impuestos_Cliente3 = Cliente3.CAlculo_Impuesto(Impc3.montoBrutoAnual, Impc3.deducciones)
//
console.log(`Los Impuestos del cliente 1 son: ${Impuestos_Cliente1}`)
console.log(`Los Impuestos del cliente 2 son: ${Impuestos_Cliente2}`)
console.log(`Los Impuestos del cliente 3 son: ${Impuestos_Cliente3}`)
//
  // end.