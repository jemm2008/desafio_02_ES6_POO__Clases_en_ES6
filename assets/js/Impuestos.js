export default class Impuesto {
    constructor (montoBrutoAnual, deducciones = 0){
        this._montoBrutoAnual = ()=>montoBrutoAnual
        this._deducciones = ()=>deducciones
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual()
    }
    set montoBrutoAnual(nuevo_montoBrutoAnual) {
        return this._montoBrutoAnual = ()=>nuevo_montoBrutoAnual
    }

    get deducciones() {
        return this._deducciones()
    }
    set deducciones(nueva_deducciOn) {
        return this._deducciones = ()=>nueva_deducciOn
    }
}