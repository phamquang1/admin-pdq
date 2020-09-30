import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { from, merge, of } from 'rxjs';
import { ColorModule } from './color.module';
import { TextModule } from './text.module';
import { delay, filter, first, map, pluck, take } from 'rxjs/operators'

@Component({
  selector: 'app-post-three',
  templateUrl: './post-three.component.html',
  styleUrls: ['./post-three.component.css'],
  providers: [
    {
    provide : TextModule,
    useValue : "red",
    multi : true
  },
  {
    provide :ColorModule,
    useClass : ColorModule,
    multi: true
  },
  
]
})
export class PostThreeComponent implements OnInit {
  color:string
  constructor(@Inject(TextModule) public textColors,
  @Inject(ColorModule) public colorModule) { 
    console.log(textColors,colorModule)
    this.color = textColors
    console.log(colorModule[0].textColor1)
    // console.log(textColors[0].textColor2)
    // textColors.forEach(i => {
    //     console.log(i.textColor)
    // });

    // this.color = textColor.textColor
  }
  items = [1,2,3,4,5,6]
   users = [
    {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
    {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
  ];
  observer = {
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('completed'),
  }


  ngOnInit(): void {
    from(this.users).pipe(
      map(data => {
        console.log('inside',data)
      })
    )
//map
    merge(
      of(this.users[0]).pipe(delay(2000)),
      of(this.users[1]).pipe(delay(4000)),
    ).pipe(
      map(user => ({
        ...user,
        fullName : `${user.username} ${user.firstname}`
      }))
    )
//pluck
    const params$ = of({id : 123})
    const id$ = params$.pipe(pluck('id'))
//fillter
    from(this.items).pipe(
      filter(x => x%2 === 0)
    )
//fisrt
    from(this.items).pipe(
      first()
    )
    from(this.items).pipe(
      first(x => x > 5 )
    )
    from(this.items).pipe(
      take(3)
    ).subscribe(this.observer)
  }

}
