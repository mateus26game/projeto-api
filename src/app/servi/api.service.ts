import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  profile_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = ' https://www.mmobomb.com/api1/games';

  constructor(private http: HttpClient) {}

  // Método para pegar os jogos de uma categoria específica
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }
}
