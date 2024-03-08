import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
interface Product {
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<any> {
    return this.http
      .get<Product[]>(this.url)
      .pipe(
        map((response: any[]) => {
          const categories: string[] = [];
          response.forEach(product => {
            if (product.category && !categories.includes(product.category)) {
              categories.push(product.category);
            }
          });

          console.log(categories);
          return categories;
        })
      );
  }
}
