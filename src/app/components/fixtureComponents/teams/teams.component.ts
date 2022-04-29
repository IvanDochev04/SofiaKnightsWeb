import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams: Team[]=[];
  constructor(private teamservice: TeamService, private router:Router) {
    this.teamservice.getTeamList().subscribe(teams => this.teams = teams);
   }

  ngOnInit(): void {
  }

  onBack(){
this.router.navigate(['/fixtures'])
  }
  add(){
    this.router.navigate(['/addTeam'])

  }
  update(id){
    this.router.navigate([`/updateTeam/${id}`])

  }
  delete(team:Team){
this.teamservice.deleteTeam(team).subscribe();
window.location.reload();

  }
}
