import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {CryptoModel} from 'src/app/services/crypto.model';
import {CryptoService} from 'src/app/services/crypto.service';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  data: any = [];

  constructor(private crypto: CryptoService) {

  }

  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];
  data4: number[] = [];
  data5: number[] = [];
  current: number = 0;

  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = ['90d', '60d', '30d', '7d', '24h', '1h', 'current'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Price evolution over time',
      display: true
    }
  };

  

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response: any) => {
      console.log(response.data);

      //1st ranked coin
      this.current = response.data[0].quote.USD.price;
      this.data1.push(response.data[0].quote.USD.price);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_1h)/100);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_24h)/100);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_7d)/100);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_30d)/100);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_60d)/100);
      this.data1.unshift(this.current * (100 - response.data[0].quote.USD.percent_change_90d)/100);

      //2nd ranked coind
      this.current = response.data[1].quote.USD.price;
      this.data2.push(response.data[1].quote.USD.price);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_1h)/100);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_24h)/100);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_7d)/100);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_30d)/100);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_60d)/100);
      this.data2.unshift(this.current * (100 - response.data[1].quote.USD.percent_change_90d)/100);

      //3rd ranked coin
      this.current = response.data[2].quote.USD.price;
      this.data3.push(response.data[2].quote.USD.price);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_1h)/100);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_24h)/100);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_7d)/100);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_30d)/100);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_60d)/100);
      this.data3.unshift(this.current * (100 - response.data[2].quote.USD.percent_change_90d)/100);

      //4th ranked coin
      this.current = response.data[3].quote.USD.price;
      this.data4.push(response.data[3].quote.USD.price);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_1h)/100);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_24h)/100);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_7d)/100);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_30d)/100);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_60d)/100);
      this.data4.unshift(this.current * (100 - response.data[3].quote.USD.percent_change_90d)/100);

      //5th ranked coin
      this.current = response.data[4].quote.USD.price;
      this.data5.push(response.data[4].quote.USD.price);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_1h)/100);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_24h)/100);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_7d)/100);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_30d)/100);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_60d)/100);
      this.data5.unshift(this.current * (100 - response.data[4].quote.USD.percent_change_90d)/100);

      this.lineChartData = [
        {data: this.data1, label: response.data[0].symbol},
        {data: this.data2, label: response.data[1].symbol},
        {data: this.data3, label: response.data[2].symbol},
        {data: this.data4, label: response.data[3].symbol},
        {data: this.data5, label: response.data[4].symbol}
      ];
    });
  }

}
