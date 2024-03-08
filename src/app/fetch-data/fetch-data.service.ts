import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
  // Define the properties of a product
  id: number,
  title: string,
  description: string,
  image: File,
  category: string
}

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private url = 'https://fakestoreapi.com/products';
  private allProductsSubject = new BehaviorSubject<any[]>([]);
  private categoriesSubject = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  fetchData(): void {
    this.http.get<Product[]>(this.url).subscribe((response: Product[]) => {
      const categories: string[] = [];

      response.forEach(product => {
        if (product.category && !categories.includes(product.category)) {
          categories.push(product.category);
        }
      });

      this.allProductsSubject.next(response);
      this.categoriesSubject.next(categories);
    });
  }

  getAllProducts(): BehaviorSubject<any[]> {
    return this.allProductsSubject;
  }

  getCategories(): Observable<string[]> {
    return this.categoriesSubject.asObservable();
  }
}
