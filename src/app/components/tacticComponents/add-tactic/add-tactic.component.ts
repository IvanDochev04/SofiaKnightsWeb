import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tactic } from 'src/app/models/Tactic';
import { TacticService } from 'src/app/services/tactic.service';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-add-tactic',
  templateUrl: './add-tactic.component.html',
  styleUrls: ['./add-tactic.component.css']
})
export class AddTacticComponent implements OnInit {

  id:number;
  formation:string;
  concept:string;
  name:string;
  type:string;
  description:string;
  pictureUrl:string;
  constructor(
    private tacticService: TacticService,
    private router: Router,
    private textService: TextService,
  ) {}

  ngOnInit(): void {}
  onBack(): void {
    this.router.navigate(['/tactic']);
  }
  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
      return;
    }
    if (!this.type) {
      alert('Please add a short description!');
      return;
    }
    if (!this.formation) {
      alert('Please choose a formation!');
      return;
    }
    if (!this.concept) {
      alert('Please choose a concept!');
      return;
    }
    if (!this.description) {
      alert('Please choose a content!');
      return;
    }
    if (!this.pictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newTactic: Tactic = {
      id: 0,
      name: this.name,
      type: this.type,
      formation:this.formation,
      concept:this.concept,
      description: this.textService.escape(this.description),
      pictureUrl: this.pictureUrl,
     
    };
    this.tacticService.createTactic(newTactic).subscribe();

    this.router.navigate([`/tactic`]);
  }

}
