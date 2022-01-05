import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../space-news.service';

@Component({
  selector: 'app-newsfeed-item',
  templateUrl: './newsfeed-item.component.html',
  styleUrls: ['./newsfeed-item.component.scss']
})
export class NewsfeedItemComponent {

  @Input() article: Article | null = null;
}
