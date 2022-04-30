import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tactic } from 'src/app/models/Tactic';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TacticService } from 'src/app/services/tactic.service';

@Component({
  selector: 'app-tactic-card',
  templateUrl: './tactic-card.component.html',
  styleUrls: ['./tactic-card.component.css'],
})
export class TacticCardComponent implements OnInit {
  id: string;
  type: string;
  tactic: Tactic;
  isUserAdmin:boolean
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tacticService: TacticService,
    private authService:AuthenticationService
  ) {
    this.isUserAdmin = this.authService.isUserAdmin();

  }

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => {(this.id = params.get('id'))
    this.type = params.get('type')}
    );
    this.tacticService
      .getTactic(+this.id)
      .subscribe((tactic) => (this.tactic = tactic));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate([`/tactic/${this.type}`]);
  }
  onDelete(tactic) {
      this.tacticService.deleteTactic(tactic).subscribe();
      this.router.navigate([`/tactic/${this.type}`]);
    }
  
  onUpdate() {
    this.router.navigate([`/updateTactic/${this.id}`]);
  }
}
