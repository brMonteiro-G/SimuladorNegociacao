import { View } from "./View.js"

export class MensagemView extends View<string>{


    template(mensagem:string): string{
        return `
        <p class="alert alert-info" >${mensagem}</p>
        `
    }

    update(mensagem:string): void{
        const model = this.template(mensagem)
        this.elemento.innerHTML = model
    }


}