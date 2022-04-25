import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  fullName: string;
  nickName: string;
  birthDay: string;
  nationality: string;
  selfDiscription: string;
  height: number;
  weight: number;
  positions: string;
  number: number;
  profilePictureUrl: string;
  constructor(private playerService: PlayerService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.fullName) {
      alert('Please add a Full Name!');
      return;
    } if (!this.nickName) {
      alert('Please add a Nickname!');
      return;
    } if (!this.birthDay) {
      alert('Please choose a birthday!');
      return;
    } if (!this.nationality) {
      alert('Please add a nationality!');
      return;
    } if (!this.height) {
      alert('Please add height!');
      return;
    } if (!this.weight) {
      alert('Please add weight!');
      return;
    } if (!this.positions) {
      alert('Please add positions!');
      return;
    } if (!this.profilePictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newPlayer: Player = {
      id : 0,
      fullName: this.fullName,
      nickName: this.nickName,
      birthDay: this.birthDay,
      nationality: this.nationality,
      selfDiscription: this.selfDiscription,
      height: this.height,
      weight: this.weight,
      positions: this.positions,
      number: this.number,
      profilePictureUrl: this.profilePictureUrl,
    };

  this.playerService.createPlayer(newPlayer).subscribe();
  this.router.navigate(['/players'])
  }
}
