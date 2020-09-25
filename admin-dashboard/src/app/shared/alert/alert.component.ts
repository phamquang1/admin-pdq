import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() type : 'success' | 'error' | 'danger';
  @Output() private close = new EventEmitter<any>();
  visible: boolean = true ;
  faTimes
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.visible = false;
    this.close.next();
  }
}
