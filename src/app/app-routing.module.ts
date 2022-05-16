import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { MovieCreateComponent } from "./components/movie-create/movie-create.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MoviesComponent } from "./components/movies/movies.component";



const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movies/create', component: MovieCreateComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}






