import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecaComponent } from './rota/header/cabeca.component';
import { UmComponent } from './tela/DetailsPage/um.component';
import { DoisComponent } from './tela/homePage/dois.component';
import { TresComponent } from './tela/ListingPage/tres.component';
import { FooterComponent } from './rota/footer/footer.component';

import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    CabecaComponent,
    UmComponent,
    DoisComponent,
    TresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
