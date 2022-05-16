import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ICategory } from "../types/category";



@Injectable()
export class CategoryService{
  
  url: string = 'http://localhost:3000/categories'

  constructor(private http: HttpClient){}

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url).pipe(
      tap(data => console.log('getCategories Services Data: ', data)),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    return throwError('Categoryler getirilirken Hata oluştu');
  }

}