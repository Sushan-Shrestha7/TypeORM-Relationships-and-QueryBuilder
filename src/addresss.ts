import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  zipCode: string;
  @OneToMany(() => Student, (student) => student.addresses, {
    onDelete: 'CASCADE',
  })
  student: Student[];
}
