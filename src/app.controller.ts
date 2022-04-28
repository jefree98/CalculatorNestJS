import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

/*@Post('/:name/:age')
hello(@Param('name') name: string, @Param('age') age: number):string{
  return "Hola " + name + " tu tienes "+age+" años de edad "//'Hello $(name) you are $(age) years old';
*/

}