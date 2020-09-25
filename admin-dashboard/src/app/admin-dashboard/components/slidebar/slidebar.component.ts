import { MenuItem } from './../menu-list';
import { Component, OnInit, Injector } from '@angular/core';

import {  ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent extends AppComponentBase implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem('about.title','','alarm','/admin/about'),
    new MenuItem('report.title','','alarm','',[
      new MenuItem('b-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/post'),
        new MenuItem('m-1','','alarm','/admin/about'),
      ]),
      new MenuItem('b-1','','alarm','',[
        new MenuItem('m-1','','alarm','/admin/post'),
        new MenuItem('m-1','','alarm','/admin/about'),
      ])
    ]),
    new MenuItem('post.title','','alarm','/admin/post'),
    new MenuItem('news.title','','alarm','',[
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
  ]
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  @ViewChild('i', null) i: ElementRef;
  constructor(
    injector: Injector,
    private translate: TranslateService
  ) {
    super(injector);
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
}
