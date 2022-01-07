import { Component, OnInit } from '@angular/core';
import { Article, SpaceNewsService } from '../space-news.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  public articles: Article[] = [];
  public nextStart = 0;

  public search = '';

  constructor(private snapi_service: SpaceNewsService) { }

  ngOnInit(): void {
    this.getArticles(this.nextStart);
  }

  onScroll() {
    this.nextStart = this.nextStart + 10;
    this.getArticles(this.nextStart);
  }

  onSubmit() {
    this.snapi_service.searchArticlesByTitle(this.search).subscribe(res => {
      this.articles = res;
    });
  }

  getArticles(nextStart: number) {
    this.snapi_service.getArticles(nextStart).subscribe(res => {
      this.articles = this.articles.concat(res);
    }, err => {
      console.error(err);
    });
  }

}
