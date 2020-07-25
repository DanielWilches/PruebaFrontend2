import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkingComponent } from './components/working/working.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchComponent } from './components/search/search.component';
import { CapitalizaPipe } from './pipes/capitaliza.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkingComponent,
    CardsComponent,
    SearchComponent,
    CapitalizaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
