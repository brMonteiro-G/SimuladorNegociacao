export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(parametro) {
        const model = this.template(parametro);
        this.elemento.innerHTML = model;
    }
}
