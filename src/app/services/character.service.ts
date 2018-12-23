import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { ICharacter, IMovie } from '../app.component';
import data from '../../assets/characters.json';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters = data.characters;

  constructor(private httpService: HttpService) {}

  getCharacters(): ICharacter[] {
    return this.characters.slice();
  }

  getCharacter(url: string): Observable<any> {
    return this.httpService.get(url).pipe(
      map(character => character),
      catchError(err => throwError(err))
    );
  }

  getFilms(urls: string[]): Observable<IMovie[]> {
    const requests = [];

    urls.forEach(url => requests.push(this.httpService.get(url)));

    return forkJoin(requests).pipe(
      map(response => response),
      catchError(err => throwError(err))
    );
  }
}
