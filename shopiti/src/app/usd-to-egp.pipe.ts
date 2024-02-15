import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number): number {


    return value*60;
  }

}

/*
port class ReversePipe implements PipeTransform {

  nvalue: string

  transform(value: any, ...args): any {

  this.nvalue = value.split('').reverse().join('');

    return this.nvalue;

  }
  */
