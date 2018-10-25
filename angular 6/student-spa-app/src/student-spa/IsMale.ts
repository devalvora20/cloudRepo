import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isMale'})
export class IsMale implements PipeTransform {
    newStr:String;
  transform(value: string): String {
    if(value){
        this.newStr="Male";
    }
    else{
        this.newStr="Female";
    }
    
    return this.newStr;
  }
}