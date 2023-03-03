import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarComponent } from './star/star.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { InteressesComponent } from './interesses/interesses.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciasComponent,
    ProjetosComponent,
    EscolaridadeComponent,
    LinguagensComponent,
    NavbarComponent,
    StarComponent,
    StarRatingComponent,
    InteressesComponent,
    CertificacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
