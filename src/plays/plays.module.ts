import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Play } from './plays.entity';
import { PlaysService } from './plays.service';
import { PlaysController } from './plays.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Play])],
  providers: [PlaysService],
  controllers: [PlaysController],
})
export class PlaysModule {}