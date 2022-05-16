import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";


import { IMovie } from "../types/movies";




@Injectable()
export class MoviesService{
  url: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient){}

  getMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url).pipe(
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

