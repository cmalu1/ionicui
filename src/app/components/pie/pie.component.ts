import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'pie',
          height: '250'
      },
      title:{
          text:''
      },
      credits: {
          enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
      legend: {
          enabled: false
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
      series: [{
        data: [{
            name: '2018',
            y: 60,
            sliced: false,
            selected: true
        }, {
            name: '2017',
            y: 11
        }, {
            name: '2016',
            y: 10
        }, {
            name: '2015',
            y: 4
        }, {
            name: '2014',
            y: 4
        }, {
            name: '2013',
            y: 11
        }]
    }]
  })
  }

}


