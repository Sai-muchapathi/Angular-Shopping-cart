import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FetchDataService} from "./fetch-data/fetch-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'practice';

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    // calling fetchData to get the data ready before main components load
    this.fetchDataService.fetchData();
  }
}
