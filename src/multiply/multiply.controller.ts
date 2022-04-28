import { Controller, Get, Post, Param } from '@nestjs/common';
import { MultiplyService } from './multiply.service';
import { iWrapperResponse } from 'src/app.types';

@Controller('multiply')
export class MultiplyController {
    constructor(private readonly multiplyService: MultiplyService){}

@Get()
getMultiply(){
    return 'connected to Multiply';
}

@Post('/:num1/:num2')
Multiply(
  @Param('num1') num1: string,
  @Param('num2') num2: string,
    ): iWrapperResponse {
  return this.multiplyService.multiply(num1, num2);
  }
}

