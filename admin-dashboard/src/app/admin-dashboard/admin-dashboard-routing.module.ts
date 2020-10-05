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
  },
  {
    path : 'autocomplete',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./autocomplete/autocomplete.module').then(m => m.AutocompleteModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'badge',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./badge/badge.module').then(m => m.BadgeModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'bottom-sheet',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./bottom-sheet/bottom-sheet.module').then(m => m.BottomSheetModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'button',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./button/button.module').then(m => m.ButtonModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'button-toggle',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./button-toggle/button-toggle.module').then(m => m.ButtonToggleModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'card',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./card/card.module').then(m => m.CardModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'checkbox',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'chips',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./chips/chips.module').then(m => m.ChipsModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'datepicker',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'dialog',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./dialog/dialog.module').then(m => m.DialogModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'divider',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./divider/divider.module').then(m => m.DividerModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'expansion-panel',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./expansion-panel/expansion-panel.module').then(m => m.ExpansionPanelModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'form-field',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./form-field/form-field.module').then(m => m.FormFieldModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'grid-list',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./grid-list/grid-list.module').then(m => m.GridListModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'icon',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./icon/icon.module').then(m => m.IconModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'input',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./input/input.module').then(m => m.InputModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'list',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./list/list.module').then(m => m.ListModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'menu',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./menu/menu.module').then(m => m.MenuModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'paginator',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./paginator/paginator.module').then(m => m.PaginatorModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'progress-bar',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'progress-spinner',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./progress-spinner/progress-spinner.module').then(m => m.ProgressSpinnerModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'radio-button',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./radio-button/radio-button.module').then(m => m.RadioButtonModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'ripples',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./ripples/ripples.module').then(m => m.RipplesModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'select',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./select/select.module').then(m => m.SelectModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'sidenav',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./sidenav/sidenav.module').then(m => m.SidenavModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'slide-toggle',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./slide-toggle/slide-toggle.module').then(m => m.SlideToggleModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'slider',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./slider/slider.module').then(m => m.SliderModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'snackbar',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./snackbar/snackbar.module').then(m => m.SnackbarModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'sort-header',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./sort-header/sort-header.module').then(m => m.SortHeaderModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'stepper',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./stepper/stepper.module').then(m => m.StepperModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'table',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./table/table.module').then(m => m.TableModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
  {
    path : 'tabs',
    component : AdminDashboardComponent,
    // canActivate : [AuthRouteGuard],
    children : [
      {
        path : '',
        children : [
          {
            path : '',
            loadChildren : () => import('./tabs/tabs.module').then(m => m.TabsModule),
            data : {
              preLoad : true
            },
            // canActivate : [AuthRouteGuard],
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
