import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Award } from 'src/app/models/Award';
import { AwardService } from 'src/app/services/award.service';

@Component({
  selector: 'app-update-award',
  templateUrl: './update-award.component.html',
  styleUrls: ['./update-award.component.css']
})
export class UpdateAwardComponent implements OnInit {
id:string;
award:Award;
  constructor(private activatedRoute:ActivatedRoute, private router:Router,private awardService:AwardService) { }

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
    this.awardService.getAward(+this.id).subscribe((award) => {
      this.award = award;
    });
  }
  onBack(){
    this.router.navigate(['/awards']);
    }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onSubmit() {
    if (!this.award.name) {
      alert('Please add a name!');
      return;
    }
    if (!this.award.description) {
      alert('Please add a short description!');
      return;
    }
    if (!this.award.personName) {
      alert('Please choose a winner!');
      return;
    }
    if (!this.award.year) {
      alert('Please choose a year!');
      return;
    }
    if (!this.award.pictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newAward: Award = {
      id: +this.id,
      name: this.award.name,
      description: this.award.description,
      personName: this.award.personName,
      pictureUrl: this.award.pictureUrl,
      year: formatDate(Date.parse(this.award.year), 'yyyy', 'en').toString(),
    };
    console.log(newAward);
    this.awardService.updateAward(newAward).subscribe();

    this.router.navigate(['/awards']);
  }
}
