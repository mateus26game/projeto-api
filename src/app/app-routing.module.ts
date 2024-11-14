import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecaComponent } from './rota/header/cabeca.component';
import { UmComponent } from './tela/DetailsPage/um.component';
import { DoisComponent } from './tela/homePage/dois.component';
import { TresComponent } from './tela/ListingPage/tres.component';

const routes: Routes = [
  { path: '', component: CabecaComponent }, // Rota inicial
  { path: 'tela-um', component: UmComponent },  // Rota para Tela Um
  { path: 'tela-dois', component:  DoisComponent},
  {path:'tela-tres', component: TresComponent} // Rota para Tela Dois
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
