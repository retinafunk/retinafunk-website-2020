import {LitElement,html} from "lit-element";

class LitElemDemo extends LitElement{
    render() {
      //  super.render();
        return html`
            <p style="color:red;">YAY an Lit Element !Y!</p>
        `;
    }
}

customElements.define('lit-elem-demo',LitElemDemo);

const litElem = LitElemDemo;

export { litElem } ;