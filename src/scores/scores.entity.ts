import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';
import { Play } from 'src/plays/plays.entity';
import { UserEntity } from 'src/users/infrastructure/persistence/relational/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Index } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @ManyToOne(() => UserEntity, {
    eager: true,
  })
  @Index()
  user?: UserEntity;

  @ManyToOne(() => Play, {
    eager: true,
  })
  play?: Play | null;

  @Column({ type: 'jsonb', default: [] })
  milestones: Array<{ attribute: string; fixed: boolean; score: number; isCompleted: boolean }>;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;
}