import "./components/export"
import styles from "./index.css"
import Button, { AttriButton } from "./components/button/button";
import Tarjeta, { AttriTarjeta} from "./components/tarjeta/tarjeta";
import { traer_img } from "./services/getInfo";
import { traer_texto } from "./services/getInfo";
import { gatType } from "./types/gatTypes";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        const imagen = await traer_img()
        this.render(imagen)
    }

    render(imagen:any){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = "";
        imagen.forEach((cat: any) => {
            const button = this.ownerDocument.createElement("my-button");
            button.setAttribute(AttriButton.name,cat);

            button.addEventListener("click", async () =>{
                const text = await traer_texto(cat)
                console.log(text)

                    const Tarjeta = this.ownerDocument.createElement("my-tarjeta");
                    Tarjeta.setAttribute(AttriTarjeta.text, imagen.value);
                    this.shadowRoot?.appendChild(Tarjeta);

            })
            this.shadowRoot?.appendChild(button);
        });
    }
    
}


customElements.define('app-container', AppContainer)






