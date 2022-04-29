import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  name: string;
  logoUrl: string;
  constructor(private teamService: TeamService,private router:Router) {}

  ngOnInit(): void {}
  onBack() {
    this.router.navigate(['/teams'])
  }
  onSubmit() {
    if (!this.name) {
      alert('Please choose a name!');
      return;
    }
    if (!this.logoUrl) {
      alert('Please choose a file path!');
      return;
    }
    const newTeam: Team = {
      id: 0,
      logoUrl: this.logoUrl,
      name: this.name,
    };
    this.teamService.createTeam(newTeam).subscribe();

    this.router.navigate(['/teams']);
  }
}
