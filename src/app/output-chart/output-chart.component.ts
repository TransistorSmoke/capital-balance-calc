import { Component, OnInit, Input } from '@angular/core';
import { Chart, DatasetController, registerables}  from 'chart.js';

@Component({
  selector: 'app-output-chart',
  templateUrl: './output-chart.component.html',
  styleUrls: ['./output-chart.component.scss']
})
export class OutputChartComponent implements OnInit {

    myChart: any = '';
    graphData: any;
    labels: number[] = [];

    @Input() dataChart: any;


    ngOnInit(): void {
      
    }

    renderChart() {
        if (this.myChart) {
            this.myChart.destroy();
        }

        Chart.register(...registerables);
        const labelYears = [];
        const dataStartBalance = [];
        
        if (this.dataChart) {
            for (let x = 0; x < this.dataChart.length; x++) {
                labelYears.push(this.dataChart[x].year);
                dataStartBalance.push(this.dataChart[x].startBalance);
            }
        }

        this.graphData = {            
            labels: labelYears,
            datasets: [{
            label: 'Yearly Contribution Chart',            
            data: dataStartBalance,
            fill: false,
            borderColor: 'rgb(86, 109, 201)',
            tension: 0.1
            }]
        }  

        this.myChart = new Chart("canvas", {
            type: 'line',
            data: this.graphData,
            options: {
                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return '$ ' + value;
                            }
                        }
                    }
                }
            }
        }); 
    }

    ngOnChanges() {
        // Update our graph everytime our form data changes
        this.renderChart();
    }    
}
