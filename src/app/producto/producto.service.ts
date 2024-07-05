import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiURL = 'http://localhost:8092/producto';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllProducto(): Observable<Array<Producto>| any>{
    return this.httpClient.get(`${this.apiURL}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createProducto(producto:Producto): Observable<Producto | any> {
  
    return this.httpClient.post(`${this.apiURL}`, JSON.stringify(producto), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  findProducto(idProducto:string): Observable<Producto | any> {
  
    return this.httpClient.get(`${this.apiURL}/${idProducto}` )
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  updateProducto(idProducto:string,producto:Producto): Observable<Producto | any> {
    return this.httpClient.patch(`${this.apiURL}/${idProducto}`, JSON.stringify(producto), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  deleteProducto(idProducto:string){
    return this.httpClient.delete(`${this.apiURL}/${idProducto}`, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
