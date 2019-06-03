import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrlAppendSimple'
})
export class ImageUrlAppendSimplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `url(${value})`;
  }

}
