import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TacticList } from 'src/app/models/TacticList';

@Component({
  selector: 'app-tactic-item',
  templateUrl: './tactic-item.component.html',
  styleUrls: ['./tactic-item.component.css']
})
export class TacticItemComponent implements OnInit {

  @Input() tactic: TacticList;
  @Output() onClick: EventEmitter<TacticList> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onTacticClick(tactic) {
    console.log("click")
    this.onClick.emit(tactic);
  }
}
