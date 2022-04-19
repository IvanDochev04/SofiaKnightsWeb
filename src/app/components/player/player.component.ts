import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player';
import {PlayerService } from '../../services/player-service.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
players: Player[] = []
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayersList().subscribe((players) => this.players = players)
  }

}
