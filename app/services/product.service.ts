import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {ProductModelServer, ServerResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  //this is to fetch all products from backend server
  getAllproducts(numberofResults=10) : Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.SERVER_URL + '/products',{
      params : {
        limit:numberofResults.toString()
      }
    });
  }

  //get single product from server
  getSingleProduct(id:number): Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

  //get products from one category
  getProductsFromCategory(catName : string) : Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
  }
}
