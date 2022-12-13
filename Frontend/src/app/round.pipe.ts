import { Pipe, PipeTransform } from '@angular/core';

/* Pipe for rounding numbers to a nearest step
 * Takes a step argument with default value 0.05 
 * Example:
 *  {{ 253.53 | round }} => 253.55
*/
@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, step: number = 0.05): number {
    return Math.round(value / step) * step
  }

}
