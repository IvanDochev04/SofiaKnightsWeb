import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixture } from '../models/Fixture';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FixtureService {
  private apiUrl = 'https://localhost:44346/Fixture';

  constructor(private http: HttpClient) {}

  getFixtureList(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(`${this.apiUrl}/all`);
  }
  getFixture(fixtureId: number): Observable<Fixture> {
    return this.http.get<Fixture>(`${this.apiUrl}/${fixtureId}`);
  }

  deleteFixture(fixture: Fixture): Observable<Fixture> {
    const url = `${this.apiUrl}/${fixture.id}`;
    return this.http.delete<Fixture>(url);
  }

  updateFixture(fixture: Fixture): Observable<Fixture> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Fixture>(url, fixture, httpOptions);
  }

  createFixture(fixture): Observable<Fixture> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Fixture>(url, fixture, httpOptions);
  }
}

