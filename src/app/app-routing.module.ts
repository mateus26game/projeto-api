import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { DetalisComponent } from './Paginas/detalis/detalis.component';
import { ListaComponent } from './Paginas/lista/lista.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "details", component: DetalisComponent},
  {path: "lista", component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
