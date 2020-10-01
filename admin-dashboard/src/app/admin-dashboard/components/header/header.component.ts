import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarMenu : EventEmitter<any> = new EventEmitter()
  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleSideBarMenu.emit()
  }
  logout() {
    localStorage.removeItem('access_token');
  }
}
