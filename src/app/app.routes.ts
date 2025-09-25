import { Routes } from '@angular/router';

import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/content.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentComponent,
        children: content,
    }
];
