import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../../servi/news.service';  // Importando o serviço

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: News[] = [];  // Lista de notícias que será exibida
  page: number = 1; // Controlador de página para a API
  isLoading: boolean = false;  // Controla se os dados estão carregando

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadItems();  // Carrega os primeiros itens ao inicializar o componente
  }

  // Função para carregar mais itens (fazendo a requisição para a API)
  loadItems(): void {
    this.isLoading = true;  // Ativa o estado de carregamento

    this.newsService.getItems(this.page).subscribe(
      (data) => {
        this.items = [...this.items, ...data];  // Concatenando novos itens com os já carregados
        this.page++; // Incrementa a página para carregamento futuro
        this.isLoading = false;  // Desativa o estado de carregamento
      },
      (error) => {
        console.error('Erro ao carregar as notícias', error);
        this.isLoading = false;
      }
    );
  }

  // Função chamada quando o botão "Carregar Mais" é clicado
  loadMore(): void {
    if (!this.isLoading) {
      this.loadItems();  // Chama a função para carregar mais itens
    }
  }
}
