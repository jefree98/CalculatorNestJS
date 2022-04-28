import { Module } from '@nestjs/common';
import { DivideService } from './divide.service';

@Module({
  providers: [DivideService]
})
export class DivideModule {}
