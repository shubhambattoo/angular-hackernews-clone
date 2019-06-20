import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlify'
})
export class UrlifyPipe implements PipeTransform {

  transform(value: string): any {

    const text = value;

    const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    const convertedVal = text.replace(regex, "<a target='_blank' href='$1'>$1</a>");

    const regex2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

    return convertedVal.replace(regex2, '$1<a target="_blank" href="http://$2">$2</a>');
    
  }

}
