import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertifyService } from "src/app/services/alertify.service";
import { CategoryService } from "src/app/services/category.service";
import { CreateMovieService } from "src/app/services/moviecreate.service";
import { ICategory } from "src/app/types/category";
import { IMovie } from "src/app/types/movies";



@Component({
  selector: "app-movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"],
  providers: [CategoryService, CreateMovieService]
})
export class MovieCreateComponent{
  error: string = '';
  categories: ICategory[] = [];
  receiveForm :IMovie = {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    categoryId: 0,
    detaPublished: 0,
    isPopular: false
  }
  movieForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('.jpeg',[Validators.required]),
    categoryId: new FormControl('',[Validators.required]),
  })

  constructor(
    private categoryService: CategoryService,
    private createMovieService: CreateMovieService,
    private alertifyService: AlertifyService,
    private roterService: Router
  ){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    },
    error => {
      this.error = error
    })
  }

  clearMovieForm(){
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageurl: '',
      categoryId: ''
    })
  }

  createMovie(){

    this.receiveForm.title = this.movieForm.value.title;
    this.receiveForm.description = this.movieForm.value.description;
    this.receiveForm.imageUrl = this.movieForm.value.imageUrl;
    this.receiveForm.categoryId = this.movieForm.value.categoryId;
    
    this.createMovieService.createMovie(this.receiveForm).subscribe(data => {
      this.clearMovieForm();
      this.alertifyService.success('Film Başarıyla Kaydedildi');
      this.roterService.navigate([`movies/${data.id}`])
    },
    error => {
      this.error = error;
    })

  }


}






