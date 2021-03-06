import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent {
  @Input() movie: { title: string; release_date: string };
}
