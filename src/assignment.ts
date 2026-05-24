import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';
import { ApiProperty } from 'node_modules/@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsEmpty, IsOptional } from 'class-validator';
@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @ApiProperty({
    example: 'Math Homework',
    description: 'The title of the assignment',
  })
  title: string;
  @Column()
  @IsOptional()
  @IsEmpty()
  @ApiProperty({
    example: 'Solve the following problems',
    description: 'The description of the assignment',
  })
  description: string;
  @Column()
  @ApiProperty({
    example: false,
    description: 'The completion status of the assignment',
  })
  Completed: boolean;
  @ManyToMany(() => Student, (student) => student.assignments)
  student: Student[];
}
