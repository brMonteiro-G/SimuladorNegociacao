export abstract class View<T>{
     
    //private elemento:HTMLElement
      protected elemento:HTMLElement
    
    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }


    protected abstract template(parametro: T): string

     update(parametro: T):void{
        const model = this.template(parametro)
        this.elemento.innerHTML = model
    }

}