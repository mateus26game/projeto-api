import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Módulo de HTTP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { CabecaComponent } from './rota/header/cabeca.component';
import { UmComponent } from './tela/DetailsPage/um.component';
import { DoisComponent } from './tela/homePage/dois.component';
import { TresComponent } from './tela/ListingPage/tres.component';
import { FooterComponent } from './rota/footer/footer.component';
import { DemonSlayerService } from './demon-slayer.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecaComponent,
    UmComponent,
    DoisComponent,
    TresComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), // Adicione o suporte a SSR
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration(),
    DemonSlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
