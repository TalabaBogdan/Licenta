import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { CryptoModel } from 'src/app/services/crypto.model';
import { CryptoService } from 'src/app/services/crypto.service';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  data : any = [];

  constructor(private crypto : CryptoService) {
    
   }

  chartOptions = {};

  Highcharts = Highcharts;

  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response : CryptoModel[]) => console.log(response))

    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Cryptocurrency value'
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
          name: 'BTC',
          data: [502, 635, 705, 707, 902, 1300, 1567]
      }, {
          name: 'ETH',
          data: [106, 107, 111, 133, 221, 767, 1320]
      }, {
          name: 'XLM',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'MKR',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'DOGE',
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
