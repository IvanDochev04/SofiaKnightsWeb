import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css'],
})
export class UpdateNewsComponent implements OnInit {
  id: string;
  news: News;
  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private textService: TextService
  ) {}

  sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
    this.newsService.getNews(+this.id).subscribe((news) => {
      this.news = news;
      news.content = this.textService.unescape(news.content);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this.router.navigate([`/news/${this.id}`]);
  }
  onSubmit() {
    if (!this.news.title) {
      alert('Please add a title!');
      return;
    }
    if (!this.news.shortDescription) {
      alert('Please add a short description!');
      return;
    }

    if (!this.news.content) {
      alert('Please add a content!');
      return;
    }
    if (!this.news.pictureUrl) {
      alert('Please add  picture file name!');
      return;
    }

    const newNews: News = {
      id: +this.id,
      title: this.news.title,
      shortDescription: this.news.shortDescription,
      content: this.textService.escape(this.news.content),
      pictureUrl: this.news.pictureUrl,
      date: formatDate(Date.now(), 'yyyy/MM/dd', 'en').toString(),
    };
    this.newsService.updateNews(newNews).subscribe();

    this.router.navigate([`/news/${this.id}`]);
  }
}
