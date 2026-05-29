import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BanderasResponse } from '../interface/bandera.interface';

@Injectable({
  providedIn: 'root',
})
export class BanderaService {

  private http = inject(HttpClient);

  getBandera() {
    return this.http.get<BanderasResponse[]>('https://restcountries.com/v3.1/all');
  }
}
