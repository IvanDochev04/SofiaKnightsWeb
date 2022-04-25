import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/Fixture';

@Component({
  selector: 'app-fixture-item',
  templateUrl: './fixture-item.component.html',
  styleUrls: ['./fixture-item.component.css'],
})
export class FixtureItemComponent implements OnInit {
  @Input() fixture: Fixture;
  constructor() {}

  ngOnInit(): void {}
  checkDate(date) {
    const checkDate: number = new Date(date).getDate();

    let inPast: boolean = false;
    let today: number = Date.now();

    if (checkDate < today) {
      inPast = true;
    }

    return inPast;
  }
}
