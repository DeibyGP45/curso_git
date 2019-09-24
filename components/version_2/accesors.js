class Pais {


    get lang() {

        let lenguaje = 'Otros'
        if (this.code == 'es') {
            lenguaje = 'Español'

        }
        return lenguaje
    }

    set setJefe(name) {
            this._jefe = name.toLowerCase()
        }
    constructor(code) {
        this.code = code
    }

}


let p1 = new Pais('es')
console.log(p1.lang)
p1.setJefe = 'Pepe'
console.log(p1)