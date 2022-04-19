import { Component, OnInit, Input} from '@angular/core';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

@Input() player : Player
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }
  onDoubleClick(player){
    this.playerService.getPlayer(player.id).subscribe((player)=> this.player=player);
  }
}
