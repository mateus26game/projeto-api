import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // Usa as declarações do AppModule
    ServerModule,
  ],
  bootstrap: [AppComponent], // O AppComponent é inicializado apenas no servidor
})
export class AppServerModule {}
