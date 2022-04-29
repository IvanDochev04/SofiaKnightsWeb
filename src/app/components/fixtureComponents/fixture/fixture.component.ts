import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from 'src/app/models/Fixture';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FixtureService } from 'src/app/services/fixture.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
})
export class FixtureComponent implements OnInit {
  fixtures: Fixture[] = [];
  isUserAdmin: boolean;

  constructor(private fixtureService: FixtureService,private authService: AuthenticationService, private router:Router) {
    this.isUserAdmin = this.authService.isUserAdmin();
  }

  ngOnInit(): void {
    this.fixtureService
      .getFixtureList()
      .subscribe((fixtures) => (this.fixtures = fixtures));
  }
  add(){
this.router.navigate(['addFixture'])
  }
  
  teams(){
    this.router.navigate(['teams'])
      }
}
