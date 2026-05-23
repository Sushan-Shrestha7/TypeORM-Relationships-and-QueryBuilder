import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './Student';
import { Assignment } from './assignment';
import { Address } from './addresss';

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
  @Get('/address/:id')
  async getAddressById(@Param('id') id: number) {
    return await this.appService.getAddressById(id);
  }
  @Get('/assignments/:id')
  async getAssignmentById(@Param('id') id: number) {
    return await this.appService.getassignmentsbyid(id);
  }
  @Put('/updateassignment/:id')
  async updateassignment(id: number, dto: Assignment) {
    return this.appService.updateassignment(id, dto);
  }
  @Put('/updateaddress/:id')
  async updateaddress(id: number, @Body() dto: Address) {
    return await this.appService.updateaddress(id, dto);
  }
  @Delete('/deletestudent/:id')
  async deletestudent(@Param('id') id: number) {
    return await this.appService.deletestudent(id);
  }
  @Get('/students/:id')
  getStudent(@Param('id') id: number) {
    return this.appService.getStudent(+id);
  }
}
