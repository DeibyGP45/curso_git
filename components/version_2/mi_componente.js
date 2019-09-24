export class MiComponente extends HTMLElement {

    get template() {
        return `
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
        
        p{
            font-size: 1.4rem
        }
    </style>
    <div>
        <h1>Ejemplo de Componentes</h2>
        <p>Esto es un componente</p>
    </div>`}

    constructor() {

        super()
        const shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = this.template
        console.log('se ha ejecutado el constructor')
    }


        createdCallback = function() {
            console.log('se ha creado un elemento');
          };
          
        attachedCallback = function() {
            console.log('se ha añadido un elemento al DOM');
          }
}

customElements.define('mi-componente', MiComponente)
