import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.routes').then(r => r.dashboard),
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.routes').then(r => r.pages),
        data: {
            breadcrumb: 'Pages'
        }
    }
]