import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  isRouteHere: boolean;
  subscription: Subscription;
  public isUserAuthenticated: boolean;

  constructor(private uiService: UiService, private router: Router, private _authService: AuthenticationService,private activatedRoute: ActivatedRoute) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.isRouteHere = value));
       this.isUserAuthenticated =  this._authService.isUserAuthenticated();

  }
  ngOnInit(): void {
  }
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
   }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
  register(){
    this.router.navigate(['/authentication/register'])
  }
  login(){
    this.router.navigate(['/authentication/login'])
  }
  logout () {
    this._authService.logout();
    this.router.navigate(["/"]);
    window.location.reload();
  }
}
