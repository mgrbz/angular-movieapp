import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";
import { IMovie } from "src/app/types/movies";



@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
  providers: [MoviesService]
})
export class MovieDetailsComponent{
  error: string = '';
  movie: IMovie | null = null;
  constructor(private movieService: MoviesService ,private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(param => {
      let movieId = param['movieId'];

      this.movieService.getMovieById(movieId).subscribe(data => {
        this.movie = data
      },
      error=> {
        this.error = error;
      })

    })
  }


}






