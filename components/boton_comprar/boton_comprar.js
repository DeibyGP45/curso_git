
export class BotonComprar extends HTMLElement {

    get template() {
        
        return `
            <style>
                :host {
                    display: block;
                    margin: 1rem
                }
                button {
                    
                }
            </style>
            <div>
                <button>Comprar</button>
            </div>
            `}

        constructor () {
            super()
            console.log('Instanciado el boton')
    }

    connectedCallback () {
        console.log('boton renderizado')

        this.shadow = this.attachShadow({mode:'open'})

        this.shadow.innerHTML = this.template


        
        this.btnComprar = this.shadow.querySelector('button')

        this.btnComprar = addEventListener('click', this.onClick.bind(this))
    };

    onClick() {
        console.log('Enviando datos')
    }
}

customElements.define('boton-comprar', BotonComprar)