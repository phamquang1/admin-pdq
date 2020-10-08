import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email:string;
  name:string;
  constructor() {

   }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
  }

}
