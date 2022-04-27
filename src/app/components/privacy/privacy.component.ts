import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  public claims: [] = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getClaims();
  }
  public getClaims(){
    const urlAddress:string ='https://localhost:44346/api/accounts/Privacy';
    this.httpClient.get<[]>(urlAddress)
    .subscribe(res => {
      this.claims = res as [];
    })
  }

}
