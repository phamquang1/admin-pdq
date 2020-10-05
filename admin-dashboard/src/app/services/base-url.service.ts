import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  _baseUrl:string;
  constructor() { }
  public get getUrl(){
    return this._baseUrl = environment.baseUrl;
  }
}
