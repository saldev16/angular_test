import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [],
  templateUrl: './analytics-card.component.html',
  styleUrl: './analytics-card.component.css'
})
export class AnalyticsCardComponent {
  @Input() title?: string;
  @Input() value?: number;
  @Input() iconClass?: string;
  @Input() extraClass?: string;
  @Input() mainClass?: string;
}
