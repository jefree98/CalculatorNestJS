import { Module } from '@nestjs/common';
import { MultiplyService } from './multiply.service';

@Module({
  providers: [MultiplyService]
})
export class MultiplyModule {}
