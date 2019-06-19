import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskpasskowrd'
})
export class MaskpasskowrdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
