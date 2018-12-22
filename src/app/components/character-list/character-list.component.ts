import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICharacter } from '../../app.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  @Input() characters: ICharacter[];
  @Output() activeCharacter: EventEmitter<number> = new EventEmitter();
  activeCharacterIndex: number;

  onCharacterClick(index: number) {
    this.activeCharacterIndex = index;
    this.activeCharacter.emit(index);
  }
}
