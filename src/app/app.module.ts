import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Paginas/home/home.component';
import { ListaComponent } from './Paginas/lista/lista.component';
import { DetalisComponent } from './Paginas/detalis/detalis.component';
import { FooterComponent } from './Componetes/footer/footer.component';
import { NavbarComponent } from './Componetes/navbar/navbar.component';
import { HttpClientModule,provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    DetalisComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
