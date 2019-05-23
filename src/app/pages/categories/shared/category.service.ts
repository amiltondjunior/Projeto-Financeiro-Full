import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from "rxjs";
import {map, catchError, flatMap} from "rxjs/operators";

import {Category} from "./category.model";
import { CategoriesModule } from '../categories.module';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private apiPath: string ='api/categories'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }
 //PRIVATE METHODS

    getById(id: number): Observable<Category>{
    const url = `${this.apiPath}/${id}`;
    
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
}
  //Private Métodos

  private jsonDataToCategories(jsonData: any[]): Category[]{
  const categories: Category[] = [];
  jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }
  private jsonDataToCategory(jsonData: any): Category{
    return jsonData as Category;
  }
  
  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO =>",error);
    return throwError(error); 
}
  

}
