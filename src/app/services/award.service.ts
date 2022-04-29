import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Award } from '../models/Award';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AwardService {
  private apiUrl = 'https://localhost:44346/Award';

  constructor(private http: HttpClient) {}

  getAwardList(): Observable<Award[]> {
    return this.http.get<Award[]>(`${this.apiUrl}/all`);
  }
  getAward(awardId: number): Observable<Award> {
    return this.http.get<Award>(`${this.apiUrl}/${awardId}`);
  }

  deleteAward(award: Award): Observable<Award> {
    const url = `${this.apiUrl}/${award.id}`;
    return this.http.delete<Award>(url);
  }

  updateAward(award: Award): Observable<Award> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Award>(url, award, httpOptions);
  }

  createAward(award: Award): Observable<Award> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Award>(url, award, httpOptions);
  }
}

