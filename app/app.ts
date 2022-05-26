import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { Negociacoes } from "./models/Negociacoes.js";
import { NegociacaoView } from "./views/NegociacaoView.js";


const controller = new NegociacaoController();
const view = new NegociacaoView('#negociacaoView');
const negociacoes = new Negociacoes();

const form = document.querySelector('.form');
form.addEventListener('submit', event=>{
    
    controller.adicionar();
    event.preventDefault();


});


