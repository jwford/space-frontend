import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public launches: any;

  constructor(private spacex: SpacexService) { }

  ngOnInit() {
    this.spacex.getLaunches().subscribe(res => this.launches = res);
  }

}
