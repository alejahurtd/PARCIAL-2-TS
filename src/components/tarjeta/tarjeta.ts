import styles from "./tarjeta.css"

export enum AttriTarjeta {
    "img" = "img",
    "text" = "text",

}

export class Tarjeta extends HTMLElement{
    img?: string
    text?: string

    static get observedAttributes(){
        const attrs : Record<AttriTarjeta, null> = {
            img: null,
            text: null,
        }
        return Object.keys(attrs)
    }


    constructor(){
        super();
        this.attachShadow({mode : "open"});

    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propimg : AttriTarjeta,
        _: string | undefined,
        newValue: string | undefined,
        ){
            switch (propimg) {

                default:
               this[propimg] = newValue;
                break;
            }

    }

    show(){

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div class="tarjetaDiv">
            <img class="img"> ${this.img}</img>
                <p class="text">${this.text}</p>
            </div>
            `}

        const cssTarjeta = this.ownerDocument.createElement("style");
        cssTarjeta.innerHTML = styles;
        this.shadowRoot?.appendChild(cssTarjeta);

    }


}

customElements.define("my-tarjeta", Tarjeta)
export default Tarjeta;
