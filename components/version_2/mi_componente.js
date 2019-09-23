const template = `
<style>

        :host {

            display: block;
            width: 80%;
            margin: 0.5rem auto;
            padding: 0.2rem 0.8rem;
            background-color: bisque;
        }

        div {
            
        }
        h1 {
            color: bisque;
            background-color: brown;
            padding: 0.2rem
            
        }    
    </style>
    <div>
        <h1>Ejemplo de Componentes</h2>
        <p>Esto es un componente</p>
    </div>
`

export class MiComponente extends HTMLElement {

    constructor() {

        super()

        const shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = template
    }
}

customElements.define('mi-componente', MiComponente)