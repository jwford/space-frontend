import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Article } from '../space-news.service';

@Component({
  selector: 'app-newsfeed-item',
  templateUrl: './newsfeed-item.component.html',
  styleUrls: ['./newsfeed-item.component.scss']
})
export class NewsfeedItemComponent {

  @Input() article: Article | null = null;

  // TODO: this always shows the same date
  public formattedDate = moment(this.article?.publishedAt).format('YYYY MMM Do');
}
