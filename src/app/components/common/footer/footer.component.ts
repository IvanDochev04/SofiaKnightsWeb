import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  public userAuthenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(null);
  public isUserAuthenticated: boolean;

  constructor(
    private _authService: AuthenticationService,
  ) {
    this.userAuthenticated.subscribe(
      (value) => (this.isUserAuthenticated = value)
    );
  }
  ngOnInit(): void {}

  toggleButtons() {
    this.userAuthenticated.next(this._authService.isUserAuthenticated());
  }
}
