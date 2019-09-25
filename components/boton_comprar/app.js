export class App {

    constructor() {
        this.isConeccted = false

        this.btnConnect = document.querySelector('button')
        this.aBotonesComprar = document.querySelectorAll('boton-comprar')


        this.btnConnect.addEventListener('click', this.onClick.bind(this))

        this.aBotonesComprar = addEventListener('setOperacion', this.onOperacion.bind(this))
    }

    onClick() {
        this.isConeccted = !this.isConeccted
        if (this.isConeccted) {
            this.aBotonesComprar.forEach(item => item.setAttribute('state', 'connected'))
            this.BtnConnect.innerHTML = 'Desconectar'
        } else {
            this.aBotonesComprar.forEach(item => item.removeAttribute('state'))

            this.BtnConnect.innerHTML = 'Conectar'
        }
        console.log(this.isConeccted)
    }


}