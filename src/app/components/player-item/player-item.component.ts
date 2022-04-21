import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

@Input() player : Player
@Output() onClick: EventEmitter<Player> = new EventEmitter();
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }
  onDoubleClick(player){
    this.onClick.emit(player);
  }
}
