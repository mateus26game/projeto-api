import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  private wishlistKey = 'wishlist';

  // Retorna os jogos na lista de desejos
  getWishlist(): number[] {
    const stored = localStorage.getItem(this.wishlistKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Adiciona um jogo à lista de desejos
  addToWishlist(gameId: number): void {
    const wishlist = this.getWishlist();
    if (!wishlist.includes(gameId)) {
      wishlist.push(gameId);
      localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }
  }

  // Remove um jogo da lista de desejos
  removeFromWishlist(gameId: number): void {
    const wishlist = this.getWishlist().filter(id => id !== gameId);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  // Verifica se um jogo está na lista de desejos
  isInWishlist(gameId: number): boolean {
    return this.getWishlist().includes(gameId);
  }
}
