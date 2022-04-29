import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Award } from 'src/app/models/Award';
import { AwardService } from 'src/app/services/award.service';

@Component({
  selector: 'app-add-award',
  templateUrl: './add-award.component.html',
  styleUrls: ['./add-award.component.css']
})
export class AddAwardComponent implements OnInit {
  name: string;
  description: string;
  personName: string;
  year: string;
  pictureUrl:string;
  constructor(private awardService:AwardService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onBack(){
  this.router.navigate(['/awards']);
  }
  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
      return;
    }
    if (!this.description) {
      alert('Please add a short description!');
      return;
    }
    if (!this.personName) {
      alert('Please choose a winner!');
      return;
    }
    if (!this.year) {
      alert('Please choose a year!');
      return;
    }
    if (!this.pictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newAward: Award = {
      id: 0,
      name: this.name,
      description: this.description,
      personName: this.personName,
      pictureUrl: this.pictureUrl,
      year: formatDate(Date.parse(this.year), 'yyyy', 'en').toString(),
    };
    console.log(newAward);
    this.awardService.createAward(newAward).subscribe();

    this.router.navigate(['/awards']);
  }
}
