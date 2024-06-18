import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadComponent: () => DashboardComponent
    },
];
