import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemonSlayerService {

  private apiUrl = 'https://www.demonslayer-api.com/api/v1/characters?page=1&limit=45';

  constructor(private http: HttpClient) { }

  // Método para buscar todos os personagens
  getAllCharacters(): Observable<any> {
    return this.http.get(this.apiUrl); // Retorna todos os personagens
  }
}
