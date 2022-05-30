import { View } from "./View.js";
export class MensagemView extends View {
    template(mensagem) {
        return `
        <p class="alert alert-info" >${mensagem}</p>
        `;
    }
    update(mensagem) {
        const model = this.template(mensagem);
        this.elemento.innerHTML = model;
    }
}
