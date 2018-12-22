import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { ICharacter } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: { name: string; url: string }[] = [
    {
      name: "Luke Skywalker",
      url: "https://swapi.co/api/people/1/"
    },
    {
      name: "Darth Vader",
      url: "https://swapi.co/api/people/4"
    },
    {
      name: "Obi-wan Kenobi",
      url: "https://swapi.co/api/people/unknown/"
    },
    {
      name: "R2-D2",
      url: "https://swapi.co/api/people/3/"
    }
  ];

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

  getFilms(urlsArr: string[]): Observable<{ title: string; release_date: string }[]> {
    const obsArr = [];
    urlsArr.forEach(url => obsArr.push(this.httpService.get(url)));
    return forkJoin(obsArr).pipe(
      map(response => response),
      catchError(err => throwError(err))
    );
  }
}
