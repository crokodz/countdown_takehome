import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import * as Product from './data/product.json';


@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private _http: HttpClient) { }

    getProductListFromService(pageNum = 1, limit = 20): Observable<any> {
        return of(Product).pipe(delay(1000));
    }
}