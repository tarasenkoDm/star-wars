import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICharacter } from '../../../app.component';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {
  @Input() character: ICharacter;
  @Input() index: number;
  @Input() activeCharacterIndex: number;
  @Output() clickedElem: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clickedElem.emit(this.index);
  }
}
