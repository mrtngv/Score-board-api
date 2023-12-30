import { EntityRepository, Repository } from 'typeorm';
import { Game } from './games.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {}
