import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFecha'
})
export class FormatFechaPipe implements PipeTransform {

  transform(fecha: Date | string ): string  {

    let inputDate: Date;

    console.log('formatFechaPipe', fecha);
    
    if(typeof fecha === 'string'){
      inputDate = new Date(fecha);
      if (isNaN(inputDate.getTime())) return '';

    }else if(fecha instanceof Date) {
      inputDate = fecha;
    }else return '';

    const options : Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',};

    return inputDate.toLocaleDateString(undefined, options);

  }

}
