import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appModuleAnimation } from '../../animations/router-transition';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css'],
  animations: [appModuleAnimation()]
})
export class DialogConfirmComponent implements OnInit {
  title : string = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _dialogRef: MatDialogRef<DialogConfirmComponent>,
  ) { }

  ngOnInit(): void {
    this.title = this.data.title
  }

}
