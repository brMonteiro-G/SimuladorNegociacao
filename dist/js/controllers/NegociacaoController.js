import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MenssagemView.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView('#negociacaoView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.conversorTiposNegociacao();
        //negociacao.data.setDate(15); não funciona mais com a programação defensiva 
        this.negociacoes.adiciona(negociacao);
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
        console.log(this.negociacoes.lista());
        this.limparformulario();
    }
    conversorTiposNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        //O input.value do html vai devolver uma data no formato 1111-11-11
        //Porém o tipo Date só reconhece datas no formato 1111,11,11
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparformulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        //como o ts já sabe que inputData é um elementoHTML, assim, já podemos chamar diretamente um método nele 
        this.inputData.focus();
    }
}
