import { Component, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/router-transition';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [appModuleAnimation()]
})
export class AboutComponent implements OnInit {
  visible : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  alertPrimary(){
    this.visible = true;
    console.log(this.visible);
    
  }

}
