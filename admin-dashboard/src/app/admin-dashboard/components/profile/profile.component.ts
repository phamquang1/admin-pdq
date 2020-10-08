import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email:string;
  name:string;
  profiles: profileDto;
  constructor() {

   }

  ngOnInit(): void {
    this.profiles = {
      email : this.email = localStorage.getItem('email'),
      name : this.name = localStorage.getItem('name'),
    }
  }

}
export class profileDto{
  email : string
  name: string
}
