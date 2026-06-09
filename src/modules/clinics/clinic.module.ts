import { Module } from '@nestjs/common';

import { TypeOrmModule }
  from '@nestjs/typeorm';

import { Clinic } from './entities/clinic.entity';

import { ClinicController }
  from './clinic.controller';

import { ClinicService }
  from './clinic.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Clinic,
    ]),
  ],
  controllers: [
    ClinicController,
  ],
  providers: [
    ClinicService,
  ],
  exports: [
    ClinicService,
  ],
})
export class ClinicModule {}