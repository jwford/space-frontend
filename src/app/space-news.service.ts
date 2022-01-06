import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceNewsService {

  private api_url = 'https://api.spaceflightnewsapi.net/v3';

  private articles: Article[] = [];

  constructor(private http: HttpClient) { }

  public getArticles(nextStart: number) {
    return this.http.get<Article[]>(`${this.api_url}/articles?_start=${nextStart}`).pipe(map(res => res));
  }

  public getBlogs() {
    return this.http.get<Blog[]>(`${this.api_url}/blogs`);
  }
}

export interface Article extends Blog {
  featured: boolean;
}
export interface Blog {
  id: number;
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
