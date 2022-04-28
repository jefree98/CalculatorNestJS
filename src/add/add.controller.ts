import { Controller, Post, Param, Get } from '@nestjs/common';
import { AddService } from './add.service';
import { iWrapperResponse } from 'src/app.types';

@Controller('add')
export class AddController {
constructor(private readonly addService: AddService) {}

@Get()
getAdd(){
    return 'connected to add';
}

@Post('/:num1/:num2')
Add(
  @Param('num1') num1: string,
  @Param('num2') num2: string,
  ): iWrapperResponse {
  return this.addService.add(num1, num2);
  }
}
