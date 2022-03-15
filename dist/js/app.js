import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { Negociacoes } from "./models/Negociacoes.js";
const controller = new NegociacaoController();
const negociacoes = new Negociacoes();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    controller.adicionar();
    event.preventDefault();
});
