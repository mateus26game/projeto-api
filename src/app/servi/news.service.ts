import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo a interface de notícia
export interface News {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  main_image: string;
  article_content: string;
  article_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private apiUrl = 'https://www.mmobomb.com/api1/latestnews'; // URL da API

  constructor(private http: HttpClient) {}

  // Função para pegar os itens com paginação
  getItems(page: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}?page=${page}`);
  }
}
