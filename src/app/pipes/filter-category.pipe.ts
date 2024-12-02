import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../servi/api.service';

@Pipe({
  name: 'filterCategory',
  pure: false // Necessário para detectar mudanças
})
export class FilterCategoryPipe implements PipeTransform {
  transform(games: Game[], category: string): Game[] {
    if (!games || !category) return games;
    return games.filter(game => game.genre.toLowerCase() === category.toLowerCase());
  }
}
