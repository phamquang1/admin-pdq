import {AbstractControl,ValidatorFn } from '@angular/forms'


export function noWhiteSpace ():ValidatorFn{
    return (control : AbstractControl) : {[key:string]:any} =>{
        let controlValue =  control.value
        if(typeof controlValue == 'number'){
            controlValue = `${controlValue}`

        }
        let isWhiteSpace = (controlValue || '').trim().length === 0;
        let isValid = !isWhiteSpace
        return isValid ? null : {
            whitespace : "Value is only whitespace"
        }
    } 
}