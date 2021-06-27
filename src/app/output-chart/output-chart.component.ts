import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables}  from 'chart.js';

@Component({
  selector: 'app-output-chart',
  templateUrl: './output-chart.component.html',
  styleUrls: ['./output-chart.component.scss']
})
export class OutputChartComponent implements OnInit {

  myChart: any;
  graphData: any;
  labels: number[] = [];

  @Input() dataChart: any;
  
  ngOnInit(): void {
      Chart.register(...registerables);

      for (let x = 2020; x < 2035; x++) {
          this.labels.push(x);
      }

      this.graphData = {
          labels: this.labels,                // The data on the X-axis (our years)
          datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40], // The data on Y-axis (our start balance)
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
          }]
      }  

      this.myChart = new Chart("canvas", {
          type: 'line',
          data: this.graphData,
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      }); 
  }   
}
