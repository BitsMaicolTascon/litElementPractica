import { LitElement, html } from 'lit-element';

export class HolaMundo extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    render() {
        return html`
        <h1>Hola mundo te saluda ${this.name}</h1>
        `;
    }
}
customElements.define('hola-mundo', HolaMundo);