import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "login",
    component : AccountComponent,
    children : [
      {
        path : '',
        children : [
          {
            path :'',
            loadChildren : ()=> import('./login/login.module').then(m=>m.LoginModule)
          }
        ]
      }
    ]
  },
  {
    path: "register",
    component : AccountComponent,
    children : [
      {
        path : '',
        children : [
          {
            path :'',
            loadChildren : ()=> import('./register/register.module').then(m=>m.RegisterModule)
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
export class AccountRoutingModule { }
