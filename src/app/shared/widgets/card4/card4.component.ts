import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-widget-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component implements OnInit {
  
  constructor(private crypto: CryptoService) { }

  data: any = [];
  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];
  data4: number[] = [];
  data5: number[] = [];

  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];

  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        text: "Volume traded in the past 24H",
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

        this.data1.push(response.data[0].quote.USD.volume_24h);
        this.data2.push(response.data[1].quote.USD.volume_24h);
        this.data3.push(response.data[2].quote.USD.volume_24h);
        this.data4.push(response.data[3].quote.USD.volume_24h);
        this.data5.push(response.data[4].quote.USD.volume_24h);

        this.barChartData = [
          {data: this.data1, label: response.data[0].symbol},
          {data: this.data2, label: response.data[1].symbol},
          {data: this.data3, label: response.data[2].symbol},
          {data: this.data4, label: response.data[3].symbol},
          {data: this.data5, label: response.data[4].symbol}
        ];
        this.barChartLabels.push("Volume");
      });
    }
  }
