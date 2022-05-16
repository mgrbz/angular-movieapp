import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";


import { IMovie } from "../types/movies";




@Injectable()
export class MoviesService{
  url: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient){}

  getMovies(categoryId: string): Observable<IMovie[]>{

    let newUrl = categoryId ? `${this.url}?categoryId=${categoryId}`: this.url

    return this.http.get<IMovie[]>(newUrl).pipe(
      tap(data => console.log('getMovies service data :', data)),
      catchError(this.handleError)
    )
  }

  getMoviesById(movieId: number){
    let newUrl = `${this.url}/${movieId}`;

    return this.http.get(newUrl).pipe(
      tap(data => console.log('getMovieById service data: ', data)),
      catchError(this.handleError)
    )

  }

  handleError(error: HttpErrorResponse){
    return throwError('MOvie yada Movieler getirilemedi');
  }

}

