import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selfpip'
})
export class SelfpipPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
     value=String(value)
     return value.replace(/[-_](a-z)?/g,(match,$1='')=>$1.toUpperCase())
  }

}
