import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TacticList } from 'src/app/models/TacticList';

@Component({
  selector: 'app-tactic-home',
  templateUrl: './tactic-home.component.html',
  styleUrls: ['./tactic-home.component.css'],
})
export class TacticHomeComponent implements OnInit {
  offenceList: TacticList[];
  defenceList: TacticList[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
  onClick(string){
    this.router.navigate([`tactic/${string}`])
  }
}
