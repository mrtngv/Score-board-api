import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Play } from './plays.entity';

@Injectable()
export class PlaysService {
  constructor(
    @InjectRepository(Play)
    private playsRepository: Repository<Play>,
  ) {}

  findAll(): Promise<Play[]> {
    return this.playsRepository.find();
  }

  findOne(id: number): Promise<Play | null> {
    return this.playsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.playsRepository.delete(id);
  }
}