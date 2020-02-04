import { Component, OnInit } from '@angular/core';
import { LogDetailService } from 'src/app/shared/log-detail.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-log-detail-list',
  templateUrl: './log-detail-list.component.html',
  styles: []
})
export class LogDetailListComponent implements OnInit {

  constructor(private service: LogDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
