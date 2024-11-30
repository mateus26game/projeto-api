import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service';
import { WishlistService } from '../../servi/wishlist-service.service';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {
  games: Game[] = []; 
  filteredGames: Game[] = []; 
  searchQuery: string = ''; 
  isLoading: boolean = false; 
  errorMessage: string = ''; 
  showFavorites: boolean = false; 

  constructor(private apiService: ApiService, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  
  loadGames(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getGames().subscribe(
      (data) => {
        this.games = data; 
        this.filteredGames = [...this.games]; 
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar jogos:', error);
        this.errorMessage = 'Erro ao carregar jogos. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    );
  }

  filterGames(): void {
    const query = this.searchQuery.toLowerCase().trim();

    this.filteredGames = this.games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(query);
      const matchesFavorites = this.showFavorites
        ? this.wishlistService.isInWishlist(game.id)
        : true;

      return matchesSearch && matchesFavorites;
    });
  }

  toggleFavoritesView(): void {
    this.showFavorites = !this.showFavorites;
    this.filterGames(); 
  }

  toggleWishlist(gameId: number): void {
    if (this.wishlistService.isInWishlist(gameId)) {
      this.wishlistService.removeFromWishlist(gameId);
    } else {
      this.wishlistService.addToWishlist(gameId);
    }

    if (this.showFavorites) {
      this.filterGames(); 
    }
  }

  isInWishlist(gameId: number): boolean {
    return this.wishlistService.isInWishlist(gameId);
  }
}
