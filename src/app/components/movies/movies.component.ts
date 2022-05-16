import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "src/app/services/alertify.service";
import { MoviesService } from "src/app/services/movies.service";
import { IMovie } from "src/app/types/movies";



@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
  providers: [MoviesService]
})
export class MoviesComponent{
  error: string | null = null;
  movies: IMovie[] = [];
  filteredMovies: IMovie[] = [];
  filterText: string = '';
  title: string = 'Film Listesi';

  constructor(
    private alertifyService: AlertifyService, 
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(param => {
      let categoryId = param['categoryId'];

      this.movieService.getMovies(categoryId).subscribe(data => {
        this.movies = data;
        this.filteredMovies = data;
      },
      error => {
        this.error = error;
      });

    })

  }

  onInputChange(){
    this.filteredMovies = this.filterText ? 
      this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 ||
                                  movie.description.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1) : 
                                  this.movies;
  }

  addToList($event: any){
    if($event?.target.classList.contains('btn-primary')){
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertifyService.success('Listeye Eklendi');
    } else if ($event.target.classList.contains('btn-danger')){

      $event.target.innerText = 'Listeye Ekle';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertifyService.warning('Listeden Çıkarılı');

    }
  }

}






