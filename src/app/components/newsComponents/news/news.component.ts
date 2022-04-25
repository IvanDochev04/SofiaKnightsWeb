import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsList } from 'src/app/models/NewsList';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsList: NewsList[] = [];
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.newsService.getNewsList().subscribe((newsList) => {
      this.newsList = newsList;
    });
  }

  redirectToNewsCard(news): void {
    console.log(news);
    this.router.navigate([`/news/${news.id}`]);
  }
  redirectToCreateNews(){
    this.router.navigate([`/addNews`]);

  }
}
