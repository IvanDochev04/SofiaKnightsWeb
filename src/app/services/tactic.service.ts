import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tactic } from '../models/Tactic';
import { TacticList } from '../models/TacticList';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: '*/*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TacticService {
  private apiUrl = 'https://localhost:44346/Tactic';
  constructor(private http: HttpClient) {}

  getTacticList(): Observable<TacticList[]> {
    return this.http.get<TacticList[]>(`${this.apiUrl}/all`);
  }
  getTactic(tacticId: number): Observable<Tactic> {
    return this.http.get<Tactic>(`${this.apiUrl}/${tacticId}`);
  }

  deleteTactic(tactic: Tactic): Observable<Tactic> {
    const url = `${this.apiUrl}/${tactic.id}`;
    return this.http.delete<Tactic>(url);
  }

  updateTactic(tactic: Tactic): Observable<Tactic> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Tactic>(url, tactic, httpOptions);
  }

  createTactic(tactic: Tactic): Observable<Tactic> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Tactic>(url, tactic, httpOptions);
  }
}
