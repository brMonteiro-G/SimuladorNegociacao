import { NegociacaoController } from "./controllers/NegociacaoController.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event=>{
    
    controller.adicionar();
    event.preventDefault();
});

//tudo que pegamos como do input do form vem como string -> é correto definir como HTMLInputElement
//Colocar a configuração no tsConfig.json no implicitAny 