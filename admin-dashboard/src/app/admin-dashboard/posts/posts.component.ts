import { DialogConfirmComponent } from './../../shared/dialog-component/dialog-confirm/dialog-confirm.component';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit, Injector, ContentChild, TemplateRef } from '@angular/core';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { appModuleAnimation } from 'src/app/shared/animations/router-transition';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ContentOneDirective } from './post-one/content-one.directive';
// import { PermissionCheckerService } from 'abp-ng2-module';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [appModuleAnimation()]
})
export class PostsComponent extends AppComponentBase implements OnInit {
  isDemoGranted : boolean
  @ContentChild(ContentOneDirective ,{static : true, read : TemplateRef}) explicitBody : TemplateRef<unknown>;
  constructor(
    injector : Injector,
    private dialog: MatDialog,
    private translate: TranslateService,
    // private _permissionChecker: PermissionCheckerService,
    // private noityfier : NotifierService
  ) {
    super(injector);
  }
  
  ngOnInit(): void {
  
    
  }
  openDialogDemo(){
    
    let item = {
      title : "demo thooi"
    }
    const dialogRef = this.dialog.open(DialogConfirmComponent,{
      data: item
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log("res",res)
      if(res == true){
        this.noitify.notify('success',this.translate.instant('post.title'))
      } else {
        this.noitify.notify('error',this.translate.instant('about.title'))
      }
    })
    
  }
  
}
