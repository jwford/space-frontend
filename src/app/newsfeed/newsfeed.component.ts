import { Component, OnInit } from '@angular/core';
import { Article, SpaceNewsService } from '../space-news.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  public articles: Article[] | null = null;

  constructor(private snapi_service: SpaceNewsService) { }

  ngOnInit(): void {
    this.snapi_service.getArticles()
      .subscribe(res => this.articles = res);
  }

}
