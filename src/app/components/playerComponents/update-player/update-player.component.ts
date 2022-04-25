import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css'],
})
export class UpdatePlayerComponent implements OnInit {
  id: string;
  player: Player;
  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
    this.playerService
      .getPlayer(+this.id)
      .subscribe((player) => (this.player = player));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this.router.navigate(['/players']);
 }
  onSubmit() {
    if (!this.player.fullName) {
      alert('Please add a Full Name!');
      return;
    }
    if (!this.player.nickName) {
      alert('Please add a Nickname!');
      return;
    }
    if (!this.player.birthDay) {
      alert('Please choose a birthday!');
      return;
    }
    if (!this.player.nationality) {
      alert('Please add a nationality!');
      return;
    }
    if (!this.player.height) {
      alert('Please add height!');
      return;
    }
    if (!this.player.weight) {
      alert('Please add weight!');
      return;
    }
    if (!this.player.positions) {
      alert('Please add positions!');
      return;
    }
    if (!this.player.profilePictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newPlayer: Player = {
      id: +this.id,
      fullName: this.player.fullName,
      nickName: this.player.nickName,
      birthDay: this.player.birthDay,
      nationality: this.player.nationality,
      selfDiscription: this.player.selfDiscription,
      height: this.player.height,
      weight: this.player.weight,
      positions: this.player.positions,
      number: this.player.number,
      profilePictureUrl: this.player.profilePictureUrl,
    };

    this.playerService.updatePlayer(newPlayer).subscribe();
    this.router.navigate([`/player/${this.id}`]);
  }
}
