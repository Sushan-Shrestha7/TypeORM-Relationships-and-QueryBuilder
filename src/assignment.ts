import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';
@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  Completed: boolean;
  @ManyToMany(() => Student, (student) => student.assignments)
  student: Student[];
}
