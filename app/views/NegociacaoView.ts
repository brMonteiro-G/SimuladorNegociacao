import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoView{
    private elemento:HTMLElement

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }

    template(negociacoes:Negociacoes):string{
        return  `
        <table class=" table table-hover table-bordered mt-2">
        <thead>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
        </thead>
        <tbody>

        ${negociacoes.lista().map(negociacao => {
            return `<tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                   </tr>`
        }).join('')} <!--método de concatenação-->
      
        
        </tbody>
       </table>
       
        
        `
    }

    update(negociacoes:Negociacoes):string{

        const model = this.template(negociacoes)

        return this.elemento.innerHTML = model

    }
}