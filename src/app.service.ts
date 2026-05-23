import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './Student';
import { Assignment } from './assignment';
import { Address } from './addresss';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async savestudent(dto: Student) {
    return await this.studentRepository.save(dto);
  }
  async createAssignment(id: number, dto: Assignment) {
    const student = await this.studentRepository
      .createQueryBuilder('student')
      .where('student.id = :id', { id })
      .getOne();

    if (!student) {
      throw new Error('Student not found');
    }

    const assignment = this.assignmentRepository
      .createQueryBuilder()
      .insert()
      .into(Assignment)
      .values({
        title: dto.title,
        description: dto.description,
        Completed: dto.Completed,
        student: [student],
      })
      .execute();

    return assignment;
  }
  async createAddress(id: number, dto: Address) {
    const student = await this.studentRepository
      .createQueryBuilder('student')
      .where('student.id = :id', { id })
      .getOne();

    if (!student) {
      throw new Error('student not found');
    }

    const address = this.addressRepository
      .createQueryBuilder()
      .insert()
      .into(Address)
      .values({
        street: dto.street,
        zipCode: dto.zipCode,
        student: [student],
      })
      .execute();

    return address;
  }
  async getAllStudents() {
    return await this.studentRepository.find();
  }
  async getassignmentsbyid(@Param('id') id: number) {
    return await this.assignmentRepository.findOne({ where: { id } });
  }
  async getAddressById(@Param('id') id: number) {
    return await this.addressRepository.findOne({ where: { id } });
  }
  async updateaddress(id: number, dto: Address) {
    return await this.addressRepository.update(id, dto);
  }
  async updateassignment(id: number, dto: Assignment) {
    return await this.assignmentRepository.update(id, dto);
  }
  async deletestudent(id: number) {
    return await this.studentRepository.delete(id);
  }
  async getStudent(id: number) {
    return await this.studentRepository.findOne({
      where: { id },
      relations: { assignments: true, addresses: true },
    });
  }
}
