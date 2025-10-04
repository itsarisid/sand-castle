import { Routes } from '@angular/router';

import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/content.routes';
import { AdminGuard } from './shared/guard/admin.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: ContentComponent,
        children: content,
        canActivate: [AdminGuard],
    }
];
