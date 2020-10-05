import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang$: BehaviorSubject<string> = new BehaviorSubject("en");
  constructor(
    private translate: TranslateService,
  ) { }
  init() {
    this.translate.setDefaultLang('en');
    this.use(this.getCurrentLanguge());
}
  getCurrentLanguge(): any {
  const lang = localStorage.getItem("currentLanguage") || "en";
  return lang;
}
  use(lang: 'en' | 'vn' | 'te') {
  localStorage.setItem("currentLanguage", lang);
  this.translate.use(lang);
  this.currentLang$.next(lang);
  //  có api để update language mỗi khi chuyển language
}
}
