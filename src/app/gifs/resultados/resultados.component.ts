import { Component } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor(private gisfservice:GifsService) { }

  get resultado(){
    return this.gisfservice.resultado
  }

}
