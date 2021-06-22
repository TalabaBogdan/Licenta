import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-widget-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

    data1: number[] = [63];
    data2: number[] = [17];
    data3: number[] = [4];
    data4: number[] = [3];
    data5: number[] = [3];


    public pieChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            text: 'Market dominance(percentage)',
            display: true
        }
      };
      public pieChartLabels: Label[] = [];
      public pieChartData: SingleDataSet = [];
      public pieChartType: ChartType = 'pie';
      public pieChartLegend = true;
      public pieChartPlugins = [];
    
      constructor(private crypto: CryptoService) {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
      }



  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response: any) => {
        console.log(response.data);

        this.pieChartData.push(this.data1[0]);
        this.pieChartData.push(this.data2[0]);
        this.pieChartData.push(this.data3[0]);
        this.pieChartData.push(this.data4[0]);
        this.pieChartData.push(this.data5[0]);
        this.pieChartData.push(100-this.data1[0]-this.data2[0]-this.data3[0]-this.data4[0]-this.data5[0]);

        this.pieChartLabels.push(response.data[0].symbol);
        this.pieChartLabels.push(response.data[1].symbol);
        this.pieChartLabels.push(response.data[2].symbol);
        this.pieChartLabels.push(response.data[3].symbol);
        this.pieChartLabels.push(response.data[4].symbol);
        this.pieChartLabels.push('Others');

      });
  }
}
