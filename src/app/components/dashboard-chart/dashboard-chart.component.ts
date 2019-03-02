import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

declare var require: any;

import { Highcharts } from 'angular-highcharts';

@Component({
    selector: 'dashboard-chart',
    templateUrl: './dashboard-chart.component.html'
})
export class DashboardChartComponent implements OnInit {

    public chart: Chart;

    ngOnInit() {
        this.chart = new Chart({
            chart: {
                renderTo: 'container2',
                type: 'line',
                height: '285'
            },
            title:{
                text:''
            },
            yAxis: {
                title: {
                    text: 'University Ranks',
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
                data: [[2013, 50],[2014, 80],[2015, 60],[2016,89],[2017,70],[2018,90]]
            }]
        });

    }

}

