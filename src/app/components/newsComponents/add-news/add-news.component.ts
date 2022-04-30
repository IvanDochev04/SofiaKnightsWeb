import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  pictureUrl: string;
  date: string;
  constructor(
    private newsService: NewsService,
    private router: Router,
    private textService: TextService,
  ) {}

  ngOnInit(): void {}
  onBack(): void {
    this.router.navigate(['/news']);
  }
  onSubmit() {
    if (!this.title) {
      alert('Please add a title!');
      return;
    }
    if (!this.shortDescription) {
      alert('Please add a short description!');
      return;
    }
    if (!this.content) {
      alert('Please choose a content!');
      return;
    }
    if (!this.pictureUrl) {
      alert('Please add a picture file name');
      return;
    }

    const newNews: News = {
      id: 0,
      title: this.title,
      shortDescription: this.shortDescription,
      content: this.textService.escape(this.content),
      pictureUrl: this.pictureUrl,
      date: formatDate(Date.now(), 'yyyy/MM/dd', 'en').toString(),
    };
    this.newsService.createNews(newNews).subscribe();

    this.router.navigate(['/news']);
  }
}
