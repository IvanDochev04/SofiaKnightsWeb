import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Sofia Knights';
  constructor(private _authService: AuthenticationService) {}
  ngOnInit(): void {
    if (this._authService.isUserAuthenticated())
      this._authService.sendAuthStateChangeNotification(true);
  }
}
