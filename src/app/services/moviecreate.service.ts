import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IMovie } from "../types/movies";




@Injectable()
export class CreateMovieService{

  url: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient){

  }

  createMovie(movie: IMovie): Observable<IMovie>{
    return this.http.post<IMovie>(this.url, movie).pipe(
      tap(data => console.log('crateMovie data : ', data)),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    return throwError('Film kaydedilemedi')
  }

}

