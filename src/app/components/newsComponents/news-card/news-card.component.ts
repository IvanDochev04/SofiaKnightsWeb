import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  id:string;
  news: News;
  constructor(private newsService: NewsService,
     private activatedRoute : ActivatedRoute,
      private router: Router) { }
sub;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => this.id = params.get('id'))
    this.newsService.getNews(+this.id).subscribe((news)=> this.news=news);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this.router.navigate(['/news']);
  }
  onDelete(news){
    console.log('deleted')
    this.newsService.deleteNews(news).subscribe();
    this.router.navigate(['/news'])
  }
  onUpdate(){
    this.router.navigate([`/updateNews/${this.id}`])
  }
}
