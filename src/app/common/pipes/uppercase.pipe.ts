import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'UpperCasePipe'
})

export class UpperCasePipe implements PipeTransform {
    // transform(value: number, multiply: string): number {
    //     let mul = parseFloat(multiply);
    //     return mul * value
    // }

    transform(title: String): String {
        return title.toUpperCase();
    }
} 