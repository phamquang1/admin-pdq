// tslint:disable-next-line:eofline
import { HttpParams } from '@angular/common/http';

export function isEmty(value:any){
    return value === undefined;
}
export function isNotEmty(value:any){
    return !isEmty(value);
}

export function mapToHttpParamsQuery(params: object) {
    let httpParams : HttpParams = new HttpParams();
    for(let property in params) {
        if(params.hasOwnProperty(property)){
            httpParams = httpParams.set(property,params[property]);
        }
    }
    return httpParams;
}
export function mapFormData(body:object){
    let formData = new FormData();
    for(let property in body){
        if(body.hasOwnProperty(property) && isNotEmty(body[property])){
            formData.append(property,body[property]);
        }
    }
    return formData;
}
