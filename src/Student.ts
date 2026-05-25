import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
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

  @OneToOne(() => Address, (address) => address.student)
  addresses: Address;
  @OneToMany(() => Assignment, (assignment) => assignment.student)
  assignments: Assignment[];
}
