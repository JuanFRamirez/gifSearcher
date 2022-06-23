import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  constructor(private gifservive:GifsService) {}

  ngOnInit(): void {}
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length > 0)
    {
      this.gifservive.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = '';
    }
  }
}
