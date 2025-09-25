import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
export const samplePage: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            title:'Sample Page',
            breadcrumb: 'Sample Page'
        }
    }
]