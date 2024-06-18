import { Component } from '@angular/core';
import { AnalyticsCardComponent } from '../../core/components/card/analytics-card.component';
import { TableComponent } from '../../core/components/table/table.component';
import { LineChartComponent } from '../../core/components/line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AnalyticsCardComponent, TableComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tableHeaders = [{ key: 'taskId', header: 'Task ID' }, { key: 'taskName', header: 'Task Name' }, { key: 'cost', header: 'Cost' }];
  tableData = [
    { taskId: 'TSK001', taskName: 'Mark', cost: 'EUR 1200.00' },
    { taskId: 'TSK002', taskName: 'Jacob', cost: 'EUR 1200.00' },
    { taskId: 'TSK003', taskName: 'Larry the Bird', cost: 'EUR 1200.00' },
    { taskId: 'TSK004', taskName: 'Mark', cost: 'EUR 1200.00' },
    { taskId: 'TSK005', taskName: 'Jacob', cost: 'EUR 1200.00' },
    { taskId: 'TSK006', taskName: 'Larry the Bird', cost: 'EUR 1200.00' },
    { taskId: 'TSK007', taskName: 'Mark', cost: 'EUR 1200.00' },
    { taskId: 'TSK008', taskName: 'Jacob', cost: 'EUR 1200.00' },
  ];
}
