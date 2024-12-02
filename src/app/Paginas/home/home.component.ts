import { Component, OnInit } from '@angular/core';
import { ApiService, Game } from '../../servi/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[] = []; 
  categories: string[] = ['Action', 'Adventure', 'RPG', 'Shooter'];
  selectedCategory: string = '';


  activeIndex = 0;


  imageUrls: string[] = [
    'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_UpgradetoDigitalDeluxeEdition_NaughtyDogLLC_AddOn_S1_2560x1440-d0195796f9b15e41ee69393bb95c4edc',
    'https://images5.alphacoders.com/917/917971.jpg',
    'https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1_NetherRealmStudios_S3_2560x1440-bea2296b499ceecfc1dc1a91ab0d9a36'
  ];

 
  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }

  
  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  
    this.apiService.getGames().subscribe((data) => {
      this.games = data.slice(0, 20); 
    });
  }
}
