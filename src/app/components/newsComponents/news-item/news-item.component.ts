import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsList } from 'src/app/models/NewsList';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  @Input() news: NewsList;
  @Output() onClick: EventEmitter<NewsList> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onNewsClick(news) {
    console.log("click")
    this.onClick.emit(news);
  }
}
