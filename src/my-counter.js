import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
        <style>
            div {
                border: 1px solid #ddd;
                padding: 10px;
            }

            .x {
                background-color: red;
                color: white;
            }
        
        </style>
        <div class="x">Llevas ${this.counter} clicks!!!</div>
        <div>
            <gvt-button @click="${this.incrementar}">+1</gvt-button>
            <gvt-button @click="${this.decrementar}">-1</gvt-button>
        </div>
        <feedback-element id="feedback"></feedback-element>
        `;
    }

    get feedback() {
        return this.shadowRoot.getElementById('feedback');
    }

    incrementar(){
        if(this.counter < 5){
            this.counter++;
        } 
        if (this.counter === 5) {
            this.feedback.open('¡Has llegado al límite de clicks!');
        }
    }

    decrementar() {
        if(this.counter > 0){
            this.counter--;
        }
        if (this.counter === 0) {
            this.feedback.open('¡Has reseteado los clicks!');
        }
    }
}
customElements.define('my-counter', MyCounter);