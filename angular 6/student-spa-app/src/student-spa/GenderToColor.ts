import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'GenderToColor'})
export class GenderToColor implements PipeTransform {
    newStr:String;
  transform(value: string): String {
    if(value){
        this.newStr="Aquamarine";
    }
    else{
        this.newStr="pink";
    }
    
    return this.newStr;
  }
}