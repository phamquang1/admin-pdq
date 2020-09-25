// import { PermissionCheckerService, NotifyService, MessageService } from 'abp-ng2-module';
import { Injector } from '@angular/core';
import { NotifierService } from 'angular-notifier';
export abstract class AppComponentBase {
    // permission: PermissionCheckerService;
    noitify: NotifierService;
    // message: MessageService;
    constructor(injector: Injector,
        // private noitifier : NotifierService
        ){
        // this.permission = injector.get(PermissionCheckerService);
        this.noitify = injector.get(NotifierService);
        // this.message = injector.get(MessageService);
    }
    // isGranted(permissionName: string): boolean {
    //     return this.permission.isGranted(permissionName);
    // }
}