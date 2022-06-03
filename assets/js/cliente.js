export default class Cliente {
    constructor (nombre, impuesto){
        this._nombre = ()=>nombre
        this._impuesto = ()=>impuesto
    }

    get nombre() {
        return this._nombre()
    }
    set nombre(nuevo_Nombre) {
        return this._nombre = ()=>nuevo_Nombre
    }

    CAlculo_Impuesto(monto_BrutoAnual, dEducciones){
        return (monto_BrutoAnual - dEducciones) * 0.21
    }
}