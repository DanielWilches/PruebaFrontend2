import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modulos de peticion de recursos
import { HttpClientModule } from '@angular/common/http';
// rutas 
import { AppRoutingModule } from './app-routing.module';
// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkingComponent } from './components/working/working.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchComponent } from './components/search/search.component';
// pipes
import { CapitalizaPipe } from './pipes/capitaliza.pipe';
// formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkingComponent,
    CardsComponent,
    SearchComponent,
    CapitalizaPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ClipboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
