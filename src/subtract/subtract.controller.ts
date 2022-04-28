import { Controller, Get, Post, Param } from '@nestjs/common';
import { SubtractService } from './subtract.service';
import { iWrapperResponse } from 'src/app.types';

@Controller('subtract')
export class SubtractController {
constructor(private readonly subtractService: SubtractService) {}

    @Get()
    getSubtract(){
        return 'connected to subtract';
    }

    @Post('/:num1/:num2')
    Subtract(
      @Param('num1') num1: string,
      @Param('num2') num2: string,
      ): iWrapperResponse {
      return this.subtractService.subtract(num1, num2);
      }
    }
    