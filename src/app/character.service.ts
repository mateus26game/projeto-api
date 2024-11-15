import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Character {
  name: string;
  image_url: string;
  url: string;
}

interface ApiResponse {
  data: Array<{
    character: Character;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://api.jikan.moe/v4/anime/38000/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
