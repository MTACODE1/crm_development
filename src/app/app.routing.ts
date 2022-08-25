import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';


export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},
    {
      path: '',
      canActivate: [NoAuthGuard],
      canActivateChild: [NoAuthGuard],
      component: LayoutComponent,
      data: {
        layout: 'empty'
      },
      children: [
        {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
      ]
    },

    // Auth routes for authenticated users
    {
      path: '',
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: LayoutComponent,
      data: {
        layout: 'empty'
      },
      children: [
        {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
      ]
    },

    // Landing routes
    {
      path: '',
      component  : LayoutComponent,
      data: {
        layout: 'empty'
      },
      children : [
        {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
      ]
    },

    // Admin routes
    {
      path : '',
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component  : LayoutComponent,
      resolve    : {
        initialData: InitialDataResolver,
      },
      children : [
        {path: 'health', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
        {path: 'tasks', loadChildren: () => import('app/modules/admin/task-list/task-list.module').then(m => m.TaskListModule)},
        {path: 'dashboard', loadChildren: () => import('app/modules/admin/dshboard/dshboard.module').then(m => m.DshboardModule)},
        {path: 'reports', loadChildren: () => import('app/modules/admin/reports/reports.module').then(m => m.ReportsModule)},
        {path: 'jobmanager', loadChildren: () => import('app/modules/admin/job-manager/job-manager.module').then(m => m.JobManagerModule)},
        {path: 'ag-grid-job-manager', loadChildren: () => import('app/modules/admin/ag-grid-job-manager/ag-grid-job-manager.module').then(m => m.AgGridJobManagerModule)},
      ]
    },
    {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/not-found/not-found.module').then(m => m.NotFoundModule)},
    {path: '**', redirectTo: '404-not-found'}
];
