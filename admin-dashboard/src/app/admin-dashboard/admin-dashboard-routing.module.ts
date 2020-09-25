import { PostsComponent } from './posts/posts.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteGuard } from '../shared/auth/auth-route.guard';


const routes: Routes = [
  {
    path : 'post',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./posts/posts.module').then(m => m.PostsModule),
            data: {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      },
    ]
  },
  {
    path : 'about',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./about/about.module').then(m => m.AboutModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
