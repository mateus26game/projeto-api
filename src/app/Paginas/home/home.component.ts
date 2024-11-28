import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[] = []; // Armazena os jogos para os cards

  activeIndex = 0;



  slides = [
    { title: 'First slide', content: 'First slide content' },
    { title: 'Second slide', content: 'Second slide content' },
    { title: 'Third slide', content: 'Third slide content' }
  ];


  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  // Função para ir para o slide anterior
  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Pegando os jogos para os cards
    this.apiService.getGames().subscribe((data) => {
      this.games = data.slice(0, 10); // Limita a quantidade de jogos para os cards
    });
  }
}
