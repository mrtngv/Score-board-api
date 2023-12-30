import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  minPlayers: number;

  @Column()
  maxPlayers: number;

  @Column()
  timeToPlayInMinutes: number;

  @Column()
  description: string;

  @Column({ type: 'jsonb', default: [] })
  milestones: Array<{ attribute: string; fixed: boolean; score: number; description: string }>;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @Column({ default: true })
  gameTest: boolean;
}