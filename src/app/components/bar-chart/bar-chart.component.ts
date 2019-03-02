import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'bar',
          height: '250'
      },
      title:{
          text:''
      },
      yAxis: {
          title: {
              text: 'Placements',
              useHTML: true
          }
      },
      xAxis: {
          title: {
              text: 'Year',
              useHTML: true
          }
      },
      credits: {
          enabled: false
      },
      legend: {
          enabled: false
      },

      series: [{
        data: [[2013, 50],[2014, 80],[2014, 60],[2015,89],[2016,70],[2017,90],[2018,100]]
    }]
  })
 }
}
