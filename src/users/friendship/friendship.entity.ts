import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { UserEntity } from '../infrastructure/persistence/relational/entities/user.entity';

@Entity()
export class FriendshipEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  sender: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  receiver: UserEntity;

  @Column({ default: 'pending' }) // You can use an enum for status: 'pending', 'accepted', etc.
  status: string;
}