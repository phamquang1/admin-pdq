import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languge',
  templateUrl: './languge.component.html',
  styleUrls: ['./languge.component.css']
})
export class LangugeComponent implements OnInit {
  language : string = "vn";
  constructor(
    private translate : TranslateService
  ) {
    translate.setDefaultLang('vn');
    translate.use('vn');
  }

  ngOnInit(): void {
  }
  switchLanguge(language:string){
    this.translate.use(language)
    console.log("language",language)
  }

}
