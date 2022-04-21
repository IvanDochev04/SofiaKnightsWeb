import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { PlayerService } from '../../services/player-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.playerService
      .getPlayersList()
      .subscribe((players) => (this.players = players));
  }
  redirectToPlayerCard(player): void {
    console.log(player);
this.router.navigate([`/player/${player.id}`]);
  }
}
