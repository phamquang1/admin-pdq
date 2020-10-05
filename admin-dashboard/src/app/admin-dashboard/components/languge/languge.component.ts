import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-languge',
  templateUrl: './languge.component.html',
  styleUrls: ['./languge.component.css']
})
export class LangugeComponent implements OnInit {
  // language : string
  languageForm: FormControl = new FormControl();
  constructor(
    private translate : TranslateService,
    private languageService: LanguageService,
  ) {
    this.languageForm.setValue(this.languageService.getCurrentLanguge());
    this.translate.use(this.languageService.getCurrentLanguge());
    this.languageForm.valueChanges.subscribe(lang => {
      this.languageService.use(lang);
    })
  }

  ngOnInit(): void {
  }
  // switchLanguge(language:string){
  //   this.translate.use(language)
  //   console.log("language",language)
  // }

}
