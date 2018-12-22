import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {
  @Input() character: { name: string; url: string };
  @Input() index: number;
  @Input() activeCharacterIndex: number;
  @Output() clickedElem: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onCharacterClicked() {
    this.clickedElem.emit(this.index);
  }
}
