import { Component, Input } from '@angular/core';

import { IMovie } from '../../app.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  @Input() movies: IMovie[];
}
