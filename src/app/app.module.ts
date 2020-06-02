import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TopScoreComponent } from './top-score/top-score.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    JugadoresComponent,
    TopScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
