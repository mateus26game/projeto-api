import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Armazena os jogos para o carrossel
  games: Game[] = [];
  activeIndex = 0; // Índice do slide ativo

  // URLs das imagens para o carrossel
  imageUrls: string[] = [
    'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_UpgradetoDigitalDeluxeEdition_NaughtyDogLLC_AddOn_S1_2560x1440-d0195796f9b15e41ee69393bb95c4edc',
    'https://images5.alphacoders.com/917/917971.jpg',
    'https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1_NetherRealmStudios_S3_2560x1440-bea2296b499ceecfc1dc1a91ab0d9a36'
  ];

  // Armazena os jogos de cada categoria
  pixelArtGames: Game[] = [];
  zombieGames: Game[] = [];
  mmorpgGames: Game[] = [];
  animeGames: Game[] = [];

  // URLs das categorias
  categoryUrls = {
    pixelArt: 'https://www.mmobomb.com/api1/filter?tag=pvp',
    zombie: 'https://www.mmobomb.com/api1/filter?tag=zombie.survival',
    mmorpg: 'https://www.mmobomb.com/api1/filter?tag=mmorpg.mmo',
    anime: 'https://www.mmobomb.com/api1/filter?tag=anime'
  };

  totalItems = 0; // Total de itens para o controle do carrossel

  // Índices para cada categoria de catálogo
  activePixelArtIndex = 0;
  activeZombieIndex = 0;
  activeMMORPGIndex = 0;
  activeAnimeIndex = 0;

  // Limite de navegação para cada categoria
  pixelArtLimit: boolean = false;
  zombieLimit: boolean = false;
  mmorpgLimit: boolean = false;
  animeLimit: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Carregar jogos para o carrossel
    this.apiService.getGames().subscribe((data) => {
      this.games = data.slice(0, 10); // Limita a quantidade de jogos para os cards
    });

    // Carregar jogos por categoria
    this.loadGamesByCategory(this.categoryUrls.pixelArt, 'pixelArt');
    this.loadGamesByCategory(this.categoryUrls.zombie, 'zombie');
    this.loadGamesByCategory(this.categoryUrls.mmorpg, 'mmorpg');
    this.loadGamesByCategory(this.categoryUrls.anime, 'anime');
  }

  // Função para avançar para o próximo slide do carrossel
  nextSlide() {
    if (this.activeIndex < this.imageUrls.length - 1) {
      this.activeIndex++;
    }
  }

  // Função para voltar para o slide anterior do carrossel
  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  // Função para carregar jogos por categoria
  loadGamesByCategory(url: string, category: string): void {
    this.apiService.getGamesByCategory(url).subscribe((data) => {
      const games = data.slice(0, 300); // Limita a quantidade de jogos para cada categoria
      if (category === 'pixelArt') {
        this.pixelArtGames = games;
        this.pixelArtLimit = games.length <= 1;
      } else if (category === 'zombie') {
        this.zombieGames = games;
        this.zombieLimit = games.length <= 1;
      } else if (category === 'mmorpg') {
        this.mmorpgGames = games;
        this.mmorpgLimit = games.length <= 1;
      } else if (category === 'anime') {
        this.animeGames = games;
        this.animeLimit = games.length <= 1;
      }

      // Atualiza o número total de itens após carregar os dados
      this.totalItems = this.pixelArtGames.length + this.zombieGames.length + this.mmorpgGames.length + this.animeGames.length;
    });
  }

  // Estilo para aplicar o "transform" nos slides do carrossel
  getTransformStyle(category: string): string {
    if (category === 'pixelArt') {
      return `translateX(-${this.activePixelArtIndex * 100}%)`;
    } else if (category === 'zombie') {
      return `translateX(-${this.activeZombieIndex * 100}%)`;
    } else if (category === 'mmorpg') {
      return `translateX(-${this.activeMMORPGIndex * 100}%)`;
    } else if (category === 'anime') {
      return `translateX(-${this.activeAnimeIndex * 100}%)`;
    }
    return '';
  }

  // Função para mover o slide de cada categoria
  moveSlide(direction: string, category: string): void {
    if (direction === 'left') {
      // Impede movimento para índices negativos
      if (category === 'pixelArt' && this.activePixelArtIndex > 0) {
        this.activePixelArtIndex--;
      } else if (category === 'zombie' && this.activeZombieIndex > 0) {
        this.activeZombieIndex--;
      } else if (category === 'mmorpg' && this.activeMMORPGIndex > 0) {
        this.activeMMORPGIndex--;
      } else if (category === 'anime' && this.activeAnimeIndex > 0) {
        this.activeAnimeIndex--;
      }
    } else if (direction === 'right') {
      // Impede movimento para além do último índice
      if (category === 'pixelArt' && this.activePixelArtIndex < this.pixelArtGames.length - 1 && !this.pixelArtLimit) {
        this.activePixelArtIndex++;
      } else if (category === 'zombie' && this.activeZombieIndex < this.zombieGames.length - 1 && !this.zombieLimit) {
        this.activeZombieIndex++;
      } else if (category === 'mmorpg' && this.activeMMORPGIndex < this.mmorpgGames.length - 1 && !this.mmorpgLimit) {
        this.activeMMORPGIndex++;
      } else if (category === 'anime' && this.activeAnimeIndex < this.animeGames.length - 1 && !this.animeLimit) {
        this.activeAnimeIndex++;
      }
    }
  }
}
