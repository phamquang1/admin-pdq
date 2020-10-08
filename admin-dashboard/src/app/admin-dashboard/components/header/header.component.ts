import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
    private route : Router
  ) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleSideBarMenu.emit();
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    setTimeout(()=>{
      this.route.navigate(['/account/login']);
    },500)
  }
  facebook(){
    window.location.href="https://www.facebook.com/phamdinhquangjibig"
  }
}
