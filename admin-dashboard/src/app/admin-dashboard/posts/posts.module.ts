import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { PostOneComponent } from './post-one/post-one.component';
import { PostTwoComponent } from './post-two/post-two.component';
import { PostThreeComponent } from './post-three/post-three.component';
import { ContentOneDirective } from './post-one/content-one.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PostsComponent, PostOneComponent, PostTwoComponent, PostThreeComponent, ContentOneDirective],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    // NotifierModule.withConfig(customNotifierOptions),
    SharedModule,
    TranslateModule
  ],
  exports : [PostOneComponent, PostTwoComponent, PostThreeComponent]
})
export class PostsModule { }
