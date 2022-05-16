import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/app-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieCreateComponent } from './components/movie-create/movie-create.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCreateComponent,
    MovieDetailsComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
