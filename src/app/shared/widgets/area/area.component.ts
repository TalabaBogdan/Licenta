import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor() { }

  chartOptions = {};

  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random data'
      },
      subtitle: {
          text: 'Source: '
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits:{
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [{
          name: 'Data1',
          data: [502, 635, 705, 707, 902, 1300, 1567]
      }, {
          name: 'Data2',
          data: [106, 107, 111, 133, 221, 767, 1320]
      }, {
          name: 'Data3',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Data4',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Data5',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300)

  }

}
