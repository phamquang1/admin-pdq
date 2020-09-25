import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type : string;
  @Input() routerLink: string;
  @Input() buttonType : string = "button";
  @Input() isFullWidth: boolean;
  @Input() hasGap : boolean;
  @Input() disabled : boolean;
  @Input() fontWeight : string = '100'
  @Output() onClick = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  clickFuntion(){
    this.onClick.emit();
  }
}
