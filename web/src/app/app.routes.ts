import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './services/auth.guard';
import { CaseComponent } from './components/case/case.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent, title: 'Iron - Authentication' },

  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: DashboardComponent, title: 'Iron - Dashboard' },
      { path: 'case/:id', component: CaseComponent, title: 'Iron - Case' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
