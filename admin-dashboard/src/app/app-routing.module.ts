import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteGuard } from './shared/auth/auth-route.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'admin/post',
    pathMatch : 'full'
  },
  {
    path : 'account',
    component : AppComponent,
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            // component : AccountComponent,
            loadChildren : () => import('./account/account.module').then(m => m.AccountModule),
            data : {
              preLoad : true
            }
          }
        ]
      }
    ]
    
  },
  {
    path : 'admin',
    component : AppComponent,
    canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            // component : AccountComponent,
            loadChildren : () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
            data : {
              preLoad : true
            },
            
          }
        ]
      }
    ]
    
    
  },
  {
    path : 'main',
    component : AppComponent,
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            // component : AccountComponent,
            loadChildren : () => import('./main-website/main-website.module').then(m => m.MainWebsiteModule),
            data : {
              preLoad : true
            }
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
