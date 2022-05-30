import { NegociacaoController } from "./controllers/NegociacaoController.js";



const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event=>{
    
    controller.adicionar();
    event.preventDefault();


});


