import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/dashboard'
    },
    {
        id   : 'example',
        title: 'Client Workflow',
        type : 'basic',
        icon : 'heroicons_solid:heart',
        link : '/health'
    },
    {
        id   : 'task',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons_outline:check-circle',
        link : '/tasks'
    },
    {
      id      : 'report',
      title   : 'Reports',
      type    : 'collapsable',
      icon    : 'heroicons_outline:document-report',
      children: [
          {
              id   : 'report.book',
              title: 'Bookkeeping Breakdown',
              type : 'basic',
              link : '/reports/bookkeeping'
          },
          {
              id   : 'report.task',
              title: 'Task Completion Log',
              type : 'basic',
              link : '/reports/completed-task'
          },
          {
              id   : 'report.accountant',
              title: 'Number of Clients per Accountant',
              type : 'basic',
              link : '/reports/accountant'
          }
      ]
  },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
