import { EntityRepository, Repository } from 'typeorm';
import { Play } from './plays.entity';

@EntityRepository(Play)
export class PlaysRepository extends Repository<Play> {}
