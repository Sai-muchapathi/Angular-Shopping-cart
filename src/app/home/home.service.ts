import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<any> {
    return this.http.get(this.url);
  }
}
