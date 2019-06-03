import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageUrlAppend'
})
export class ImageUrlAppendPipe implements PipeTransform {
  constructor(private sanitization : DomSanitizer){}

  transform(value: any, args?: any): any {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${value})`);
  }

}
