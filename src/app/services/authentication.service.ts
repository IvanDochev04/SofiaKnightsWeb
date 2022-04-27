import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subject } from "rxjs";
import { AuthResponseDto } from "../models/accounts/response/AuthResponseDto";
import { RegistrationResponseDto } from "../models/accounts/response/registrationResponseDto";
import { UserForAuthenticationDto } from "../models/accounts/user/userForAuthenticationDto";
import { UserForRegistrationDto } from "../models/accounts/user/userForRegistrationDto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();

  constructor(private _http: HttpClient,private _jwtHelper: JwtHelperService) { }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }
  public registerUser = (route: string, body: UserForRegistrationDto) => {
    const urlAddress:string ='https://localhost:44346';
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, urlAddress), body);
  }
  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    const urlAddress:string ='https://localhost:44346';

    return this._http.post<AuthResponseDto>(this.createCompleteRoute(route, urlAddress), body);
  }
  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }
  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
 
    return token && !this._jwtHelper.isTokenExpired(token);
  }
  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    if(!token){
return false;
    }
    const decodedToken = this._jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  
    return role === 'Administrator';
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

}