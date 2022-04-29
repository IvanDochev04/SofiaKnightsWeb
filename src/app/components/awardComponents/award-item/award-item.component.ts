import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Award } from 'src/app/models/Award';
import { AwardService } from 'src/app/services/award.service';

@Component({
  selector: 'app-award-item',
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.css']
})
export class AwardItemComponent implements OnInit {
  @Input() award : Award
  @Input() isUserAdmin:boolean
  constructor(private awardService: AwardService, private router:Router) { }

  ngOnInit(): void {
  }
update(){
this.router.navigate([`updateAward/${this.award.id}`])
}
delete(){
  this.awardService.deleteAward(this.award);
  window.location.reload();
}
}
