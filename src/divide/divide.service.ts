import { Injectable } from '@nestjs/common';
import { iWrapperResponse } from 'src/app.types';

@Injectable()
export class DivideService {
    divide(num1: string, num2: string): iWrapperResponse {
        const result = parseInt(num1) / parseInt(num2);
    
        return {
          result,
          message: `The result of ${num1} / ${num2} is: ${result}`,
          error: false
        }
      }
    }
