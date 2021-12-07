import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Batman','Wonder Woman','Superman','Flash'];
  heroeBorrado: string = '';

  borrarHeroe(){
   const heroeborrado = this.heroes.shift() || '' ;
   this.heroeBorrado = heroeborrado;
  }

  
}
