import { Component, ContentChild, OnInit, TemplateRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noWhiteSpace } from 'src/app/shared/validate/validate-white-space';
import { ContentOneDirective } from './content-one.directive';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.css']
})
export class PostOneComponent implements OnInit {
  signForm: FormGroup
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
    
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
