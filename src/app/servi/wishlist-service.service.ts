import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  private wishlistKey = 'wishlist';

  getWishlist(): number[] {
    const stored = localStorage.getItem(this.wishlistKey);
    return stored ? JSON.parse(stored) : [];
  }

  addToWishlist(gameId: number): void {
    const wishlist = this.getWishlist();
    if (!wishlist.includes(gameId)) {
      wishlist.push(gameId);
      localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }
  }

  removeFromWishlist(gameId: number): void {
    const wishlist = this.getWishlist().filter(id => id !== gameId);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  isInWishlist(gameId: number): boolean {
    return this.getWishlist().includes(gameId);
  }
}
