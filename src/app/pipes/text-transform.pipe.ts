import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, arg: string): string {

    return value.split(' ').join(arg).toLowerCase();
  }

}
