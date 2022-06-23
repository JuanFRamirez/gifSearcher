import { Component } from '@angular/core';
import { GifsService } from '../../gifs/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor(private gifservice:GifsService) { }

  get historial(){
    return this.gifservice.historial
  }

  buscar(valor:string){
    this.gifservice.buscarGifs(valor)
  }

}
