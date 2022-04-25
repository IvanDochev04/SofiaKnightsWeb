import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  id:string;
  player: Player;
  constructor(private playerService: PlayerService,
     private activatedRoute : ActivatedRoute,
      private router: Router) { }
sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => this.id = params.get('id'))
    this.playerService.getPlayer(+this.id).subscribe((player)=> this.player=player);
    console.log(this.player);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this.router.navigate(['/players']);
  }
  onDelete(player){
    if(confirm('Do you want to delete this player?')){
this.playerService.deletePlayer(player).subscribe()
this.router.navigate(['/players'])}
  }
  onUpdate()
  {
this.router.navigate([`/updatePlayer/${this.id}`])
  }
}
