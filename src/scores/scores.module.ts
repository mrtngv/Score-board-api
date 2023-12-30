import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './scores.entity';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Score])],
  providers: [ScoresService],
  controllers: [ScoresController],
})
export class ScoresModule {}