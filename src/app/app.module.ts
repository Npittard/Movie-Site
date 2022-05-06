import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieFooterComponent } from './movie-footer/movie-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHeaderComponent,
    MoviesComponent,
    MovieFooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
