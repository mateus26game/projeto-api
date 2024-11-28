import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[] = []; // Armazena os jogos para os cards

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Pegando os jogos para os cards
    this.apiService.getGames().subscribe((data) => {
      this.games = data.slice(0, 10); // Limita a quantidade de jogos para os cards
    });
  }
}
