import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css'],
})
export class TresComponent implements OnInit {
  characters: any[] = [];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((response) => {
      this.characters = response.data;
    });
  }

  // Função para rolar para a esquerda
  scrollLeft(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= 300; // Desloca 300px para a esquerda
    }
  }

  // Função para rolar para a direita
  scrollRight(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += 300; // Desloca 300px para a direita
    }
  }
}
