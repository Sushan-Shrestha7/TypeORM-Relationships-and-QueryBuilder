import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Assignment } from './assignment';
import { Address } from './addresss';
@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;

  @ManyToOne(() => Address, (address) => address.student)
  addresses: Address;
  @ManyToMany(() => Assignment, (assignment) => assignment.student)
  assignments: Assignment[];
}
