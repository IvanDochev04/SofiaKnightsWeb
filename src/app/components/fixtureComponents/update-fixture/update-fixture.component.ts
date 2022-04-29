import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fixture } from 'src/app/models/Fixture';
import { Team } from 'src/app/models/Team';
import { FixtureService } from 'src/app/services/fixture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-fixture',
  templateUrl: './update-fixture.component.html',
  styleUrls: ['./update-fixture.component.css'],
})
export class UpdateFixtureComponent implements OnInit {
  id: string;
  fixture: Fixture;
  date: string;
  time:string;
  homeTeamId: number;
  awayTeamId: number;
  teams: Team[] = [];
  constructor(
    private router: Router,
    private fixtureService: FixtureService,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
    this.teamService.getTeamList().subscribe((list) => (this.teams = list));
  
    
    this.fixtureService.getFixture(+this.id).subscribe((fixture) => {
      this.fixture = fixture;
      
      this.homeTeamId = this.fixture.homeTeam.id
      this.awayTeamId = this.fixture.awayTeam.id
    });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this.router.navigate(['/fixtures']);
  }
  onSubmit() {
    if (!this.fixture.homeTeam.id) {
      alert('Please choose a away team!');
      return;
    }
    if (!this.fixture.awayTeam.id) {
      alert('Please choose a away team!');
      return;
    }
    if (!this.fixture.location) {
      alert('Please add a location!');
      return;
    }
    if (!this.fixture.date) {
      alert('Please choose a date');
      return;
    }
    this.fixture.homeTeam.id = this.homeTeamId
    this.fixture.awayTeam.id = this.awayTeamId

    const newFixture:Fixture = {
      id: +this.id,
      homeTeam: this.fixture.homeTeam,
      awayTeam: this.fixture.awayTeam,
      location: this.fixture.location,
      homePoints: this.fixture.homePoints,
      awayPoints: this.fixture.awayPoints,
      date: formatDate(
        this.date + ' ' + this.time,
        'MM/dd/yyyy HH:mm',
        'en'
      ).toString(),
    };
    console.log(newFixture);
    debugger;
    this.fixtureService.updateFixture(newFixture).subscribe();

    this.router.navigate(['/fixtures']);
  }
}
