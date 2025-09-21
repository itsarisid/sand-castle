import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: 'sample-page',
        loadChildren: () => import('../../components/sample-page/sample-page.routes').then(r => r.samplePage),
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.routes').then(r => r.pages),
        data: {
            breadcrumb: 'Pages'
        }
    }
]