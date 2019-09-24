
export class BotonComprar extends HTMLElement {


    static get observedAttributes(){
                        
        return ['state']
                   
    }

    get template() {
        
        return `
            <style>
                :host {
                    display: block;
                    margin: 1rem
                }
                button {
                    background-color: ${this.color};
                    text-transform: uppercase;
                }
            </style>
            <div>
                <button><slot name="slot1"></slot></button>
            </div>
            <p><slot name="slot2"></slot></p>
            `}

            

        constructor () {
            super()
            console.log('Instanciado el boton')
            this.color = 'gray' //
    }

    connectedCallback () {
        console.log('boton renderizado')

        //////

        this.shadow = this.shadow ?  this.shadow: 
        this.attachShadow({mode:'open'})

        this.shadow.innerHTML = this.template

            ///////////
        
        this.btnComprar = this.shadow.querySelector('button')

        this.btnComprar = addEventListener('click', this.onClick.bind(this))
        //this.aBotonesComprar = document.addEventListener()
    };

    attributeChangedCallback( attr, oldVal , newVal) {

        console.log( 'Cambiado', attr, 'al valor:', newVal)

        if (newVall) {
            this.color = 'orange'}
         else {
            this.color = 'red'}
            this.connectedCallback()
    };

    onClick() {
        if (this.color == 'orange') {
            console.log('Enviando datos', this.id)
            this.dispatchEvent(
                new CustomEvent('SetOperation', { detail: this.id }))
        }
    }
}

customElements.define('boton-comprar', BotonComprar)