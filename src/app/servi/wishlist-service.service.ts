import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistKey = 'wishlist';

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getWishlist(): number[] {
    if (this.isLocalStorageAvailable()) {
      const stored = localStorage.getItem(this.wishlistKey);
      return stored ? JSON.parse(stored) : [];
    }
    return []; // Retorna uma lista vazia se localStorage não estiver disponível
  }

  addToWishlist(gameId: number): void {
    if (this.isLocalStorageAvailable()) {
      const wishlist = this.getWishlist();
      if (!wishlist.includes(gameId)) {
        wishlist.push(gameId);
        localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
      }
    }
  }

  removeFromWishlist(gameId: number): void {
    if (this.isLocalStorageAvailable()) {
      const wishlist = this.getWishlist().filter(id => id !== gameId);
      localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }
  }

  isInWishlist(gameId: number): boolean {
    if (this.isLocalStorageAvailable()) {
      return this.getWishlist().includes(gameId);
    }
    return false; // Retorna falso se localStorage não estiver disponível
  }
}
