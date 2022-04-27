import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PlayerService } from '../../../services/player-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  isUserAdmin : boolean;
  constructor(private playerService: PlayerService, private router: Router, private authService:AuthenticationService) {
    this.playerService
    .getPlayersList()
    .subscribe((players) => (this.players = players));
    this.isUserAdmin = this.authService.isUserAdmin();
  }

  ngOnInit(): void {
   
  }
  redirectToPlayerCard(player): void {
    console.log(player);
this.router.navigate([`/player/${player.id}`]);
  }
  redirectToAddPlayer(){
    this.router.navigate([`/addPlayer`]);
  }
}
