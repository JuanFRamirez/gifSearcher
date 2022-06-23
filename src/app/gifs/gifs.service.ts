import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from './interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'b0VSibBKDzXr43omOgLw3lyxR1ubp1PW';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historial: Array<string> = [];

  public resultado: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('resultado')) {
      this.resultado = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscarGifs(valor: string = '') {
    valor = valor.trim().toLowerCase();
    if (!this._historial.includes(valor)) {
      this._historial.unshift(valor);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', valor)
      .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((res) => {
        this.resultado = res.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultado));
      });
  }
}
