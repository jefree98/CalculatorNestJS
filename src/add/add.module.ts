import { Module } from '@nestjs/common';
import { AddController } from './add.controller';
import { AddService } from './add.service';
import { AppModule } from 'src/app.module';


@Module({
    imports: [AddModule],
    controllers: [AddController],
    providers: [AddService],
})
export class AddModule {}
