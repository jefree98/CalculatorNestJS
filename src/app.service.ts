import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 /*suma(num1: number, num2: number): string{
   return "la suma es: "+(num1+num2);
 } */
}
