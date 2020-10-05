import { MenuItem } from './../menu-list';
import { Component, OnInit, Injector } from '@angular/core';

import {  ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { Route } from '@angular/compiler/src/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent extends AppComponentBase implements OnInit {
  public section = '';
  menuItems: MenuItem[] = [
    new MenuItem('about.title','','alarm','/admin/about'),
    new MenuItem('report.title','','face','',[
      new MenuItem('b-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/post'),
        new MenuItem('m-1','','alarm','/admin/about'),
      ]),
      new MenuItem('b-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/post'),
        new MenuItem('m-1','','alarm','/admin/about'),
      ])
    ]),
    new MenuItem('post.title','','favorite','/admin/post'),
    new MenuItem('news.title','','flaky','',[
      new MenuItem('m-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/about'),
        new MenuItem('m-1','','alarm','/admin/about'),
        
      ]),
      new MenuItem('m-1','','alarm',''),
      new MenuItem('m-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/about'),
        // new MenuItem('m-1','','','/admin/about'),
        // new MenuItem('m-1','','','/admin/about'),

      ]),
    ]),
    new MenuItem('autocomplete.title','','3d_rotation','/admin/autocomplete'),
    new MenuItem('badge.title','','accessibility','/admin/badge'),
    new MenuItem('bottomSheet.title','','accessible','/admin/bottom-sheet'),
    new MenuItem('button.title','','accessible_forward','/admin/button'),
    new MenuItem('buttonToggle.title','','account_balance','/admin/button-toggle'),
    new MenuItem('card.title','','account_balance_wallet','/admin/card'),
    new MenuItem('checkbox.title','','account_box','/admin/checkbox'),
    new MenuItem('chips.title','','account_circle','/admin/chips'),
    new MenuItem('datepicker.title','','add_shopping_cart','/admin/datepicker'),
    new MenuItem('dialog.title','','add_task','/admin/dialog'),
    new MenuItem('divider.title','','addchart','/admin/divider'),
    new MenuItem('expansionPanel.title','','admin_panel_settings','/admin/expansion-panel'),
    new MenuItem('formField.title','','all_inbox','/admin/form-field'),
    new MenuItem('gridList.title','','all_out','/admin/grid-list'),
    new MenuItem('icon.title','','analytics','/admin/icon'),
    new MenuItem('input.title','','anchor','/admin/input'),
    new MenuItem('list.title','','android','/admin/list'),
    new MenuItem('menu.title','','announcement','/admin/menu'),
    new MenuItem('paginator.title','','api','/admin/paginator'),
    new MenuItem('progressBar.title','','app_blocking','/admin/progress-bar'),
    new MenuItem('progressSpinner.title','','arrow_circle_down','/admin/progress-spinner'),
    new MenuItem('radioButton.title','','arrow_circle_up','/admin/radio-button'),
    new MenuItem('ripples.title','','arrow_right_alt','/admin/ripples'),
    new MenuItem('select.title','','article','/admin/select'),
    new MenuItem('slideToggle.title','','aspect_ratio','/admin/slide-toggle'),
    new MenuItem('slider.title','','assessment','/admin/slider'),
    new MenuItem('snackbar.title','','assignment','/admin/snackbar'),
    new MenuItem('sortHeader.title','','assignment_ind','/admin/sort-header'),
    new MenuItem('stepper.title','','assignment_late','/admin/stepper'),
    new MenuItem('table.title','','assignment_turned_in','/admin/table'),
    new MenuItem('tabs.title','','autorenew','/admin/tabs'),
    // new MenuItem('about.title','','alarm','/admin/icon'),
    // new MenuItem('about.title','','alarm','/admin/input'),
    // new MenuItem('about.title','','alarm','/admin/list'),
    // new MenuItem('about.title','','alarm','/admin/menu'),
    // new MenuItem('about.title','','alarm','/admin/paginator'),
    // new MenuItem('about.title','','alarm','/admin/progress-bar'),
    // new MenuItem('about.title','','alarm','/admin/progress-spinner'),
  ]
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  @ViewChild('i', null) i: ElementRef;
  constructor(
    injector: Injector,
    private translate: TranslateService,
    private router: Router,
  ) {
    super(injector);
    this.router.events.subscribe((event : RouterEvent) => {
      if(event instanceof NavigationEnd){
        const url = event.url;
        this.section = '/admin/' + this.mappingSection(url)
        
      }
    })
  }

  ngOnInit(): void {
    
  }
  // showMenuItem(menuItem: MenuItem): boolean {
  //   if (menuItem.permissionName) {
  //     return this.permission.isGranted(menuItem.permissionName);
  //   } else if (menuItem.items && menuItem.items.length > 0) {
  //     return menuItem.items.some(s => this.permission.isGranted(s.permissionName))
  //   }
  //   return true;
  // }
  showMenuItem(menuItem: MenuItem): boolean {
    // if(menuItem.items && menuItem.items.length > 0){
    //   return true;
    // } else {
    //   return false ;
    // }
    if(menuItem){
      return true;
    }
  }
  dropClick(id : string) {
    let addClass = document.getElementById(id)
    let toggle = document.getElementById(id + 'a')
    // addClass.classList.add('show')
    if(addClass.style.display == 'none'){
      addClass.style.display = 'block';
      addClass.style.transition = 'all 0.3s'
    } else if( addClass.style.display == 'block') {
      addClass.style.display = 'none';
      addClass.style.transition = 'all 0.3s'
    } else {
      addClass.style.display = 'block';
      addClass.style.transition = 'all 0.3s'
    }
  }

  mappingSection(url:string){
    if(url == '/app' || url == '/'){
      return 'home'
    } else if(url.includes('/about')){
      return 'about'
    } else if(url.includes('/post')){
      return 'post'
    } else if(url.includes('/autocomplete')){
      return 'autocomplete'
    } else if(url.includes('/badge')){
      return 'badge'
    }else if(url.includes('/bottom-sheet')){
      return 'bottom-sheet'
    }else if(url.includes('/button')){
      return 'button'
    }else if(url.includes('/button-toggle')){
      return 'button-toggle'
    }else if(url.includes('/card')){
      return 'card'
    }else if(url.includes('/checkbox')){
      return 'checkbox'
    }else if(url.includes('/chips')){
      return 'chips'
    }else if(url.includes('/datepicker')){
      return 'datepicker'
    }else if(url.includes('/dialog')){
      return 'dialog'
    }else if(url.includes('/divider')){
      return 'divider'
    }else if(url.includes('/expansion-panel')){
      return 'expansion-panel'
    }else if(url.includes('/form-field')){
      return 'form-field'
    }else if(url.includes('/grid-list')){
      return 'grid-list'
    }else if(url.includes('/icon')){
      return 'icon'
    }else if(url.includes('/input')){
      return 'input'
    }else if(url.includes('/list')){
      return 'list'
    }else if(url.includes('/menu')){
      return 'menu'
    }else if(url.includes('/paginator')){
      return 'paginator'
    }else if(url.includes('/progress-bar')){
      return 'progress-bar'
    }else if(url.includes('/progress-spinner')){
      return 'progress-spinner'
    }else if(url.includes('/radio-button')){
      return 'radio-button'
    }else if(url.includes('/ripples')){
      return 'ripples'
    }else if(url.includes('/select')){
      return 'select'
    }else if(url.includes('/sidenav')){
      return 'sidenav'
    }else if(url.includes('/slide-toggle')){
      return 'slide-toggle'
    }else if(url.includes('/slider')){
      return 'slider'
    }else if(url.includes('/snackbar')){
      return 'snackbar'
    }else if(url.includes('/sort-header')){
      return 'sort-header'
    }else if(url.includes('/stepper')){
      return 'stepper'
    }else if(url.includes('/table')){
      return 'table'
    }else if(url.includes('/tabs')){
      return 'tabs'
    }
  }
}
