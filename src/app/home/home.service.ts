import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Product {
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = "https://fakestoreapi.com/products";
  private categoriesSubject = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {
  }

  fetchData(): void {
    this.http
      .get<Product[]>(this.url)
      .subscribe((response: Product[]) => {
        const categories: string[] = [];

        response.forEach(product => {
          if (product.category && !categories.includes(product.category)) {
            categories.push(product.category);
          }
        });

        this.categoriesSubject.next(categories);
      });
  }

  getCategories(): Observable<string[]> {
    return this.categoriesSubject.asObservable();
  }
}
