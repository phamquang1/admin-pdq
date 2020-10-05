import { Component, ContentChild, OnInit, TemplateRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, from, fromEvent, interval, of } from 'rxjs';
import { delay, map, mergeAll, switchAll, take } from 'rxjs/operators'
import { noWhiteSpace } from 'src/app/shared/validate/validate-white-space';
import { ContentOneDirective } from './content-one.directive';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.css']
})
export class PostOneComponent implements OnInit {
  signForm: FormGroup;
   observer = {
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log('complete'),
  };
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();

    forkJoin([
      of('1').pipe(delay(1000)),
      of('2').pipe(delay(2000)),
      of('hello').pipe(delay(3000)),

    ]).pipe(map(([a,b,c]) => ({a,b,c})))

    const hoo = interval(1000)
    .pipe(map(val => of(`I am ${val}`)), mergeAll())


    const ho  = fromEvent(document,'click')
    .pipe(map(val => interval(1000).pipe(take(4))),switchAll())
    ho
  }


  initForm(){
    this.signForm = this.fb.group({
      email: ['',
            Validators.compose([
              // Validators.required,
              Validators.minLength(6),
              noWhiteSpace()
              // Validators.pattern(/^[a-z]{6,32}$/i)
            ])
    ],
    password: ['',
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)
            ])
    ],
      confirmpassword : ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)
      ])
    ],
    
    },
    {
      validators: this.validateControlsValue("password", "confirmpassword")
    }
    )
    
  }
  onSubmit(){
    console.log(this.signForm)
  }
  validateControlsValue(firstControlName: string, secondControlName: string) {
    return function(formGroup: FormGroup) {
      const { value: firstControlValue } = formGroup.get(firstControlName);
      const { value: secondControlValue } = formGroup.get(secondControlName);
      return firstControlValue === secondControlValue
        ? null
        : {
            valueNotMatch: {
              firstControlValue,
              secondControlValue
            }
          };
    };
  }

}
