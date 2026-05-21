import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';
@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;

  @ManyToOne(() => Student, (student) => student.assignments, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  student: Student;
}
