import { View } from "./View.js";
export class NegociacaoView extends View {
    template(negociacoes) {
        return `
        <table class=" table table-hover table-bordered mt-2">
        <thead>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
        </thead>
        <tbody>

        ${negociacoes.lista().map(negociacao => {
            return `<tr>
                    <td>${this.dataTransform(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                   </tr>`;
        }).join('')} <!--método de concatenação-->
      
        
        </tbody>
       </table>
       
        
        `;
    }
    update(negociacoes) {
        const model = this.template(negociacoes);
        return this.elemento.innerHTML = model;
    }
    dataTransform(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
