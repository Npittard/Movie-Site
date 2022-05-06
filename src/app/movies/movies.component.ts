import { Component, OnInit } from '@angular/core';
import {MOVIES} from './movieObject'

@Component({
  selector: 'app-movies',
  // templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  template:`
  <div class="moviesContainer">
    <div class="movieListContainer">
      <ul class="movieList">
        <li class="movieItem" *ngFor="let movie of movies">
          <div class="movieCover">
            <a href="{{movie.link}}" target="_blank" ><img src="{{movie.cover}}" class="cover" alt=""></a>
          </div>
          <div class="movieInformation">
            <div class="movieTitle">{{movie.title}}</div>
            <div class="movieSynopsis">{{movie.synopsis}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
`,
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;


  constructor() { }

  ngOnInit(): void {
  }

}
