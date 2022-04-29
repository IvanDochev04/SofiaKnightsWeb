import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css'],
})
export class UpdateTeamComponent implements OnInit {
  id: string;
  team: Team;
  constructor(
    private teamService: TeamService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
this.teamService.getTeam(+this.id).subscribe(team => this.team=team)
  }
  onBack() {
    this.router.navigate(['/teams']);
  }
  onSubmit() {
    if (!this.team.name) {
      alert('Please choose a name!');
      return;
    }
    if (!this.team.logoUrl) {
      alert('Please choose a file path!');
      return;
    }
    const newTeam: Team = {
      id: +this.id,
      logoUrl: this.team.logoUrl,
      name: this.team.name,
    };
    this.teamService.updateTeam(newTeam).subscribe();

    this.router.navigate(['/teams']);
  }
}
