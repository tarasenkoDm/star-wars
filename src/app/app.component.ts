import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { SpinnerService } from './services/spinner.service';
import { CharacterService } from './services/character.service';

export interface ICharacter {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isActiveSpinner = false;
  characters: ICharacter[];
  films = [];

  constructor(
    private spinnerService: SpinnerService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
    this.spinnerService.getSpinnerStatus().subscribe((status: boolean) => {
      this.isActiveSpinner = status;
    });
  }

  requestMovies(index) {
    this.characterService
      .getCharacter(this.characters[index].url)
      .pipe(mergeMap(info => this.characterService.getFilms(info['films'])))
      .subscribe(films => (this.films = films), err => (this.films = []));
  }
}
