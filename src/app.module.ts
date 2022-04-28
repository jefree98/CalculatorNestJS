import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddController } from './add/add.controller';
import { AddModule } from './add/add.module';
import { AddService } from './add/add.service';
import { SubtractController } from './subtract/subtract.controller';
import { SubtractService } from './subtract/subtract.service';
import { SubtractModule } from './subtract/subtract.module';
import { MultiplyController } from './multiply/multiply.controller';
import { MultiplyModule } from './multiply/multiply.module';
import { MultiplyService } from './multiply/multiply.service';
import { DivideController } from './divide/divide.controller';
import { DivideModule } from './divide/divide.module';
import { DivideService } from './divide/divide.service';

@Module({
  imports: [AddModule, SubtractModule, MultiplyModule, DivideModule],
  controllers: [AppController, AddController, SubtractController, MultiplyController, DivideController],
  providers: [AppService, AddService, SubtractService, MultiplyService, DivideService],
})
export class AppModule {}
