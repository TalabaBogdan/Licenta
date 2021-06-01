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

  name1 : String =  '';
  name2 : String =  '';
  name3 : String =  '';
  name4 : String =  '';
  name5 : String =  '';

  update : boolean = false;

  constructor(private crypto : CryptoService) {
    
   }

  chartOptions = {};

  Highcharts = Highcharts;

  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response : any) => {
      this.name1 = response.data[0].name;
      this.update = true;
    })

    this.chartOptions = {
      
      chart: {
          type: 'area'
      },
      title: {
          text: 'Cryptocurrency value'
      },
      subtitle: {
          text: 'Source: CoinMarketCap.com'
      },
      tooltip: {
          split: true,
          valueSuffix: ' USD'
      },
      credits:{
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [{
          name: this.name1,
          data: [502, 635, 705, 707, 902, 1300, 1567]
      }, {
          name: this.name2,
          data: [106, 107, 111, 133, 221, 767, 1320]
      }, {
          name: this.name3,
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: this.name4,
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: this.name5,
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
