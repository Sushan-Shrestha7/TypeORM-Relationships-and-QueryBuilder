import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @OneToMany(() => Assignment, (assignment) => assignment.student)
  assignments: Assignment[];
  @OneToMany(() => Address, (address) => address.student)
  addresses: Address[];
}
