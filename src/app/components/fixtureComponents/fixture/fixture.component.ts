import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/Fixture';
import { FixtureService } from 'src/app/services/fixture.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
})
export class FixtureComponent implements OnInit {
  fixtures: Fixture[] = [];
  constructor(private fixtureService: FixtureService) {}

  ngOnInit(): void {
    this.fixtureService
      .getFixtureList()
      .subscribe((fixtures) => (this.fixtures = fixtures));
  }
}
