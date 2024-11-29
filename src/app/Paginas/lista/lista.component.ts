import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../../servi/news.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  items: News[] = []; 
  visibleItems: News[] = [];
  isLoading: boolean = false; 
  itemsToShow: number = 20; 
  increment: number = 10; 

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadInitialItems(); 
  }

  
  loadInitialItems(): void {
    this.isLoading = true;

    this.newsService.getAllItems().subscribe(
      (data) => {
        this.items = data;
        this.visibleItems = this.items.slice(0, this.itemsToShow); 
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar as notícias:', error);
        this.isLoading = false;
      }
    );
  }

  
  loadMoreItems(): void {
    const nextIndex = this.visibleItems.length + this.increment;
    this.visibleItems = this.items.slice(0, nextIndex);
  }
}
