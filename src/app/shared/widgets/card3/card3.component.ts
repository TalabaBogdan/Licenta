import { Component, Input, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import {Color, Label, SingleDataSet} from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-widget-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {


    data: any = [];

    constructor(private crypto: CryptoService) { }
  
    public polarAreaChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            text: 'Circulating supply(billions)',
            display: true
        }
      };
    public polarAreaChartLabels: Label[] = [];
    public polarAreaChartData: SingleDataSet = [];
    public polarAreaLegend = true;
  
    public polarAreaChartType: ChartType = 'polarArea';
  
  ngOnInit(): void {

    this.crypto.getObservable().subscribe((response: any) => {
        console.log(response.data);

        for(let i=0;i<5;i++){
        this.polarAreaChartData.push(response.data[i].circulating_supply/1000000000);
        this.polarAreaChartLabels.push(response.data[i].symbol);
        }

      });

  }
}


