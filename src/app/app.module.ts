import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-list/character-item/character-item.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { SwHttpInterceptor } from './services/sw-http-interceptor';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesItemComponent } from './components/movies-list/movies-item/movies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterItemComponent,
    SpinnerComponent,
    ErrorMessageComponent,
    MoviesListComponent,
    MoviesItemComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SwHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
