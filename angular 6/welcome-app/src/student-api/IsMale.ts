import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isMale'})
export class IsMale implements PipeTransform {
    newStr:String;
  transform(value: string): String {
    console.log(value);
    if(value){
        this.newStr="Male";
    }
    else{
        this.newStr="Female";
    }
    
    return this.newStr;
  }
}