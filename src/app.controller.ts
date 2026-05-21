import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './Student';
import { Assignment } from './assignment';
import { Address } from './addresss';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/savestudent')
  async createstudent(@Body() dto: Student) {
    return await this.appService.savestudent(dto);
  }
  @Post(':id/assignment')
  async createAssignment(@Param('id') id: number, @Body() dto: Assignment) {
    return await this.appService.createAssignment(id, dto);
  }
  @Post(':id/address')
  async createAddress(@Param('id') id: number, @Body() dto: Address) {
    return await this.appService.createAddress(id, dto);
  }
  @Get('/students')
  async getallstudents() {
    return await this.appService.getAllStudents();
  }
  @Get('/assignments/:id')
  async getAssignmentById(@Param('id') id: number) {
    return await this.appService.getassignmentsbyid(id);
  }
}
