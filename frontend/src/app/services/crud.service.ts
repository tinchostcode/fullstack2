import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import {HttpClient, HttpHandler, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string='http://localhost:9000/api/products';
  httpHeaders = new HttpHeaders().set('content-type','application/json')


  constructor(private httpclient:HttpClient) { }

  //METODOS

  getProducts(){
    return this.httpclient.get(`${this.REST_API}`)
  }
}
