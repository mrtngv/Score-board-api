import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';
import { Game } from 'src/games/games.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Play {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  playedAt: Date;

  @ManyToOne(() => Game, {
    eager: true,
  })
  game?: Game | null;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

}