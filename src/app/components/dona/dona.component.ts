import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() tilte: string = 'Sin titulo';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: member-ordering
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  // tslint:disable-next-line: member-ordering
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  // tslint:disable-next-line: member-ordering
  public doughnutChartType: ChartType = 'doughnut';

}
