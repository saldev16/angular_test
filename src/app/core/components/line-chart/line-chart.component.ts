import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        align: 'start',
        labels: {
          filter: function (legendItem: any, chartData) {
            return chartData.datasets[legendItem.datasetIndex].label === 'Monthly Task Aactivities(For Month of June)';
          },
          font: {
            family: 'Arial, sans-serif',
            size: 16,
            weight: 500
          }
        }
      }
    },
    scales: {
      x: {
        display: true
      },
      y: {
        display: true
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55, 40],
        label: 'Monthly Task Aactivities(For Month of June)',
        borderColor: 'rgba(37,231,165,255)',
        borderWidth: 6,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        tension: 0.4
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27, 90],
        label: '',
        borderColor: 'rgba(33,157,251,255)',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 6,
        tension: 0.4
      }
    ],
    labels: ['5', '6', '7', '8', '9', '1', '1', '1', '1', '1', '1', '1', '1'],
  };
  public lineChartType: ChartType = 'line';
}
