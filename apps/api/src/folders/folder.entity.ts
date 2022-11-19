import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
@Entity(
  {
    name: 'folder',
  }
)
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500 })
    name: string;

    @Column()
    parent: number;

  
    @ManyToOne(() => User, (user) => user.folders, {
      onDelete: 'CASCADE',
    })
    user: User;
     
}
