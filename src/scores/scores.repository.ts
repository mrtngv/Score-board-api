import { EntityRepository, Repository } from 'typeorm';
import { Score } from './scores.entity';

@EntityRepository(Score)
export class ScoresRepository extends Repository<Score> {}
