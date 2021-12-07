import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, enableProdMode } from '@angular/core';

@Component({
 selector: 'app-heroe',
 templateUrl: 'heroe.component.html'
})
export class HeroComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

   get capitalizado():string{
       return this.nombre.toUpperCase();
   }
    
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): string{
        return this.nombre = 'Spiderman';
    }

    cambiarEdad(): number{
        return this.edad = 20;
    }
}