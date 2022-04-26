import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/News';
import { NewsList } from '../models/NewsList';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: '*/*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://localhost:44346/News';
  constructor(private http: HttpClient) {}

  getNewsList(): Observable<NewsList[]> {
    return this.http.get<NewsList[]>(`${this.apiUrl}/all`);
  }
  getNews(newsId: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${newsId}`);
  }

  deleteNews(news: News): Observable<News> {
    const url = `${this.apiUrl}/${news.id}`;
    return this.http.delete<News>(url);
  }

  updateNews(news: News): Observable<News> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<News>(url, news, httpOptions);
  }

  createNews(news: News): Observable<News> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<News>(url, news, httpOptions);
  }
}
