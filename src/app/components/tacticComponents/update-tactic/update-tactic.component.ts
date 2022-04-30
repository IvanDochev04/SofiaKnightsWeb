import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tactic } from 'src/app/models/Tactic';
import { TacticService } from 'src/app/services/tactic.service';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-update-tactic',
  templateUrl: './update-tactic.component.html',
  styleUrls: ['./update-tactic.component.css'],
})
export class UpdateTacticComponent implements OnInit {
  id: string;
  tactic: Tactic;
  constructor(
    private tacticService: TacticService,
    private router: Router,
    private textService: TextService,
    private activatedRoute: ActivatedRoute
  ) {}
  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.tacticService
      .getTactic(+this.id)
      .subscribe((tactic) => (this.tactic = tactic));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/tactic']);
  }
  onSubmit() {
    if (!this.tactic.name) {
      alert('Please add a name!');
      return;
    }
    if (!this.tactic.type) {
      alert('Please add a short description!');
      return;
    }
    if (!this.tactic.formation) {
      alert('Please choose a formation!');
      return;
    }
    if (!this.tactic.concept) {
      alert('Please choose a concept!');
      return;
    }
    if (!this.tactic.description) {
      alert('Please choose a content!');
      return;
    }
    if (!this.tactic.pictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newTactic: Tactic = {
      id: +this.id,
      name: this.tactic.name,
      type: this.tactic.type,
      formation: this.tactic.formation,
      concept: this.tactic.concept,
      description: this.textService.escape(this.tactic.description),
      pictureUrl: this.tactic.pictureUrl,
    };
    this.tacticService.updateTactic(newTactic).subscribe();

    this.router.navigate([`/tactic`]);
  }
}
