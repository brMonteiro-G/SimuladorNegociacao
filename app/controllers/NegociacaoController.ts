import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicionar(): void {

        const negociacao = this.convertsorTiposNegociacao;
        console.log(negociacao);
        this.limparformulario();


    }

    convertsorTiposNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        //O input.value do html vai devolver uma data no formato 1111-11-11
        //Porém o tipo Date só reconhece datas no formato 1111,11,11
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);


    }

    limparformulario(): void{

        this.inputData.value='';
        this.inputQuantidade.value='';
        this.inputValor.value='';
        //como o ts já sabe que inputData é um elementoHTML, assim, já podemos chamar diretamente um método nele 
        this.inputData.focus();


    }




}