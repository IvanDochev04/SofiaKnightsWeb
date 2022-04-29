import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { FixtureService } from 'src/app/services/fixture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-fixture',
  templateUrl: './add-fixture.component.html',
  styleUrls: ['./add-fixture.component.css'],
})
export class AddFixtureComponent implements OnInit {
  homeTeamId: number;
  awayTeamId: number;
  location: string;
  homePoints: number;
  awayPoints: number;
  date: string;
  time: string;
  teams: Team[] = [];
  constructor(
    private router: Router,
    private fixtureService: FixtureService,
    private teamService: TeamService
  ) {
    this.teamService.getTeamList().subscribe((list) => (this.teams = list));
  }

  ngOnInit(): void {}
  onBack(): void {
    this.router.navigate(['/fixtures']);
  }
  onSubmit() {
    if (!this.homeTeamId) {
      alert('Please choose a away team!');
      return;
    }
    if (!this.awayTeamId) {
      alert('Please choose a away team!');
      return;
    }
    if (!this.location) {
      alert('Please add a location!');
      return;
    }
    if (!this.date) {
      alert('Please choose a date');
      return;
    }
console.log(this.time)
    const newFixture = {
      homeTeamId: this.homeTeamId,
      awayTeamId: this.awayTeamId,
      location: this.location,
      homePoints: this.homePoints,
      awayPoints: this.awayPoints,
      date: formatDate(
        this.date +" "+ this.time,
        'MM/dd/yyyy HH:mm',
        'en'
      ).toString(),
    };
    this.fixtureService.createFixture(newFixture).subscribe();

    this.router.navigate(['/fixtures']);
  }
}
