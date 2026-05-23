import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { Address } from './addresss';
import { Student } from './Student';
import { Assignment } from './assignment';
configDotenv();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Address, Student, Assignment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Address, Student, Assignment]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
