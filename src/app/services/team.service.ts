import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = 'https://localhost:44346/Team';

  constructor(private http: HttpClient) {}

  getTeamList(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/all`);
  }
  getTeam(teamId: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${teamId}`);
  }

  deleteTeam(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/${team.id}`;
    return this.http.delete<Team>(url);
  }

  updateTeam(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Team>(url, team, httpOptions);
  }

  createTeam(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Team>(url, team, httpOptions);
  }
}

