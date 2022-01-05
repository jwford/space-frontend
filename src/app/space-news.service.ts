import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceNewsService {

  private api_url = 'https://api.spaceflightnewsapi.net/v3';

  private articles: Article[] = [];

  constructor(private http: HttpClient) { }

  public getArticles() {
    return this.http.get<Article[]>(`${this.api_url}/articles`);
  }
}

export interface Article {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [{
    id: string;
    provider: string;
  }];
  events: [{
    id: string;
    provider: string;
  }]
}
