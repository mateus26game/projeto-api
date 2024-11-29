import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service'; // Certifique-se do caminho correto
import { WishlistService } from '../../servi/wishlist-service.service'; // Novo serviço

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {
  games: Game[] = []; // Todos os jogos carregados da API
  filteredGames: Game[] = []; // Jogos visíveis (após a pesquisa)
  searchQuery: string = ''; // Termo de busca
  isLoading: boolean = false; // Indicador de carregamento
  errorMessage: string = ''; // Mensagem de erro

  constructor(private apiService: ApiService, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.loadGames(); // Carrega os jogos ao inicializar o componente
  }

  // Carrega os jogos da API
  loadGames(): void {
    this.isLoading = true; // Ativa o indicador de carregamento
    this.errorMessage = ''; // Reseta mensagens de erro

    this.apiService.getGames().subscribe(
      (data) => {
        this.games = data; // Salva todos os jogos
        this.filteredGames = [...this.games]; // Inicialmente, todos são visíveis
        this.isLoading = false; // Finaliza o carregamento
      },
      (error) => {
        console.error('Erro ao carregar jogos:', error);
        this.errorMessage = 'Erro ao carregar jogos. Tente novamente mais tarde.';
        this.isLoading = false; // Finaliza o carregamento mesmo em erro
      }
    );
  }

  // Filtra os jogos com base no termo de busca
  filterGames(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredGames = this.games.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
  }

  // Adicionar/Remover da Lista de Desejos
  toggleWishlist(gameId: number): void {
    if (this.wishlistService.isInWishlist(gameId)) {
      this.wishlistService.removeFromWishlist(gameId);
    } else {
      this.wishlistService.addToWishlist(gameId);
    }
  }

  // Verificar se o jogo está na Lista de Desejos
  isInWishlist(gameId: number): boolean {
    return this.wishlistService.isInWishlist(gameId);
  }
}
