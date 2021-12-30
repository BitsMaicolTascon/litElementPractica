import { LitElement, html } from 'lit-element';

export class FeedbackElement extends LitElement {

    /* static styles = css`
    :host {
        display: block;
    }
    `; */

    constructor() { 
        super();
        this.message = '';
    }
    

    static get properties() {
        return {
            message: { type: String },
            opened: { type: Boolean }   
        }
    }

    render() {
        return html`
            <style>
                div {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    overflow: hidden;
                    height: 0px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #e74c3c;
                    color: white;
                    width: 100%;
                    transition: all 0.7s ease-in;
                    font-family: 'Trebuchet MS', sans-serif;
                    font-size: 1px;
                }

                .opened { 
                    height: 100px;
                    font-size: 2em;
                }
            </style>
            <div class="${this.opened ? 'opened' : ''}">
                ${this.message}
            </div>
        `;
    }

    open(msg) {
        this.message = msg;
        this.opened = true;

        setTimeout(() => {
            this.close();
        } , 3000);
    }

    close() { 
        this.opened = false;
    }

}
customElements.define('feedback-element', FeedbackElement);