import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/Player';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'https://localhost:44346/Player';

  constructor(private http: HttpClient) {}

  getPlayersList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/all`);
  }
  getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${playerId}`);
  }

  deletePlayer(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.delete<Player>(url);
  }

  updatePlayer(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Player>(url, player, httpOptions);
  }

  createPlayer(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Player>(this.apiUrl, player, httpOptions);
  }
}
