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
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/savestudent')
  @ApiOperation({ summary: 'Create a new student' })
  async createstudent(@Body() dto: Student) {
    return await this.appService.savestudent(dto);
  }
  @Post(':id/assignment')
  @ApiOperation({ summary: 'Create a new assignment' })
  async createAssignment(@Param('id') id: number, @Body() dto: Assignment) {
    return await this.appService.createAssignment(id, dto);
  }
  @Post(':id/address')
  @ApiOperation({ summary: 'Create a new address' })
  async createAddress(@Param('id') id: number, @Body() dto: Address) {
    return await this.appService.createAddress(id, dto);
  }
  @Get('/students')
  @ApiOperation({ summary: 'Get all students' })
  async getallstudents() {
    return await this.appService.getAllStudents();
  }
  @Get('/address/:id')
  @ApiOperation({ summary: 'Get address by ID' })
  async getAddressById(@Param('id') id: number) {
    return await this.appService.getAddressById(id);
  }
  @Get('/assignments/:id')
  @ApiOperation({ summary: 'Get assignment by ID' })
  async getAssignmentById(@Param('id') id: number) {
    return await this.appService.getassignmentsbyid(id);
  }
  @Put('/updateassignment/:id')
  @ApiOperation({
    summary: 'Update an existing assignment',
  })
  async updateassignment(@Param('id') id: number, @Body() dto: Assignment) {
    return await this.appService.updateassignment(id, dto);
  }
  @Put('/updateaddress/:id')
  @ApiOperation({ summary: 'Update an existing address' })
  async updateaddress(@Param('id') id: number, @Body() dto: Address) {
    return await this.appService.updateaddress(id, dto);
  }
  @Delete('/deletestudent/:id')
  @ApiOperation({ summary: 'Delete a student' })
  async deletestudent(@Param('id') id: number) {
    return await this.appService.deletestudent(id);
  }
  @Get('/students/:id')
  @ApiOperation({ summary: 'Get student by ID' })
  async getStudent(@Param('id') id: number) {
    return await this.appService.getStudent(id);
  }
}
