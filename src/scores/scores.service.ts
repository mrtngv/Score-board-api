import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './scores.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
  ) {}

  findAll(): Promise<Score[]> {
    return this.scoresRepository.find();
  }

  findOne(id: number): Promise<Score | null> {
    return this.scoresRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.scoresRepository.delete(id);
  }
}