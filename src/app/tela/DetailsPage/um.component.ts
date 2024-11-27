import { Component, OnInit } from '@angular/core';
import { DemonSlayerService } from '../../demon-slayer.service';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrl: './um.component.css'
})
export class UmComponent implements OnInit {
  characters: any[] = []; // Lista de personagens
  currentCharacterIndex: number = 0; // Índice do personagem atual

  constructor(private demonSlayerService: DemonSlayerService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.demonSlayerService.getAllCharacters().subscribe(response => {
      this.characters = response.content;
    });
  }

  nextCharacter(): void {
    if (this.currentCharacterIndex < this.characters.length - 1) {
      this.currentCharacterIndex++;
    }
  }

  previousCharacter(): void {
    if (this.currentCharacterIndex > 0) {
      this.currentCharacterIndex--;
    }
  }
}
