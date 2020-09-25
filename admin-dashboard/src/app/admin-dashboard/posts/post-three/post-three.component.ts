import { Component, Inject, OnInit } from '@angular/core';
import { ColorModule } from './color.module';
import { TextModule } from './text.module';

@Component({
  selector: 'app-post-three',
  templateUrl: './post-three.component.html',
  styleUrls: ['./post-three.component.css'],
  providers: [
    {
    provide : "demo",
    useValue : "hi",
    multi : true
  },
  {
    provide :"demo",
    useValue : "hello",
    multi: true
  }
]
})
export class PostThreeComponent implements OnInit {
  color:string
  constructor(@Inject("demo") public textColors) { 
    console.log(textColors)
    // textColors.forEach(i => {
    //     console.log(i.textColor)
    // });

    // this.color = textColor.textColor
  }

  ngOnInit(): void {
    
  }

}
