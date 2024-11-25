import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css'],
})
export class TresComponent implements OnInit, AfterViewInit {
  characters: any[] = []; // Lista de personagens carregada do serviço
  selectedCharacter: any = null; // Armazena o personagem selecionado
  screenWidth: number = 0; // Largura da tela para cálculo dinâmico

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    // Carrega os personagens do serviço
    this.characterService.getCharacters().subscribe((response) => {
      this.characters = response.data;
    });
  }

  // Função que será executada após a visualização ser inicializada, acessando o objeto window
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth; // Atribui a largura da tela apenas no navegador
    }
  }

  // Método para selecionar um personagem
  selectCharacter(character: any): void {
    this.selectedCharacter = character; // Atualiza o personagem selecionado
    console.log('Personagem selecionado:', character);
  }

  // Método para rolar para a esquerda
  scrollLeft(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= this.screenWidth; // Rola uma "página" de personagens
    }
  }

  // Método para rolar para a direita
  scrollRight(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += this.screenWidth; // Rola uma "página" de personagens
    }
  }

  // Atualiza o tamanho da tela quando redimensionada
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }
}
