import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Award } from 'src/app/models/Award';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AwardService } from 'src/app/services/award.service';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {
  isUserAdmin:boolean;
  awards:Award[] =[];
  constructor(private awardService:AwardService,private router:Router,private authService:AuthenticationService) { 
    this.awardService
    .getAwardList()
    .subscribe((awards) => (this.awards = awards));
    this.isUserAdmin = this.authService.isUserAdmin();
  }

  ngOnInit(): void {
  }
  redirectToAddAward(){
    this.router.navigate(['/addAward'])
  }
}
