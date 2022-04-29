import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from 'src/app/models/Fixture';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FixtureService } from 'src/app/services/fixture.service';

@Component({
  selector: 'app-fixture-item',
  templateUrl: './fixture-item.component.html',
  styleUrls: ['./fixture-item.component.css'],
})
export class FixtureItemComponent implements OnInit {
  @Input() fixture: Fixture;
  isUserAdmin: boolean;

  constructor(private authService: AuthenticationService, private fixtureService:FixtureService, private router: Router) {
    this.isUserAdmin = this.authService.isUserAdmin();

  }

  ngOnInit(): void {}
  checkDate(date) {
    const checkDate: number = Date.parse(date);

    let inPast: boolean = false;
    let today: number = Date.now();
console.log(checkDate)
console.log(today)

    if (checkDate < today) {
      inPast = true;
    }

    return inPast;
  }
  update()
  {
    this.router.navigate([`updateFixture/${this.fixture.id}`])
  }

  delete(fixture){
    this.fixtureService.deleteFixture(fixture).subscribe();
    window.location.reload();
  }
}
