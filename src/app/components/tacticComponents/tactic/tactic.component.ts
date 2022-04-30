import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacticList } from 'src/app/models/TacticList';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TacticService } from 'src/app/services/tactic.service';

@Component({
  selector: 'app-tactic',
  templateUrl: './tactic.component.html',
  styleUrls: ['./tactic.component.css'],
})
export class TacticComponent implements OnInit {
  type: string;
  isUserAdmin: boolean;
  tacticList: TacticList[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tacticService: TacticService,
    private authService: AuthenticationService
  ) {
    this.isUserAdmin = this.authService.isUserAdmin();
  }

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.type = params.get('type'))
    );
    this.tacticService.getTacticList().subscribe((tactics) => {
      if (this.type === 'offence') {
        this.tacticList = tactics.filter((t) => t.type === 'Offence');
      }
      if (this.type === 'defence') {
        this.tacticList = tactics.filter((t) => t.type === 'Defense');
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this.router.navigate([`tactic`]);
  }
  redirectToTacticCard(tactic): void {
    console.log(tactic);
    this.router.navigate([`/tactic/${this.type}/${tactic.id}`]);
  }
  redirectToCreateTactic() {
    this.router.navigate([`/addTactic`]);
  }
}
