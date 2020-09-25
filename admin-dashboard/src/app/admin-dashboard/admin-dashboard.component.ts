import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sidebarOpen : boolean = true
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  watcher: Subscription;
  constructor(
    media: MediaObserver
  ) {
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.sidebarOpen = false;
        this.over = 'over';
      } else {
        this.sidebarOpen = true;
        this.over = 'side';
      }
    });
   }

  ngOnInit(): void {
  }
  sideBarToggle($event){
    this.sidebarOpen = !this.sidebarOpen
  }

}
