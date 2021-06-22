import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { CryptoService } from 'src/app/services/crypto.service';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    data: any = [];

  constructor(private crypto: CryptoService) { }

  data1: number[] = [63314];
  data2: number[] = [4168];
  data3: number[] = [1];
  data4: number[] = [672];
  data5: number[] = [2];

  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];

  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        text: "Highest recorded price",
        display: true
    }
  };

  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  barChartLegend = true;

  barChartPlugins = [];

  barChartType: ChartType = 'bar';

  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response: any) => {
        console.log(response.data);

        this.barChartData = [
          {data: this.data1, label: response.data[0].symbol},
          {data: this.data2, label: response.data[1].symbol},
          {data: this.data3, label: response.data[2].symbol},
          {data: this.data4, label: response.data[3].symbol},
          {data: this.data5, label: response.data[4].symbol}
        ];
        this.barChartLabels.push("Price in USD");
      });
    }

}


