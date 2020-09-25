import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-demo',
  templateUrl: './dynamic-demo.component.html',
  styleUrls: ['./dynamic-demo.component.css']
})
export class DynamicDemoComponent implements OnInit {
  @Input() title:string =''
  a: number = 1
  constructor() { }

  ngOnInit(): void {
    console.log("a",this.a++)
  }

}
