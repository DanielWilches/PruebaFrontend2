import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, tap, pluck } from 'rxjs/operators';
import { ViewFlags } from '@angular/compiler/src/core';

@Pipe({
  name: 'capitaliza'
})
export class CapitalizaPipe implements PipeTransform {

  transform(text: string): string {
    const TEXTARR = text.split('');
    TEXTARR.splice(0, 1, TEXTARR[0].toUpperCase());
    return TEXTARR.join('');
  }
}
